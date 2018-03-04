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

#### Deep Dive into Debugging:

- Hide/Show an element
  - Elements | select any element | press `H` to toggle hide/show
- See final only applied CSS: Elements | `Computed` section
- Change color value format (hsl, rgb, etc.): Elements | `Styles` | `Shift + Click` on rectangular color box
- History of last selected element:
  - `$0` will print out the last selected element in the `Console`. 
  - `$1` will print out the elements that was selected before last one. 
  - Total `5`  ($0 to $4) history is saved
- Black boxing a script:
  - Sources | Call Stack | Right-click on any script, select `Blackbox Script`.
- `Conditional Breakpoint` maybe helpful for AJAX/API/XHR call - 
  - Sources | Right click on line #, select conditional breakpoint, write condition
  - Also, we can select `XHR Breakpoints` from right panel
- Page Jank, GPU memory, see FPS (Frames per second)
  - 3 dot settings | More Tools | Rendering | Check `FPS Meter`
- `Paint Flashing`:
  - 3 dot settings | More Tools | Rendering | Check `Paint Flashing`
  - Scroll the page green color denotes that it is painting this area
  - e.g. koalastothemax.com
- `Memory leaks`:
  - If foo() call bar(), and bar() call foo() then it is caused `Memory Leak` cause it would never be ended (not garbage collection)

### Reference:
1. https://developers.google.com/web/tools/chrome-devtools/