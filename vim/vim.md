#### The tilde (~) lines indicate lines not in the file

```
:q          -> quit (short for :quit)
:q!         -> quit without saving (short for :quit!)
:w          -> save changes to file
:wq or :x   -> write and quit (think write and quit)
:qa         -> quit all (short for :quitall)
u           -> undo
x           -> delete character at cursor
I           -> insert at beginning of file
a           -> append at cursor
A           -> append at end of line
excape      -> exit insert mode
```

#### Modes
- vim has two modes:
    - insert (i)
    - normal (Esc)

#### Basic movement

```
h  --- Move cursor left
j  --- Move cursor down
k  --- Move cursor up
l  --- Move cursor right
```


#### Traverse in a file

```
dw         --- delete word
d$ or D    --- delete to end of line
w          --- next word
b          --- beginning of the word
e          --- end of the word
$          --- go to end of text on current line
^          --- go to beginning of text on current line
0          --- go to beginning of current line
2w         --- go two words forward
3e         --- go to end of third word ahead
dd         --- delete entire line
2dd        --- delete two lines
u          --- undo last change
U          --- undo changes on entire line
ctrl+r     --- redo changes
d2w or 2dw --- delete two words
```

#### Find a occurrence of a character: f and F

```
fo         --- find next o
3fq        --- find 3rd occurance of 'q'

```

#### Find word under cursor: * and #
Find the next occurrence of the word under cursor with `*`, and the previous with `#`.

#### Seach : /text with n and N
- press `/`, and give the text we are looking for.
- repeat the search for next and previous occurrence with `n` and `N`, respectively.
- it's possible to use regexps that help to find text of particular form.

```
/text      --- find text
n          --- find the subsequent matches with 'n'
```


#### Go to matching parentheses: %
In text that is structured with parentheses or branckets, `(` or `{` or `[`,
use **`%`** to jump to the matching parenthesis or bracket.

```
shift + %     --- go to the matching parenthesis or bracket

```

#### Go to line: g and G
- `gg` takes us to the beginning of the file, `G` to the end.
- to jump directly to a specific line, give its line number along with `G`.
- go to the beginning of this screen with `gg` and then back to end with `G`.

```
2G        --- go to line 2
```

#### Insert new line: o and O
- to insert text into new line, press `o` or `O`.
- after new line is created, the editor is set to insert mode.

```
o       --- insert in the current line
O       --- insert new line above the current line
```

#### Removing a character: x and X
- `x` and `X` delete the character under the cursor and to the left of the cursor, respectively

#### Replacing letter under cursor: r
- replace only one character under the cursor, without changing to insert mode, use `r`.

#### Deleting: d
- `d` is th delete command
- we can combine it with movement. e.g. `dw` deletes the first word on the right side of the cursor
- It also copies the content, so that we can paste it with `p` to another location

```
d       --- delete
d2w     --- delete the two words from current position to right
```

#### Repetition: .
- to repeat the previous command, just press `.`

#### Visual mode: v
- Besides `insert` and `normal` mode, Vim has also `visual` mode
- In visual mode, we select text using movement keys before we decide what to do with it

```
veld        --- go into visual mode, go to the last of current word, move the cursor right (the word is selected), delete the word 
```




































