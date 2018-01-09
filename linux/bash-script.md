#### Shell Types
- sh or Bourne Shell
- bash or Bourne Again shell
- csh or C shell
- tcsh or TENEX C shell
- ksh or the Korn shell

** /etc/shells gives an overview of known shells

#### Bash searches for commands as follows
- Check whether the command contains slashes. If not, first check with the function list
  to see if it contains a command by the name we are looking for.
- If command is not a function, check for it in the build-in list.
- If command is neither a function nor a build-in, look for it analyzing the directions listed in PATH.
  Bash users a 'hash table' (data storage area in memory) to remember the full path names of executables so extensive
  PATH searches can be avoided.
- If the search is unsuccessfull, bash prints an error message and returns an exit status of 127.
- If the search was seccessfull or if the command contains slashes, the shell executes the command in a
  separate execution environment.
- If execution fails because the file is not executable and not a directory, it is assumed to be a shell script.
- If the command was not begun asynchronously, the shell waits for the command to  complete and collects its exit status.

## Script File Basics
- First two characters should be `#!` (known as `shebang`)
- Followed by path to `Bash` or `env`
    - `#!/usr/bin/env bash`
    - `#!/bin/bash`
- This is executed via the `kernel system` called `execve()`
- Kernel checks for `#!` and passes the path to the original program as a command-line argument    
- So, e.g. `./myscript.sh`, with `#!/bin/bash` would have the kernel execute `/bin/bash ./myscript.sh`
- Perl, Python, Expect, awk, and Bash can use #!
- The `env` will look for Bash in your path.
- Make scripts executable with `chmod u+x`
    - Add execute permission for the `user`, which means the owner of the script file 

#### Time Command
- Bash has a builtin `time` command to report how much time a process consumed 
    - `time find / -name core`
#### Variable in Bash
- Variables in Bash are given a value with `=`.
- Don't put any `spaces` before or after the `=`. If the value has special characters, including spaces, put the value in quotes.
    - myvar="this is some chars; * $\" )"
- Created when you assign a value or declare it with, for example, the `export` command
- Remove variables with the `unset` command
- Reference the value of variable with a dollar sign in front of the name:
    - e.g. `echo myvar is $myvar`
- For a shell script to get a copy of a shell variable, it needs to be "exported":
    - e.g. `mynewvar or declare -x mynewvar`
- `Export` and `assign` in the same statement:
    - e.g. `export var2="var2 value"`
- export -f myfunc will export the function myfunc
- Typing just `export` will print which variables are part of the shell's environment--those exported

#### Grouping in Bash
- Bash functions use braces and can modify variables of the shell that calls the function
e.g.
```sh
a=1              |    a=1       
(                |    {         
a=2              |    a=2       
)                |    }         
echo $a          |    echo $a   
# prints 1       |    # prints 2
```

#### Bash Builtins
- Get a list of Bash builtins with the `enable` command
- Perfers builtins, keywords, aliases, and functions over commands in the file system

#### Bash Startup
- `.bash_profile` is read when Bash is invoked as a login shell
- `.bashrc` is executed every time when a new shell is started
- If we extend an exported variable, like `PATH`, in `.bashrc`, it will grow with each nested shell invocation
- PATH=$PATH:/usr/local/bin
    - This would keep adding `/usr/local/bin` to the end of `PATH` within nested shells
- Aliases and functions should normally be defined in `.bashrc`

#### Sourcing Scripts
- Source example.sh or . example.sh
- it is "dot space" as a short way to source a script
- The shell executed the script in the shell's own process instead of in a new process
- `Sourcing` is a common way to import variable assignment or functions
- The `sourced script` is executed within the calling shell's process

### Working with Aliases
- The `alias` command allows for short command alternatives: `alias ll="ls -l"`
- Some people use an alias to give an alternative, more familiar name or to fix a common typo to a Linux command
    - alias copy=cp
    - alias rn=mv 
- `alias` = returns list(s) of alias
- `unalias` = unset an alias
- `. ./abc.sh` = `source ./abc.sh`                # ". space" is equal to `source`

#### Using the `Echo` Command
- Built into Bash and doesn't start a new process
    - `-n` -> don't print a trailing newline
     - `-e` -> enable `backslash`, `escaped characters` line `\n` and `\t`
     - `-E` -> disable backslash escaped characters in case they were enabled by default
- ls * would list contents of directories:
    - `echo * would show file and directory names
- Use file redirection techniques to send the output to other files, such as stderr:
    `echo 'Warning Will Robinson!'`   >&2

#### Fancy commands
$ man bash | wc -l                                             # total number of line in man page of bash (e.g. 4890)
$ info bash | wc -l                                            # totla number of line in info page of bash (e.g. 9526)
$ w | cut -d " " -f 1 - | grep -v USER | sort -u               # show the currently connected users
$ uname -s                                                     # show the os name
$ uname -m                                                     # show the os processor bit version
$ sleep 2                                                      # sleep for 2 seconds
$ enable                                                       # return all builtin keyword
$ compgen -k                                                   # return all keyword