### Search 
```  
# Search inside text file
$ gradle run | less        // search in 'gradle run' command
/searchWord                // search from first
?searchWord                // search from last
:q                         // quite search

# Finding a File Containing a Particular Text String
# Pass --color to grep command, displays matched text/words in color on terminal
$ grep -R --color "sampleWord" <directory> 

$ sudo find / -type f -name '._*'              # find files with regular expression
$ sudo find / -type f -name jenkins.xml        # find a file
$ sudo find / -type d -name jenkins            # find a directory
$ sudo find / -type d -name plugins -ls
$ sudo time <command>                          # return the time 

# Search 'science(ignore lower/upper)' in science.txt file
$ grep -i science science.txt 
$ wc -w science.txt                // Count word
$ wc -l science.txt                // Count lines
```
[see this](http://www.cyberciti.biz/faq/howto-search-find-file-for-text-string/) 

#### Explanation of Chmod permissions (flags): 600, 0600, 700, 777, 100 etc.
* Permissions:  
    ```
    1 -- can execute
    2 -- can write
    4 -- can read
    ```
*  The octal number is the sum of those free permissions:
    ```
    - 3(1+2) - can execute and write
    - 6(2+4) - can write and read
    ```
* Position of the digit in value:
    ```
    1 - what owner can
    2 - what users in the file group(class) can
    3 - what users not in the file group(class) can
    ```
- Examples:
    ```
    chmod 600 file - owner can read and write
    chmod 700 file - owner can read, write and execute
    chmod 666 file - all can read and write
    chmod 777 file - all can read, write and execute
    ```
[See this](http://www.zz9.co.za/chmod-permissions-flags-explained-600-0600-700-777-100-etc/)

#### Add sudo permission for a user

```
$ sudo visudo
```
#### User privilege specification
```
root    ALL=(ALL:ALL) ALL
jenkins ALL=(ALL:ALL) ALL
```

#### Show Hardware Information

```js
$ lshw             # show all hardware details 
$ lshw -C display  # show display details
```

#### SSH
---
##### Get SSH RSA Fingerprints
```
$ ssh-keygen -lf ~/.ssh/id_rsa.pub
```

##### Remove keys from known_hosts
```
$ ssh-keygen -R <ip_address / host_name>
```

##### Forwarding SSH Agent  
```
$ eval "$(ssh-agent)"
$ ssh-add ~/.ssh/id_rsa          # add ssh key to list of agent identites
$ ssh-add -l                     # you can see the agent just added
$ sudo nano /etc/ssh/ssh_config  # open ssh_config file and add two lines down
Host <my-servers.com>
    ForwardAgent yes
```
```echo "$SSH_AUTH_SOCK"```

##### Manage SSH Keys For Multiple Accounts
* Bitbucket/GitHub does not allow us to use the same SSH key with more than one
   Bitbucket account.

1. Generate SSH Key:  
    ```
    $ ssh-keygen -t rsa -C <email@example.com>
    ```

2. For multiple Bitbucket accounts (or GitHub) we need multiple SSH Keys.
   Generate another ssh key with a different name 'accountB':  
    ```
    $ ssh-keygen -t rsa -f ~/.ssh/accountB -C "email@example.com"
    ```

3. Create config file '~/.ssh/config' with contains similar to:  
    ```
    $ nano ~/.ssh/config
    ```

//  paste this  
> Host bitbucket.org  
> User git  
> Hostname bitbucket.org  
> PreferredAuthentications publickey  
> IdentityFile ~/.ssh/id_rsa  
>  
> Host bitbucket-accountB  
User git  
  Hostname bitbucket.org  
  PreferredAuthentications publickey  
  IdentitiesOnly yes  
  IdentityFile ~/.ssh/accountB  

4. Now clone from *default* account  
    ```
    $ git clone git@bitbucket.org:username/project.git
    ```

5. Clone from *accountB* account
    ```
    $ git clone git@bitbucket-accountB:username/project.git
    ```
[See More](http://dbushell.com/2013/01/27/multiple-accounts-and-ssh-keys/)

##### Add a Public Key
    $sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys < add keys here >

##### Change ownership of a file / directory
    $sudo chown -R <username>:<group> <directory>

##### java/jdk  
    $ ls -l 'which java'
    /usr/libexec/java_home     # where is java home directory

##### Manage user
    $ cat /etc/passwd
    $ sudo adduser <username>  # add a user
    $ passwd <username>        # change password for a user

##### Different color file or directory means in ubuntu
**Blue** color -- **Directory**  
**Green** color -- **Executable** or **recognized data** file  
**Sky Blue** Color -- **Linked** file  
**yellow with black** background -- **device**  
**Pink** colour -- **graphic image** file  
**Red** -- **Archive** file  

`For more informations type 'man dir_colors' in terminal.`

### Fancy Commands:

```
$ date                                 # show today's date
$ cal                                  # show calendar
$ top                                  # show all the process, CPU/Memory usage etc.
$ man <command-name>                   # get the details of a command (help)
$ ifconfig                             # show the ip address
$ ip addr show eth0                    # show the details of 'eth0' (ethernet 0)
$ cat <file> | pbcopy                  # copy the contant of the file in clipboard
$ uname                                # print operating system name
$ uname -a                             # print hardware, nodename, processor architecture, os release, os name + version
$ uname -v                             # karnel version
$ uname -r                             # karnel release
$ lsb_release -a                       # see ubuntu version
$ df -ah                               # show the disk free (df), all human readable (-ah)
$ arch                                 # print architecture type

# Short files by size (human readable output)
$ du <dir> --human-readable | sort --human-numeric-sort
$ ls <dir> --sort=size -la
$ du -ma | sort -nr | head -n 20    # show 20 largest files/folders under the current directory

# See the total size of directory
$ du -sh <path>                        # check the size (du -> disk use) of a directory's content on disk
$ du -h                                # show all sub directory size

# Give a access permission of a file
$ chmod 777 /var/run/docker.sock

$ ps wwaux | grep jenkins              # Get PID
$ dd if=/dev/zero of=/swap bs=1M count=8024;mkswap /swap;swapon /swap;echo "/swap swap swap defaults 0 0" >> /etc/fstab             # Add swap area in DO

$ netstat -tulpn | grep 8080           # Port status
$ df                                   # See the drive and usage

# Check if mongodb is running
$ ps -ef | grep mongod | grep -v grep | wc -l | tr -d ' '

# Check if redis is running
$ redis-cli ping // PONG

# See the running process
$ pstree                               # pstree 1152
$ ps wwaux | grep jenkins
$ ps wwaux | grep postg

# See ip address
$ ip addr

# change password
$ sudo passwd

# Give sudo password with command in a line
$ echo 'Hello' | sudo -S apt-get update

# Show all user
$ compgen -u

# sync two directories
$ rsync -a --progress <source> <destination>
# mv can't do merging/replacing, error: 'Directory not empty'

# Send file to remote machine through terminal
$ scp remote_user@remote_host:/path/to/remote/file /path/to/local/file
# Send jenkins_global_config file to remote globalConfig folder (scp source destination.. I prefer)
$ scp /home/sajib/TigerWorks/Source/dockerfiles/jenkins/jenkins_global_config/ root@45.55.247.59:/root/dockerfiles/jenkins/globalConfig/
```

#### Free a port process

```sh
$ sudo kill 'sudo lsof -t -i:9090'
$ sudo lsof -t -i:24007                  # get the pid of 24007 port, say 123
$ kill 123                               # kill the process
$ kill -9 <pid>                          # kill the process (go)
```

#### Run a local server
```sh
$ sudo python3 -m http.server 80
```
##### Cursor movement
C + a:  Move to the start of the line.  
C + e:  Move to the end of the line.  
C + l:  Clear the screen, reprinting the current line at the top.  
M + f:  Move forward a word, where a word is composed of letters and digits.  
M + b:  Move backward a word.  

##### Cut, kill and yank
* C-k Kill the text from the current cursor position to the end of the line.  
* M-d Kill from the cursor to the end of the current word, or, if between words, to the end of the next word. Word boundaries are the same as those used by M-f.  
* M-[DEL] Kill from the cursor the start of the current word, or, if between words, to the start of the previous word. Word boundaries are the same as those used by M-b.
* C-w Kill from the cursor to the previous whitespace. This is different than M- because the word boundaries differ.
* C-y Yank the most recently killed text back into the buffer at the cursor.
* M-y Rotate the kill-ring, and yank the new top. You can only do this if the prior command    is C-y or M-y.

##### The Linux five basic commands a programmer should know about
   ls, cd, mv, mkdir, rm  
-  Additional basic commands:
   - pwd - Print Working Directory
   - cd - Change Directory
   - ls - LiSt directory contents
   - echo, cat, man, pwd, cp, ln, less, grep, tail, ssh, reboot, poweroff  
- Bonus  
   - vim

But really, a programmer needs more than that.  

#### Different problem solve
```sh
WARNING: The following packages cannot be authenticated!
Solutions: $ apt-get install debian-archive-keyring
```