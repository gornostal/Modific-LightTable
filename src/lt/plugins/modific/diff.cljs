(ns lt.plugins.modific.diff
  (:require [lt.objs.proc :as proc]
            [lt.plugins.modific.vcs :as vcs]
            [lt.object :as object]
            [lt.util.js :as jsutil]
            [lt.objs.notifos :as notifos])
  (:require-macros [lt.macros :refer [behavior]]))


;;*********************************************************
;; Parsing diff file
;;*********************************************************

(defn- diff->hunks [diff]
  (let [re-header #"^@@[0-9\-, ]+\+(\d+)"
        lines (->> (clojure.string/split-lines diff)
                   (drop-while (complement #(re-find re-header %)))
                   (filter (complement #(= \\ (first %)))))]
    (loop [hunks []
           buffer []
           hunk-start (last (re-find re-header (first lines)))
           lines (rest lines)]
      (if (empty? lines)
        (if (empty? buffer) hunks (conj hunks buffer))
        (recur (if (and hunk-start (not-empty buffer))
                 (conj hunks buffer)
                 hunks)
               (if hunk-start
                 [(int hunk-start) (first lines)]
                 (conj buffer (first lines)))
               (last (re-find re-header (first lines)))
               (rest lines))))))


(defn- ->chunks [diff line-ending]
  (let [hunks (diff->hunks diff)
        ->key (fn [line] (condp = (first line)
                           \- :-
                           \+ :+
                           nil))
        ->chunk (fn [buffer mod-type mod-start-line cur-line]
                  {:removed (if (empty? buffer)
                              nil
                              (clojure.string/join line-ending buffer))
                   :mod-type mod-type
                   :lines (if (= mod-start-line cur-line)
                            [cur-line]
                            (range mod-start-line cur-line))})]

    (->>
     (map (fn [[i & lines]]
            (loop [prev-k nil                 ; previous modification key #{:+ :- :* nil}
                   i i                        ; current line #
                   chunks []                  ; chunks to return
                   buffer []                  ; chunk buffer
                   mod-start nil              ; modifications start at line #
                   lines lines                ; remaining lines
                   k (->key (first lines))]   ; current modification key
              (if (empty? lines)

                (if (or (not-empty buffer) mod-start)
                  (conj chunks (->chunk buffer prev-k mod-start i))
                  chunks)

                (recur (if (and k prev-k (not= prev-k k)) :* k)
                       (if (= k :-) i (inc i))
                       (if (and (not k)
                                (or (not-empty buffer) mod-start))
                         (conj chunks (->chunk buffer prev-k mod-start i))
                         chunks)
                       (if (= k :-)
                         (conj buffer (subs (first lines) 1))
                         (if k buffer []))
                       (if k (or mod-start i))
                       (rest lines)
                       (->key (first (rest lines)))))))
          hunks)
     (apply concat)
     )))


(defn parse-diff [diff line-ending]
  (->chunks diff line-ending))


;;*********************************************************
;; Behaviors
;;*********************************************************


(behavior ::exec-cmd-error
          :triggers #{:proc.error}
          :reaction (fn [obj err]
                      (let [error (str "Error executing diff command: " (.toString err))]
                        (println error)
                        (notifos/working error))))

(behavior ::exec-cmd-exit
          :triggers #{:proc.exit}
          :reaction (fn [editor exit]
                      (when (= exit 0)
                        ;; :proc.exit comes before :proc.out, so we need this hack to check
                        ;; if :proc.out returned diff
                        ;; if now() - diff-time > 100 ms, that means diff is empty
                        ;; TODO: find a better way to handle empty diff scenarios
                        (jsutil/wait 0 #(if (>  (- (jsutil/now) (:diff-tme @editor)) 100)
                                          (object/raise editor :diff nill)
                                          (object/raise editor :diff (:diff @editor)))))))

(behavior ::exec-cmd-out
          :triggers #{:proc.out}
          :reaction (fn [editor buffer]
                      (object/merge! editor {:diff-tme (jsutil/now)
                                             :diff (parse-diff
                                                    (.toString buffer)
                                                    (-> @editor :info :line-ending))})))


;;*********************************************************
;; Public functions
;;*********************************************************


(defn run [editor]
  (when-let [{:keys [cmd root]} (vcs/diff-cmd editor)]
    (proc/exec (conj cmd {:obj editor
                          :cwd root}))))

