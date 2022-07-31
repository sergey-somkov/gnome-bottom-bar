# GNOME Bottom Bar

GNOME shell extension that moves Top Bar to the bottom of the screen.

Original idea: [gnome-shell-extension-BottomBar](https://github.com/Thoma5/gnome-shell-extension-BottomBar) (for GNOME 3.16 - 3.3x).

## System Requirements

The extension was tested on Ubuntu 22.04 (GNOME 42.2).

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
gnome-extensions enable bottom-bar@somkov.com
```

## Uninstall

```
gnome-extensions disable bottom-bar@somkov.com
```