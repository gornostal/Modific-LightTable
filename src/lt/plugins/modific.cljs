(ns lt.plugins.modific
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.command :as cmd])
  (:require-macros [lt.macros :refer [defui behavior]]))

(defui hello-panel [this]
  [:h1 "Hello from modific"])

(object/object* ::modific.hello
                :tags [:modific.hello]
                :name "modific"
                :init (fn [this]
                        (hello-panel this)))

(behavior ::on-close-destroy
          :triggers #{:close}
          :reaction (fn [this]
                      (when-let [ts (:lt.objs.tabs/tabset @this)]
                        (when (= (count (:objs @ts)) 1)
                          (tabs/rem-tabset ts)))
                      (object/raise this :destroy)))

(def hello (object/create ::modific.hello))

(cmd/command {:command ::say-hello
              :desc "modific: Say Hello"
              :exec (fn []
                      (tabs/add-or-focus! hello))})
