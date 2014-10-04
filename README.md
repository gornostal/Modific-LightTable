# Modific (beta)

It's a Light Table plugin that highlights lines changed since the last commit.  
Currently supports only **Git**.

*Note: Tested only on Ubuntu. There might be some issues on other OS*

[![Modific](http://i.imgur.com/wMaEqSK.jpg)](http://i.imgur.com/wMaEqSK.jpg)

# Features

☑ Show gutter marks (on file save)  
☑ Jump between changes (`Ctrl+Shift+PageUp/PageDown`)  
☑ Show original part (Put cursor on a changed line and hit `Ctrl+Alt+c`)  
☑ Revert change (Put cursor on a changed line and hit `Ctrl+Alt+r`)  

# Configuration

Configurable via behaviors:

```
:modific [(:lt.plugins.modific.util/settings
           {:git {:dir ".git"
                  :bin "git"
                  :diff.options ["--no-color" "--no-ext-diff"]}
            :max.file.length 1000 ; lines
            :gutter-width 2})]
```

# TODO

☐ Improve UI of "Show original part" command. I'm using `lt.plugins.doc/inline-doc`, but it isn't flexible enough.  
☐ Imlement command: Show diff  
☐ Imlement command: Show a list of changed files  
☐ Add support for Subversion, Mercurial, Bazaar  
☐ Make gutter color and size configurable  

# Known issues

- Gutter marks don't refresh on behaviors change
- Revert sometimes doesn't work if last line is removed. That's because editor doesn't actually remove last `\n`
