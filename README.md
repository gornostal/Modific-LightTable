# Modific

Modific is a Light Table plugin for highlighting lines changed since the last commit.

Currently supports only *Git*.

# Features

☑ Show gutter marks  
☑ Jump between changes (`Ctrl+Shift+PageUp/PageDown`)  
☑ Show original part (`Ctrl+Alt+c`)  

# TODO

☐ Show diff (on file save)  
☐ Revert changes  
☐ Show list of changed files  
☐ Add support for Subversion, Mercurial, Bazaar  

# Known issues

- Modific's gutter is not visible on file load
- Sometimes if changes were reverted, gutter marks don't get removed
- Gutter marks don't refresh on behaviors change
