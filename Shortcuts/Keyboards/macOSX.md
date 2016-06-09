#### `Memorize, Memorize, Memorize` - It will make life easier
```
$ pwd                 : Print working directory
$ mkdir               : Make directory 
```

#### Set the time of showing notification banner
`$ defaults write com.apple.notificationcenterui bannerTime <SECONDS>`

#### Details of network interface cards
`$ ip addr`

#### Statistics of network interfaces
```
$ ip link
$ ip -s link
```
#### Terminal keyboard shortcut
- ctrl+A to jump to start of the line
- ctrl+E to jump to end of the line
- ctrl+K to kill the line starting from the cursor position
- ctrl+Y to paste text from the kill buffer
- ctrl+R to reverse search for commands you typed in the past from your history
- ctrl+S to forward search (works in zsh for me but not bash)
- ctrl+F to move forward by a char
- ctrl+B to move backward by a char

#### Show hidden files
```
Go to terminal, then
$ defaults write com.apple.finder AppleShowAllFiles YES
$ killall Finder

// hide hidden files
Go to terminal, then
$ defaults write com.apple.finder AppleShowAllFiles NO
$ killall Finder
```
#### Fancy shortcuts
```
- Get info:
   	- Cmd + I, Cmd + option + I (to see single window)
- Close window:
   	- Cmd + W
- Show / hide the dock:
	- Cmd + option + D
- scrernshots:
    - Cmd + Shift + 3
    - Cmd + Shift + 4 (give crosshairs)
- Hide application:
	- Cmd + H
	- Cmd + option + H (all application)
- Application switcher:
	- Cmd + Tab
- Zoom in/out:
	- Cmd + option + +/-
- Force Quit:
	- Cmd + option + Esc
- Dictionary
	- Cmd + Ctrl + D
- Minimize window
	- Cmd + M
- Mac Help
	- Cmd + ?

#### Go Menu

- Back                     : Cmd + [
- Forward                  : Cmd + ]
- Computer Directory       : Cmd + Shift + C
- Home Directory           : Cmd + Shift + H
- Go iDisk                 : Cmd + Shift + I
- Go Favourites Directory  : Cmd + Shift + F
- Go Application Directory : Cmd + Shift + A
- Go to Folder             : Cmd + Shift + G
- Connect to Server        : Cmd  + K
- Cmd + [                  : Back
- Cmd + ]                  : Forward
- Cmd + Shift + C          : Go to Computer Directory
- Cmd + Shift + H          : Go to Home Directory
- Cmd + Shift + I          : Go to iDisk
- Cmd + Shift + F          : Go to Your Favourites Directory
- Cmd + Shift + A          : Go to Applications Directory
- Cmd + Shift + G          : Go to Folder
- Cmd + K                  : Connect to Server


#### View Menu
- as Icons                 : Cmd + 1
- as List                  : Cmd + 2
- as Co


#### Apple Menu
Cmd + option + D           : Toggle Dock Hiding On/Off
Cmd + Shift + Q            : Logout

#### Finder Menu
Cnd + Shift + Delete       : Empty Trash
Cmd + H                    : Hide Finder

#### File Menu
Cmd + N                    : New Finder window
Cmd + Shift + N            : New Folder
Cmd + O                    : Open
Cmd + W                    : Close window
Cmd + I                    : Show info
Cmd + D                    : Duplicate
Cmd + L                    : Make Alias
Cmd + R                    : Show Original Item
Cmd + T                    : Add to Favourites
Cmd + Delete               : Move Highlighted Item to Trash
Cmd + E                    : Eject
Cmd + F                    : Find (Invokes Sherlock)

#### Edit Menu
Cmd + z                    : undo
Cmd + X                    : Cut
Cmd + C                    : Copy
Cmd + V                    : Paste
Cmd + A                    : Select All

#### View Menu
Cmd + 1                    : as Icons
Cmd + 2                    : as List
Cmd + 3                    : as Columns
Cmd + B                    : Minimize Finder Toolbar
Cmd + J                    : View Options

------------------- Window -----------------
Cmd + M                    : Minimize Window

------------------- Help --------------------
Cmd + ?                    : Mac Help
```




