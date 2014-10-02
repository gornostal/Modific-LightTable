# Modific

Modific is a Light Table plugin for highlighting lines changed since the last commit.

Currently supports only **Git**.

# Features

☑ Show gutter marks (on file save)
☑ Jump between changes (`Ctrl+Shift+PageUp/PageDown`)
☑ Show original part (Put cursor on a changed line and hit `Ctrl+Alt+c`)
☑ Revert change (Put cursor on a changed line and hit `Ctrl+Alt+r`)

# TODO

☐ Show diff
☐ Show a list of changed files
☐ Add support for Subversion, Mercurial, Bazaar
☐ Make gutter color and size configurable

# Known issues

- Revert doesn't work properly if first line is modified
- Gutter marks don't refresh on behaviors change
