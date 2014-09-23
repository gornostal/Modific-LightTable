(ns lt.plugins.modific.commands
  (:require [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.command :as cmd]
            [lt.plugins.doc :as doc]
            [lt.plugins.modific.diff :as diff]
            [lt.plugins.modific.util :as util])
  (:require-macros [lt.macros :refer [defui]]))

(defn- get-line [current diff dir]
  (let [next? (= dir :next)]
    (or
     (some (fn [{lines :lines}]
             (when ((if next? < >) current (first lines))
               (first lines))) (if next? diff (reverse diff)))
     (first (:lines ((if next? first last) diff))))))


(defn- go-to-change [dir]
  (let [ed (pool/last-active)
        diff (:diff @ed)
        line (inc (:line (editor/->cursor ed)))]
    (when (and (> (count diff) 0) line)
      (editor/move-cursor ed {:ch 0 :line (dec (get-line line diff dir))}))))



(defn- get-original [ed line]
  "Returns text that was in under cursor before changes"
  (when-let [diff (:diff @ed)]
    (some (fn [{lines :lines removed :removed}]
            (when (some #{line} lines) removed)) diff)))

(defui original-ui [text]
  [:div.inline-doc [:pre text]])

(defn- show-original []
  (let [ed (pool/last-active)
        line (:line (editor/->cursor ed))]
    (if-let [cur (doc/doc-on-line? ed line)]
      (doc/remove! ed cur)
      (when-let [original (get-original ed (inc line))]
        (doc/inline-doc ed (doc/doc-ui {:doc original}) {} {:line line})))
    nil))


;;*********************************************************
;; Commands
;;*********************************************************

(cmd/command {:command ::goto-next-change
              :desc "Modific: go to the next change"
              :hidden true
              :exec (fn []
                      (go-to-change :next))})

(cmd/command {:command ::goto-prev-change
              :desc "Modific: go to the previous change"
              :hidden true
              :exec (fn []
                      (go-to-change :prev))})


(cmd/command {:command ::show-original
              :desc "Modific: show original"
              :hidden true
              :exec (fn []
                      (show-original))})
