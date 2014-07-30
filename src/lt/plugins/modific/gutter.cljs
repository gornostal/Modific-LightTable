(ns lt.plugins.modific.gutter
  (:require [lt.object :as object]
            [lt.util.dom :as dom]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.command :as cmd]
            [lt.plugins.modific.diff :as diff]
            [lt.plugins.modific.util :as util])
  (:require-macros [lt.macros :refer [defui behavior]]))




;; Leaving for testing purposes
#_(def diff '({:removed "(defn- ->chunks [diff]", :mod-type :*, :lines (11)}
            {:removed "                   (drop-while (complement #(re-find re-header %)))\n                   (rest))", :mod-type :*, :lines (14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34)}
            {:removed "        (recur (if (and k prev-k (not= prev-k k))\n                 :*\n                 k)", :mod-type :*, :lines (60)}
            {:removed nil, :mod-type :+, :lines (74)}
            {:removed "", :mod-type :-, :lines [80]}
            {:removed "       \"cat /tmp/test.diff\"", :mod-type :*, :lines (99)}))


(defn- ->gutter-markers [diff m-width m-height]
  (reduce into []
   (map
    (fn [chunk] (map
                 #(vector % (make-gutter-marker (:mod-type chunk) m-width m-height))
                 (:lines chunk)))
    diff)))


(defui make-gutter-marker [marker width height]
  (if-let [css-class (condp = marker
                        :+ "modific-add"
                        :- "modific-rem"
                        :* "modific-mod"
                        nil)]
    [:div {:class (str "modific-gutter-marker " css-class)
           :style (str "width: " width "px; height: " height "px")}]
    [:div]))


(defn- render-markers [this diff]
  (if diff
    (let [ed (editor/->cm-ed this)
          i 0
          line-height (.defaultTextHeight ed)
          width (util/settings :gutter-width)
          markers (->gutter-markers diff width line-height)]
      (editor/operation
       this
       (fn []
         (add-gutter this)
         (remove-markers this)
         (doall (map (fn [[line el] marker] (.setGutterMarker ed (dec line) "modific-gutter" el))
                     markers))
         (object/raise this :refresh!)))
      nil)
    (do
      (add-gutter this)
      (remove-markers this))))


;;*********************************************************
;; Behaviors
;;*********************************************************


(behavior ::add-gutter
          :triggers #{:init.settings!}
          :reaction (fn [this]
                      (add-gutter (pool/last-active))))

(behavior ::add-markers
          :triggers #{:save+ :init :focus}
          :desc "Modific: Refresh gutter"
          :reaction (fn
                      ([ed] (add-markers ed))
                      ([ed content] (add-markers ed) content)))


(behavior ::on-diff-parsed
          :triggers #{:diff}
          :desc "Modific: diff is parsed"
          :reaction (fn [editor diff]
                      (object/merge! editor {:diff diff})
                      (render-markers editor diff)))


;;*********************************************************
;; Public functions
;;*********************************************************


;; Add vertical gutter bar
(defn add-gutter [this]
  (let [current-gutters (set (js->clj (editor/option this "gutters")))
        ed (editor/->cm-ed this)
        width (util/settings :gutter-width)
        gutter-div (dom/$ :div.CodeMirror-gutters (object/->content this))]
    (editor/set-options this
                        {:gutters (clj->js (conj current-gutters "modific-gutter"))})
    (dom/set-css (dom/$ :div.modific-gutter gutter-div)
                 {"width" (str width "px")})))


(defn add-markers [ed]
  (try
    (when (<
           (editor/line-count ed)
           (or (util/settings :max.file.length) 1000))
      (diff/run ed))
    (catch :default e
      (object/safe-report-error (str "Modific - Error: " e))
      (object/safe-report-error e))))


(defn remove-markers [this]
  (.clearGutter (editor/->cm-ed this) "modific-gutter"))


(defn remove-gutter [this]
  (remove-markers this)
  (dom/remove :div.modific-gutter (object/->content this))
  (let [gutter (js->clj (editor/option this "gutters"))]
    (editor/set-options this {:gutters (clj->js (remove #{"modific-gutter"} gutter))}))
  (object/raise this :refresh!))
