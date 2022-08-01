# GNOME Bottom Bar

GNOME shell extension that moves Top Bar to the bottom of the screen.

## System Requirements

The extension was tested on:
- GNOME 42.2 (Ubuntu 22.04).

## Install

1. First, you should build the installation package from the source (code snippets below assume that your current directory is the root of the git repository):
```
$ bash pack.sh
```

2. Next, install the package:
```
$ bash install.sh
```

3. Restart GNOME shell. Ubuntu 22.04 uses Wayland. Unfortunately, it is [impossible](https://www.reddit.com/r/gnome/comments/mhb6mb/comment/gsxrp7l/) to restart just GNOME shell on Wayland. You should Log Out and then Log In again.

4. Enable the extension:
```
$ gnome-extensions enable bottom-bar@somkov.com
```

## Uninstall

```
$ gnome-extensions disable bottom-bar@somkov.com
$ gnome-extensions uninstall bottom-bar@somkov.com
```

## References

Similar projects:

- https://extensions.gnome.org/extension/4764/bottompanel/
- https://extensions.gnome.org/extension/828/bottom-panel/
- https://extensions.gnome.org/extension/949/bottompanel/ [gnome-shell-extension-bottompanel](https://github.com/Thoma5/gnome-shell-extension-bottompanel) (for GNOME 3.16 - 3.3x).
- https://extensions.gnome.org/extension/208/panel-settings/

If you want to understand GNOME Shell Extensions programming, then I recommend you the following resources:

- GNOME Shell Extensions introduction: https://wiki.gnome.org/Projects/GnomeShell/Extensions
- GNOME Shell Extensions guide: https://gjs.guide/extensions/
- GNOME JavaScript Docs (API): https://gjs-docs.gnome.org/
- GNOME Shell source code: https://github.com/GNOME/gnome-shell