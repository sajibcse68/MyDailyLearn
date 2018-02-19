# Keyboards Shortcuts for Chrome Developer tool
* `Cmd + Opt + I`                    -- open/close developer tool
* `Cmd + k`                          -- clean the screen
* `Ctrl + L`                         -- clean the screen
* `Shift + Enter`                    -- go to next line
* `clear()`                          -- clean the  screen
* `Cmd + Opt + j`                    -- open developer tool and focus to console
* `Cmd + ]`                          -- next panel
* `Cmd + [`                          -- previous panel
* `Cmd + 1-9`                        -- jump to the window tab
* `H`                                -- hide element
* `Double click on attribute`        -- Edit attribute
* `Opt + Double-click on arrow icon` -- Expand/collapse node and all its children
* `Cmd + \`                          -- pause/resume script execution


#### Convert browser into an Editor
    document.body.contentEditable=true

#### Capture screenshot
* Elements | select any node | <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> | write `Capture node screenshot` | click 

* <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>C</kbd> (select an elemenet btn, top left corner) | drag the portion want to take screenshot

* <kbd>Cmd</kbd> + <kbd>Option</kbd> + <kbd>I</kbd> | select an elemenet btn, top left corner | drag the portion want to take screenshot

#### Negative filter in dev tool `console`

['one', 'two', 'three', 'four'].forEach(item => {
	console.log(item);
});

// output:  one, two, three, four

Now, if we write `-two` in filter box

// output:  one, three, four

### Reference:
1. https://developers.google.com/web/tools/chrome-devtools/