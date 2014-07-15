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
(defn- show-diff [])
(defn- revert-changes [])
(defn- jump-between-changes [])
(defn- show-original [])
(defn- uncommitted-files [])
