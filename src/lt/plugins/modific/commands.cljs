(ns lt.plugins.modific.commands
  (:require [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.command :as cmd]
            [lt.plugins.modific.diff :as diff]
            [lt.plugins.modific.util :as util]))

(defn- go-to-change [dir]
  (let [ed (pool/last-active)
        diff (:diff @ed)
        last-line (editor/last-line ed)]

    ))

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

