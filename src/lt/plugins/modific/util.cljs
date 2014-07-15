(ns lt.plugins.modific.util
  (:require [lt.objs.files :as files]
            [lt.object :as object])
  (:require-macros [lt.macros :refer [behavior]]))


(defn find-vcs-root [dirname, cwd]
  (let [dir (files/walk-up-find cwd dirname)]
    (if-not (nil? dir)
      (files/parent dir))))


(def settings-obj (object/create
                   (object/object* ::settings-obj
                                   :settings {})))

(behavior ::settings
          :triggers #{:init.settings!}
          :desc "Modific: init settings"
          :params [{:label "settings" :type :map}]
          :reaction (fn [this s]
                      (object/merge! settings-obj {:settings s})))


;; Usage example: (settings :git :diff.options)
(defn settings [& more]
  (get-in (:settings @settings-obj) more))


(defprotocol IVcs
  (vcs-root [this cwd])
  (diff-cmd [this fname])
  (status-cmd [this])
  (parse-status [this status-out]))
