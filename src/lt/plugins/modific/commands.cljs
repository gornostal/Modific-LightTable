(ns lt.plugins.modific.commands
  (:require [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.command :as cmd]
            [lt.plugins.doc :as doc]
            [lt.objs.notifos :as notifos]
            [lt.plugins.modific.diff :as diff]
            [lt.plugins.modific.gutter :as gutter]
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
  "Returns text that was under the cursor before changes"
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



(defn- get-change [ed line]
  "Returns change object that was under the cursor before changes"
  "e.g., {:removed \"something\", :mod-type :*, :lines (47 48 49 50 51 52 53 54 55)}"
  (when-let [diff (:diff @ed)]
    (some (fn [{lines :lines :as change}]
            (when (some #{line} lines) change)) diff)))

(defn- revert-change []
  (let [ed (pool/last-active)
        line (:line (editor/->cursor ed))]
    (if-let [change (get-change ed (inc line))]
      (if (:dirty @ed)

        ;; We need a user to save the file first,
        ;; otherwise he will probably not get what he's expecting from the revert
        (notifos/set-msg! (str "Modific: Save the file first!"))

        (do (if (= :- (:mod-type change))
              (editor/replace ed
                              {:line (-> (:lines change) first dec) :ch 0}
                              (str (:removed change) "\n"))
              (editor/replace ed
                              {:line (-> (:lines change) first dec) :ch 0}
                              {:line (-> (:lines change) last) :ch 0}
                              (str (:removed change) (when-not (= (:mod-type change) :+) "\n"))))
          (gutter/remove-markers ed)))

      (notifos/set-msg! (str "Modific: Nothing to revert")))
    nil))


;;*********************************************************
;; Commands
;;*********************************************************

(cmd/command {:command ::goto-next-change
              :desc "Modific: go to the next change"
              :exec (partial go-to-change :next)})

(cmd/command {:command ::goto-prev-change
              :desc "Modific: go to the previous change"
              :exec (partial go-to-change :prev)})

(cmd/command {:command ::show-original
              :desc "Modific: show original"
              :exec show-original})

(cmd/command {:command ::revert-change
              :desc "Modific: revert change"
              :exec revert-change})
