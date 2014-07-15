(ns lt.plugins.modific.vcs.git
  (:require [lt.plugins.modific.util :as util]))


(def s (partial util/settings :git))

(def vcs
  (reify util/IVcs

    (vcs-root [_ cwd]
              (util/find-vcs-root (or (s :dir) ".git") cwd))

    (diff-cmd [_ fname]
              {:command (or (s :bin) "git")
               :args (flatten ["diff"
                               (or (s :diff.options) ["--no-color" "--no-ext-diff"])
                               "--" fname])})

    (status-cmd [_]
                {:command (or (s :bin) "git")
                 :args ["diff" "status" "--porcelain"]})

    (parse-status [_ status-out]
                  status-out)))


