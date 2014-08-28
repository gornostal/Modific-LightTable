(ns lt.plugins.modific.commands
  (:require [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.command :as cmd]
            [lt.plugins.modific.diff :as diff]
            [lt.plugins.modific.util :as util]))

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
        line (editor/last-line ed)]
    (when (and (> (count diff) 0) line)
      (editor/move-cursor ed {:ch 0 :line (get-line line diff dir)}))))

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

