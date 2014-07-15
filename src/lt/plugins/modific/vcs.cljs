(ns lt.plugins.modific.vcs
  (:require [lt.plugins.modific.vcs.git :as git]
            [lt.plugins.modific.util :as util]
            [lt.objs.files :as files]
            [lt.object :as object])
  (:require-macros [lt.macros :refer [behavior]]))


(defn- file-name [editor]
  (-> @editor :info :path))

(defn- get-cwd [editor]
  (files/parent (file-name editor)))

(defn- find-vcs [editor]
  {:vcs git/vcs
   :root (util/vcs-root git/vcs (get-cwd editor))})

(defn- vcs-not-found [editor]
  (object/merge! editor {:vcs-obj :no-vcs})
  nil)


;; returns nil or {:vcs :util/IVcs, :root "string"}
(defn- ->vcs

  ([editor]
   (let [vcs-obj (:vcs-obj @editor)]
     (cond
      (= vcs-obj :no-vcs) nil
      (map? vcs-obj) vcs-obj
      :else (->vcs editor true))))

  ([editor cache-empty?]
   (if-let [vcs-obj (find-vcs editor)]
     (do
       (object/merge! editor {:vcs-obj vcs-obj})
       vcs-obj)
     (vcs-not-found editor))))


;;*********************************************************
;; Behaviorss
;;*********************************************************


(behavior ::refresh-on-save-as
          :triggers #{:save-as-rename!}
          :reaction (fn [editor]
                      (object/merge! editor {:vcs-obj nil})))


;;*********************************************************
;; Public functions
;;*********************************************************


;; returns nil or {:cmd {:command "string", :args ISqable}, :root "string"}
(defn diff-cmd [editor]
  (when-let [{:keys [vcs root]} (->vcs editor)]
    {:cmd (util/diff-cmd vcs (file-name editor))
     :root root}))
