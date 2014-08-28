(ns lt.plugins.modific
  (:require [lt.object :as object]
            [lt.util.dom :as dom]
            [lt.objs.editor :as editor]
            [lt.objs.command :as cmd]
            [lt.plugins.modific.gutter :as gutter])
  (:require-macros [lt.macros :refer [defui behavior]]))


(object/create
 (object/object* ::modific
                 :tags #{:modific}
                 :init (fn [this]
                         (object/raise this :init.settings!))))


;; Roadmap
;; -------
;; show-diff
;; revert-changes
;; jump-between-changes
;; show-original
;; uncommitted-files
