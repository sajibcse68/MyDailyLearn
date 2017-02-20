#### Configure Git:
We can configure git globally. We can see out global git configure file ``(~/.gitconfig)``.
```
$ git config --global user.name <your-name>
$ git config --global user.email <your-email>
```
We can also configure git ``locally``. May be for each local repository if necessary. It ``overwrites the global configuration``.
```
$ git config --local user.name <your-name>
$ git config --local user.email <your-email>
```
#### Some other necessary ``config`` commands
```sh
$ git config --list                              # See full configuration of git                           
$ git config --global core.editor emacs          # Use emacs for interactive commands
$ git config --global merge.tool opendiff        # Use opendiff for merging conflicts
$ git config --global color.ui true              # Better visualization            
$ git config core.ignorecase false               # If we want case sensitive git
                                                 
$ git config --global --remove-section alias     # Remove the global alias section
$ git config --remove-section alias            # Remove the global alias section
$ git config --global --unset alias.<name>       # Unset an alias
$ git config --global --unset core.<name>        # Unset an core

 
# (git-credentials store) Reduce the number of times we must type our username or password
$ git config credential.helper store
$ git push http://example.com/repo.git
Username: <type your username>
Password: <type your password>
# several days later
$ git push http://example.com/repo.git
[your credentials are used automatically]

# unset git credentials
$ git config --global --unset credential.helper

# `~/.git-credentials` or `~/.config/git/credentials` save the credentials
$ sudo find / -type f -name .git-credentials
$ sudo find / -type f -name credentials

# for `windows` credential.helper = manager
$ git config --global credential.helper manager  
$ git credential-manager delete <url>                   # delete credential-manager
e.g. git credential-manager delete https://github.com



# Auto correct Line Feed
$ git config --global core.autocrlf input    # On unix line systems (Linux, OSX, etc)
$ git config --global core.autocrlf true     # On windows system
$ git config --global core.autocrlf false    # For Windows only project

# Set alias
$ git config --global alias.st status        # git st -> git status
$ git config --global alias.co checkout      # git co -> git checkout
$ git config --global alias.br branch        # git br -> git branch
```
#### Branching:
* master    ->  default develop branch
* origin    ->  default upstream branch
* HEAD      ->  current branch
* HEAD^     ->  parent of HEAD
* foo..bar  ->  from branch foo to branch bar

```sh
# Show
$ git branch                                 # Show all local branches
$ git branch -r                              # Show all the remote branched
$ git branch -a                              # Show all local and remote branches
$ git branch -v                              # Show all local branches with last commits
$ git branch -vv                             # Show all local branches with last commits and remote tracking branch
$ git branch -av                             # Show all local and remote branches with last commits
$ git branch --merged                        # Show lists of branch merged with current branch
$ git branch --no-merged                     # Show lists of branch not-merged with current branch
$ git branch -a --contains <commit-hash>     # Show list of branch(s) exits the commit
$ git branch -m <old-name> <new-name>        # Rename a branch
.
# Create
$ git branch <branch-name>                   # Create a new branch
$ git checkout -b <branch-name>              # Create & checkout to new branch
$ git checkout --orphan <branch-name>        # Create a branch with no commit list
$ git checkout -b <branch> <remote/branch>   # Create a new branch from a remote branch history
.
# Push
$ git push origin <branch-name>                   # Push to remote branch
$ git push -u origin <branch-name>                # -u tells Git to remember the parameters, so that next time we can simply run `git push`
$ git push origin HEAD:<branch-name>              # Push the current branch without thinking about its local name.
$ git subtree push --prefix dist origin gh-pages  # Push only a specific folder to remote branch
$ git subtree push --prefix src origin gh-pages   # Deploy source directory
.
# Delete
$ git branch -d <branch-name>                              # Delete the local branch, show a warning
$ git branch -D <branhc-name>                              # Force to delete branch
$ git push origin :<branch-name>                           # Delete remote branch
$ git push origin --delete <branch-name>                   # Delete remote branch
$ git remote prune origin                                  # Cleanup remote deleted branch
$ git branch --merged | grep -v '*' | xargs git branch -d  # delete merged branches
```

####  Add, Commit, Amend, Push, Pull & Merge
```sh
# Add
$ git add .                                         # Adds file changes to the index                      
$ git add --all                                     # Add all changes
$ git add -p                                        # Stage a particular change
.     
# Commit                                                                          
$ git commit -am 'commit message'                   # Add & commit        
$ git commit --allow-empty -m k3;                   # Commit empty change
$ git cherry-pick <commit-hash>                     # Take a commit change of another branch
$ git commit -m 'msg' --include file1.txt file2.txt # Commit specific files
.
# Amend
$ git add task2.txt                                 # Add any file
$ git commit --amend -m 'new message'               # Merge current change to previous commit and will also change the commit hash
$ git commit --amend --date="<date>"                # Override the date
.
# Pull
$ git pull origin <branch-1>                        # Pull the change of 'branhc-1' in current branch 
$ git subtree add --prefix=other/ <repo-url> master # Pull master branch of a repo into a subdirectory named 'other/'
.
# Push
$ git push origin <branchame>                       # Push a branch
$ git push -f origin <branch-name>                  # Overwrite remote branch (by force)
.
# Merge
$ git merge origin <branch-1>                       # Merge remote 'branch-1' with current branch
$ git mergetool
$ git merge <from-commit> <to-commit>               # Merge a range of commit (including two given commits)
$ git merge --squash <privateFeatureBranch>
```
#### Checkout (go forward/backward)
```
$ git checkout -                           # Switch to the last branch you are
$ git checkout <commit-hash>               # Go to a specific commit
$ git checkout <branch-name>               # Return to present state
$ git checkout <commit-hash> <file-name>   # Only a file will go back to specific commit
$ git checkout <branch-name> -f            # Return to persent state by force
$ git checkout -- <filename1> <filename2>  # Discard all changes of file1 and file2
$ git checkout origin/master <file-name>   # Reset a file with origin/master
```
#### Cherry-pick
```
$ git cherry-pick <commit-hash>                             # Copy a single commit to current branch
$ git cherry-pick <commit-hash> -X theirs                   # If conflicts occurs then accepts theirs
$ git cherry-pick --edit <commit-hash>                      # Pop-up a editor, then change the commit message.
$ git cherry-pick --no-commit <commit-hash> <commit-hash>   # --no-commit pulls in changes and stages them, but doesn't commit
$ git cherry-pick -x <commit-hash>                          # -x: keep track where the commit came from
$ git cherry-pick --signoff <commit-hash>                   # --signoff add current users name to commit message
$ git cherry-pick A..B                                      # take a range of commit, A < B and A is not included
```

#### Stashing
```sh
$ git stash save                                    # Save the changes in temporary box
$ git stash save "provide a stash message"          # We can provide a stash message when stashing.
$ git stash apply stash@{0}                         # Return the codes that I cleaned before
$ git stash apply stash@{2}                         # get back the #3 stash codes.
$ git stash list                                    # Show how many stash we have
$ git stash list --stash              ktu               # Show all stash lists with changes file
$ git stash show stash@{1}                          # Show only a specific stash with commits
$ git stash show --patch                            # Shows file diffs
$ git stash drop = git stash drop stash@{0}         # Pop = apply + drop
$ git stash pop = git stash apply + git stash drop  # Temporary delete or clean
$ git stash clear                                   # Clean all the stash
$ git stash branch <branchname> stash@{0}           # Checkout a new branch with popping stash@{0}
$ git stash save --keep-index
.
# resolve conflicts when doing stash pop
$ git checkout stash -- .                           # replace all the files with the stashed version
.
Or, 
$ git stash apply                                   # apply the stashed changes, conflicts occure here
$ git checkout --theirs -- .                        # accept stashed changes 
```

#### Log:
```sh
$ git log                                          # Show  all the change/commit history
$ git log <branch-name>                            # Show the commits of a specific branch
$ git log --oneline --decorate --all --graph       # See all commits with better visualization
$ git log -p <file/directory>                      # Show change history for file/directory including diffs
$ git log --pretty=format:"%h - %an, %ar : %s"     # commit hash-tag -> name -> data -> commit-message
# see commit-hash, branch-name, commit-message, time, committer-name and changes of the commits 
$ git log -p --all -G pattern --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset%n' --branches
$ git log --pretty=oneline
$ git log -1 --pretty=format:'%an'                 # Print last commit's Author Name  
$ git log --oneline -p
$ git log --oneline --stat
$ git log --oneline --graph
$ git log --until=1.minute.ago                     # Until a specific time
$ git log --since=1.day.ago                        # Since (days)
$ git log --since=1.hour.ago                       # Since(hours)
$ git log --since=2.weeks                          # Since two weeks
$ git log --since=1.month.ago --until=2.weeks.ago  # Since & until (relative)
$ git log --since=2000-01-01 --until=2012-12-21    # Since & until (absolute)
$ git blame index.html --date short
$ git rm                                           # Remove the file from the staging area and also from the disk                         
$ git rm --cached development.log                  # What if you're already tracking log files?
```

#### Recovery/Reset:                                    
```sh
$ git log                                 # Show all the change/commit history
$ git show <commit hash>                  # See what changes in a specific commit
$ git reset --soft <commit hash>          # Back to a specific commit and exits the change
$ git diff HEAD                           # Show the changes to files not yet staged
.
$ git checkout -- <file-name>             # Replaces the changes with the last content in HEAD 
$ git clean -f -n                         # clean untract file (dry run)
$ git clean -df                           # -d remove untracked directories in addition to untracked files, -f (force)
$ git checkout -- .
$ git clean -dxf
$ git rm --cached -r .                    # remove git cached (e.g. add a file in .gitignore that already added in git)
$ git revert -p <fromCommit>..<toCommit>  # revert a range of commit, need to commit after the commit 
.
# Recover a branch after deletion
$ git reflog                              # see all commits and select the last commit (SHA1) of deleted branch
$ git checkout <sha>                      # checkout that commit
$ git checkout -b <deleted-branch-name>   # recover that branch after creating a new branch with same name
# shortcut
$ git checkout -b <branch> <sha>
```

#### Reset Using **reflog**
```sh
$ git reflog                           # See all the task step by step
$ git reset <HEAD no.>                 # Return to present after a hard reset, e.g. HEAD@{8}
$ git reset --hard                     # We moved to HAED@{8} completely
$ git log --walk-reflogs               # More details
$ git branch <branceName> HEAD@{1}     # Create a new branch with a commit (the branch is deleted where this commit was given)
```

#### Squash
```
# in general I do
$ git reset --soft HEAD~3                              # undo last 3 commits, remains all the changes in local
$ git add --all; git commit -m 'new squash message'    # commit the 3 previous commits in one
$ git push -f origin <branch-name>                     # by force overwrite the remote branch and also commits
```

#### Rebase
```sh
$ git checkout <admin_branch>
$ git rebase master                                    # Merge all commits of admin_branch after master's commits
$ git checkout master                                  
$ git checkout -b <history_master>                     # Backup master branch if necessary
$ git merge <admin_branch>
$ git commit --amend --committer-date-is-author-date   # keep the date same as committer date when amending

# Change the `author` of an earlier commit
$ git checkout <commit-hash>                                             # checkout the commit we're trying to modify
$ git commit --amend --author "New-author-name <new-author@mail.com>"    # change the author name and mail
$ git replace <old-commit-hash> <new-commit-hash>                        # replace the old commit by new one
$ git filter-branch -- --all ^<new-commit-hash>                          # note '^' before hash, rewrite all futures commits based on the replacement                   
$ git replace -d <old-commit-hash>                                       # remove the replacement for cleanliness 
$ git push -f origin HEAD                                                # force push 
 
# Alternate way (May occur conflicts and more complex)
$ git rebase -i <commit-hash>                                               # go to last good commit
# Editor will open, write `edit` before the commit we want to change author

# Change the `commit message` of an earlier commit
$ git filter-branch -f --msg-filter 'sed "s/<old-msg>/<new-msg>/g"' -- --all # Replace the old message with new message
e.g. git filter-branch -f --msg-filter \
     'sed "s/release\/Version-[0-9].[0-9].[0-9]/develop/g"' \
     --tag-name-filter cat -- --all

$ git rebase -i HEAD-{N}
# Upon running this command, an editor will open with a list of these N commit message, one per line. Each of these lines
will begin with `pick`. Replacing `pick` with `squash` or `s` will tell Git to combine the commit with the commit before it.
To combine N commits into one, set every commit in the list to be squash except the first one. Upon exiting the editor, and if
no conflict arises, git rebase will allow you to create a new commit message for the new combined commit.

$ git commit --amend --author="author name <author@email.com>"              # change the author name & email
# Editor will open, save and exit                                           # we can change 'commit-message' here
$ git rebase --continue                                                     # finish the rebase

# Reordering commits using rebase
$ git rebase -i <commit-hash>                                               # go to last good commit
# then reorder the commits, be careful it shows the commit in reverse
  way as we see `git log` commands, shows old to new (top to bottom)

# Change very first commit msg + squash the 2nd commit with first commit
$ git rebase -i --root                                   # checkout to very first commit
# Editor will open, write `edit` before the first-commit, `squash` before the 2nd commit
$ git commit --amend -am 'New commit message'
$ git rebase --continue

$ git rebase --skip                      
$ git rebase --abort
```
[See this](https://ariejan.net/2011/07/05/git-squash-your-latests-commits-into-one/)

#### Working with Remotes
```
$ git remote add <name> <address/url>          # Add new remote/repositories
$ git remote rm <name>                         # Remove a remote
$ git remote rename <present-name> <new-name>  # Rename a remote
$ git remote set-url origin <remote-url>       # Set remote url 
$ git remote show                              # Can have multiple remote
$ git ls-remote --get-url origin               # Show only the url of origin
$ git remote show origin                       # Show remote url and branches of origin 
$ git remote -v                                # See all the remotes
$ git fetch <remote-name>                      # Fetching/pulling from remote
```

#### Conflicts:
* Life being the pain in the proverbial that it is, our merge might have a `conflict`.
* The git status command will help you understand where the conflict exists. If you open the file,
* You’ll notice some markers: <<<<, >>>>, and ====, that surround the lines that conflict,
* Including the changes that each branch is trying achieve.
* Fix manually.

#### Prune Empty Commits
```
$ git <brance-name> -f --prune-empty -- --all           # Delete all empty commits in a branch
$ git <branch-name> --tree-filter 'rm -f password.txt'  # Remove password.txt file
```

``Faster for large code base``, workded on stagin area, --ignore-nmatch
```
$ git filter-branch --index-filter 'git rm --cached --ignore-unmatch master_password.txt' 
```

#### SubModules: (always push to two repo, first to submodules then parent repo)
```
$ git submodule add git@example.com:css.git                      # Add a submodule in a git project, also create a .gitmodules file
$ git submodule init                                             # Initialize submodules.                   
$ git submodule update                                           # Update the submodules                  
$ git branch temp_changes a7eded4                                # After 'git submodule update' command, codes get checked out in a HEADLESS state.
$ git push --recurse-submodules=check                            # Will abort a push it we haven't pushed a submodule. (run in parent dir )
$ git push --recurse-submodules=on-demand                        # Push to parent repo, then it'll push to submodule automatically.
$ git config alias.pushall "push --recurse-submodules=on-demand" # Alias   
```

#### Cleanup garbase in remote repo
```sh
$ git reflog expire --expire="1 hour" --all
$ git reflog expire --expire-unreachable="1 hour" --all
$ git prune --expire="1 hour" -v
$ git gc --aggressive --prune="1 hour"
$ git rc                               # cleanup unnecessary files and optimize local repo
```

#### Fancy commands

```sh
$ git mv <src-file> <new-file-name>            # Rename a file and keeps all the previous history
$ git status                                   # Difference between working directory and the index
$ git fetch                                    # Get the latest changes from origin (no merge)
$ git fetch -p                                 # -p = --prune, after fetching remove any remove-tracking references that no longer exist on the remote 
$ git pull                                     # Fetch the latest changes from origin and merge
$ git pull --rebase                            # Fetch the latest changes from origin and rebase
$ git pull origin <bn> -s recursive -X theirs  # While pulling if conflicts accepts theirs
$ git pull origin <bn> -s recursive -X ours    # While pulling if conflicts accepts ours (HEAD)
$ git update-index --assume-unchanged <file>   # Tell git to assume unchanged a file
$ git merge -s ours <old-master>               # Merge old master, keeping "our" (origin/master's) content
$ git show --decorate <commit-hash>            # see 'Author', 'Date' and 'diff'                        
$ git show --pretty=%H 1a3fge7                 # short commit hash -> full commit hash
$ git rev-parse 3cdd5d                         # short commit hash -> full commit hash
$ git diff-tree -r <commit-hash>               # show list of files that were changed or added in the commit
$ git diff-tree -r <hash> -p                   # show list of files with changes that were changed or added in the commit
$ git diff-tree --name-only -r <hash>          # show only the file name of changed files
$ git diff-tree --no-commit-id -r <hash>       # show only the file name of changed files
$ git init                                     # From scratch -- create a new local repository
$ git diff                                     # workspace vs index
$ git diff --cached                            # index vs repo, show all staged and unstaged file changes
$ git diff HEAD                                # workspace vs repo
$ git whatchanged --since="3 day ago"          # see the changed file lists name since 3 days
$ git whatchanged --since="1 day ago" -p       # see the changes with file lists
$ git whatchanged --since="1 day ago" <file>   # see the changes of a specific file
$ git clone <url> --branch <branch-name>       # clone a specific branch
$ git clone <url> -b <branch>                  # clone into a new local branch instead of master
$ git clone <url> --single-branch              # clone only single branch  
$ git gui
$ git ls-tree -d HEAD                          # Tree object including the mode and the name of each item and the SHA value
$ git difftool
$ git reflog                                   # keeps a record of all commits that are or were referenced in your repo at any time
$ git gc
$ git help <verb>                              # Find out more
$ git fsck --lost-found                        # Verifies the connectivity and validity of the objects in the database
$ git command --help                           # When in doubt, use git help

$ curl -s -L https://github.com/git/git/pull/309.patch | git apply --stat -  # see modified files of a pull request

### Create a remote branch using REST API
$ curl -X POST -H "Content-Type: application/x-www-form-urlencoded" -vv -u '$USERNAME:$PASS' "https://bitbucket.org/branch/create" -s -d 'repository=$TEAMORUSER%2F$REPO&from_branch=master&branch_name=feature'


# Show diff
$ git diff b1..b2                              # Compare two brances, show you what is in b2 that is not in b1
$ git diff <commit1> <commit2>                 # Show changes between two commits id
$ <url><tag-1>...<tag-2>                       # Compare changes of two tags in github 
# [Example](https://github.com/jenkinsci/jenkins/compare/jenkins-1.651...jenkins-1.651.2)

# Set git diff to a default value (if git diff not works)
$ git config --global --unset diff;            # this two commands reset git diff to default
$ git config --global --unset diff.external   

$ git push -f origin HEAD^:master              # "undo" the push from remote and keep the local intact
$ git blame <file>                             # List the change dates and authors for a file
$ git show <commit>:<file>                     # Show the file changes for a commit id and/or file
```
`$ git branch --set-upstream master_upstream origin/master_upstream`.
The --set-upstream flag is deprecated and will be removed. Consider using --track or --set-upstream-to branch master_upstream set up to track remote branch master_upstream from origin.

#### Tags and Releases
- Release tag point to a single commit
- Semantic versioning should be followed for tags (major.minor.patch)
- Three key reasons for creating a release branch:
	- Manual QA
	- Long running releases
	- On demand hot fixed
```
$ git checkout <commit-hash>                  # checkout to a commit to give a tag
$ git tag                                     # show list of tag
$ git tag -a v1.0.0 -m "message"              # give a tag to this commit
$ git push --tags                             # push the tags to origin
$ git tag -d <tag-name>                       # delete a tag locally
$ git push origin :refs/tags/<tag-name>       # delete a tag from remote

$ git checkout <tag-name>
$ git checkout -b <hot-branch>                # checkout a new branch from present commit
$ git checkout master
$ git merge <hot-branch> -m "Merge hotfix"
$ git branch -d <hot-branch>                  # delete the release branch

# Github pages
- For a username github page url will be '<username>.github.io'   # sajibcse68.github.io
- For a project github page url will be '<username.github.io/<projectname>'  # sajibcse68.github.io/dojo_rules
``` 

#### Stage vs Track file
- Tracked files are files that were in the last snapshot; they can be unmodified, modified, or staged.
- Untracked files are everything else — any files in your working directory that were not in your last snapshot and are not in your staging area (index)

```
$ touch index.html                // unstaged, untracked
$ git add index.html              // staged, untracked
$ git commit -m 'be tracked'      // staged, tracked
```

`$ git log --pretty=format:"%h $ad- %s [%an]" `

#### The Seven Rules of a Great Git Commit Message
1. Separate subject from body with a blank line
2. Limit the subject line to 50 characters
3. Capitalize the subject line
4. Do not end the subject line with a period
5. Use the Imperative mood in the subject line
6. Wrap the body at 72 characters
7. Use the body to explain `what and why vs. how

[See details](http://chris.beams.io/posts/git-commit/)
 
#### Difference between HEAD~ and HEAD^
- `HEAD^` means the `first parent` of the tip of the current branch, `HEAD^2` means `second parent of current branch`, `HEAD~1 / HEAD~2` means always `first parent`. [see this](http://stackoverflow.com/questions/2221658/whats-the-difference-between-head-and-head-in-git)
- ~2 means up two levels in the hierarchy, via the first parent if a commit has more than one parent.
- ^2 means the second parent where a commit has more than one parent (i.e. because it's a merge)
- These can be combined, so HEAD~2^3 means HEAD's grandparent commit's third parent commit.

```
G   H   I   J               A =      = A^0
 \ /     \ /                B = A^   = A^1     = A~1
  D   E   F                 C = A^2  = A^2
   \  |  / \                D = A^^  = A^1^1   = A~2
    \ | /   |               E = B^2  = A^^2
     \|/    |               F = B^3  = A^^3
      B     C               G = A^^^ = A^1^1^1 = A~3
       \   /                H = D^2  = B^^2    = A^^^2  = A~2^2
        \ /                 I = F^   = B^3^    = A^^3^
         A                  J = F^2  = B^3^2   = A^^3^2
```

`HEAD~2`    &nbsp;&nbsp;&nbsp;&nbsp;     : &nbsp;&nbsp;  2 commits older than HEAD  
`HEAD^2`    &nbsp;&nbsp;&nbsp;&nbsp;     : &nbsp;&nbsp;  the second parent of HEAD, if HEAD was a merge, otherwise illegal  
`HEAD@{2}`  &nbsp;                       : &nbsp;&nbsp;  refers to the 3rd listing in the overview of git reflog  
`HEAD~~`    &nbsp;&nbsp;&nbsp;&nbsp;     : &nbsp;&nbsp;  2 commits older than HEAD  
`HEAD^^`    &nbsp;&nbsp;&nbsp;&nbsp;     : &nbsp;&nbsp;  2 commits older than HEAD  

