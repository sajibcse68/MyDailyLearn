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
$ git config --list                          # See full configuration of git 
$ git remote set-url origin <remote-url>     # Set remote url                
$ git remote -v                              # See all the remotes           
$ git config --global core.editor emacs      # Use emacs for interactive commands
$ git config --global merge.tool opendiff    # Use opendiff for merging conflicts
$ git config --global color.ui true          # Better visualization            
$ git config core.ignorecase false           # If we want case sensitive git     
 
# (git-credentials store) Reduce the number of times we must type our username or password
$ git config credential.helper store
$ git push http://example.com/repo.git
Username: <type your username>
Password: <type your password>
# several days later
$ git push http://example.com/repo.git
[your credentials are used automatically]

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
$ git branch -r                              # Show all the remote branch
$ git branch -av                             # Show all local and remote branches

# Create
$ git branch <branch-name>                   # Create a new branch
$ git checkout -b <branch-name>              # Create & checkout to new branch

# Push
$ git push origin <branchname>               # Push to remote branch

# Delete
$ git branch -d <branchname>                 # Delete the local branch, show a warning
$ git branch -D <branhcname>                 # Force to delete branch
$ git remote prune origin                    # Cleanup remote deleted branch
```
####  Add, Commit, Amend, Push, Pull & Merge
```sh
# Add
$ git add .                                                               
$ git add --all                                     # Add all changes     
     
# Commit                                                                          
$ git commit -am 'commit message'                   # Add & commit        
$ git commit --allow-empty -m k3;                   # Commit empty change
$ git cherry-pick <commit-hash>                     # Take a commit change of another branch 

# Amend
$ git add task2.txt                                 # Add any file
$ git commit --amend -m 'new message'               # Merge current change to previous commit and will also change the commit hash

# Pull
$ git pull origin <branch-1>                        # Pull the change of 'branhc-1' in current branch 

# Push
$ git push origin <branchame>                       # Push a branch
$ git push -f origin <branch-name>                  # Overwrite remote branch (by force)

# Merge
$ git merge origin <branch-1>                       # Merge remote 'branch-1' with current branch
$ git mergetool
$ git merge --squash <privateFeatureBranch>
```
#### Checkout (go forward/backward)
```
$ git checkout <commit-hash>               # Go to a specific commit
$ git checkout <branch-name>               # Return to present state
$ git checkout <commit-hash> <file-name>   # Only a file will go back to specific commit
$ git checkout <branch-name> -f            # Return to persent state by force
$ git checkout -- <filename1> <filename2>  # Discard all changes of file1 and file2
```
#### Cherry-pick
```
$ git cherry-pick <commit-hash>                             # Copy a single commit to current branch
$ git cherry-pick --edit <commit-hash>                      # Pop-up a editor, then change the commit message.
$ git cherry-pick --no-commit <commit-hash> <commit-hash>   # --no-commit pulls in changes and stages them, but doesn't commit
$ git cherry-pick -x <commit-hash>                          # -x: keep track where the commit came from
$ git cherry-pick --signoff <commit-hash>                   # --signoff add current users name to commit message
```
#### Stashing
```sh
$ git stash  ($ git stash save)                     # Save the changes in temporary box
$ git stash save "provide a stash message"          # We can provide a stash message when stashing.
$ git stash apply ($ git stash apply stash@{0})     # Return the codes that I cleaned before
$ git stash apply stash@{2}                         # get back the #3 stash codes.
$ git stash list                                    # Show how many stash we have
$ git stash list --stash                            # Show all stash lists with changes file
$ git stash show stash@{1}                          # Show only a specific stash with commits
$ git stash show --patch                            # Shows file diffs
$ git stash drop = git stash drop stash@{0}         # Pop = apply + drop
$ git stash pop = git stash apply + git stash drop  # Temporary delete or clean
$ git stash clear                                   # Clean all the stash
$ git stash branch <branchname> stash@{0}           # Checkout a new branch with popping stash@{0}
$ git stash save --keep-index
```
#### Log:
```sh
$ git log                                          # Show  all the change/commit history
$ git log --oneline --decorate --all --graph       # See all commits with better visualization
$ git log -p <file/directory>                      # Show change history for file/directory including diffs
$ git log --pretty=oneline
$ git log --oneline -p
$ git log --oneline --stat
$ git log --oneline --graph
$ git log --until=1.minute.ago                     # Until a specific time
$ git log --since=1.day.ago                        # Since (days)
$ git log --since=1.hour.ago                       # Since(hours)
$ git log --since1.month.ago --until=2.weeks.ago   # Since & until (relative)
$ git log --since=2000-01-01 --until=2012-12-21    # Since & until (absolute)
$ git blame index.html --date short                
$ git rm --cached development.log                  # What it you're already tracking log files?
```
#### Recovery/Reset:                                    
```sh
$ git log                                 # Show all the change/commit history
$ git show <commit hash>                  # See what changes in a specific commit
$ git reset --soft <commit hash>          # Back to a specific commit and exits the change
$ git diff HEAD                           # Show the changes to files not yet staged
                                                     
$ git clean -f -n                         # clean untract file (dry run)
$ git clean -dxf
$ git rm --cached -r .
$ git checkout master

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
$ git rebase master                      # Merge all commits of admin_branch after master's commits
$ git checkout master                   
$ git checkout -b <history_master>       # Backup master branch if necessary
$ git merge <admin_branch>               
                                         
$ git rebase --continue                  
$ git rebase --skip                      
$ git rebase --abort                     
                                         
$ git rebase -i HEAD~3                   # i-> interactive rebase, will popup the window and we can rearrange the window.
# write 'reword' replacing 'pick'        # change the commit message
# $ write 'edit' for stopping a commit that is already committed, then 'git reset HEAD^' (--soft), then do two commits.
$ git rebase --continue                  # finish the rebase
                                         
$ git rebase -i HEAD~3                   # merge last 3 commit in one, see 
```
[See this](https://ariejan.net/2011/07/05/git-squash-your-latests-commits-into-one/)

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
#### Fancy commands
Compare changes of two tags in github: `<url><tag-1>...<tag-2>`
[Example](https://github.com/jenkinsci/jenkins/compare/jenkins-1.651...jenkins-1.651.2)

```
$ git status                                   # List new or modified files not yet committed
$ git fetch                                    # Get the latest changes from origin (no merge)
$ git pull                                     # Fetch the latest changes from origin and merge
$ git pull --rebase                            # Fetch the latest changes from origin and rebase
$ git pull origin <bn> -s recursive -X theirs  # While pulling if conflicts accepts theirs
$ git pull origin <bn> -s recursive -X ours    # While pulling if conflicts accepts ours (HEAD)
$ git merge -s ours <old-master>               # Merge old master, keeping "our" (origin/master's) content
$ git init                                     # From scratch -- create a new local repository
$ git diff --cached                            # Show all staged and unstaged file changes
$ git gui
$ git difftool
$ git gc
$ git command --help                           # When in doubt, use git help

# Remote managing
$ git remote add <name> <address/url>          # Add new remote
$ git remote rm <name>                         # Remove a remote
$ git remote rename <present-name> <new-name>  # Rename a remote
$ git remote show                              # Can have multiple remote
$ git remote show origin                       # Show url of remote

# Show diff
$ git diff b1..b2                              # Compare two brances, show you what is in b2 that is not in b1
$ git diff <commit1> <commit2>                 # Show changes between two commits id

$ git push -f origin HEAD^:master              # "undo" the push from remote and keep the local intact
$ git blame <file>                             # List the change dates and authors for a file
$ git show <commit>:<file>                     # Show the file changes for a commit id and/or file
```
`$ git branch --set-upstream master_upstream origin/master_upstream`.  
The --set-upstream flag is deprecated and will be removed. Consider using --track or --set-upstream-to branch master_upstream set up to track remote branch master_upstream from origin.


#### Tags and Releases

- Realese tag point to a single commit
- Semantic versioning should be followed for tags (major.minor.patch)
- Three key reasons for creating a relese branch:
	- Manual QA
	- Long running releases
	- On demand hot fixed

```
$ git checkout <commit-hash>                  # checkout to a commit to give a tag
$ git tag -a v1.0.0 -m "message"              # give a tag to this commit
$ git push --tags                             # push the tags to origin

# More
$ git tag                                       # show list of tag
$ git tag <new-tag>                             # tag the current commit
$ git checkout <tagname>                        # checkout to a tag
$ git tag -a v0.0.3 -m "version 0.0.3"          
$ git push --tag                                # send tag to remote


# Release branches
$ git checkout v1.1                           # checkout to a tag
$ git checkout -b <hot-branch>                # checkout a new branch from present commit
<hotfix>
$ git commit -m "Hotfix"
$ git tag v1.1.1 -m "hotfix"
$ git checkout master
$ git merge <hot-branch> -m "Merge hotfix"
$ git branch -d <hot-branch>                  // delete the release branch

# Github pages
- For a username github page url will be '<username>.github.io'   # sajibcse68.github.io
- For a project github page url will be '<username.githun.io/<projectname>'  # sajibcse68.github.io/dojo_rules

``` 

`$ git log --pretty=format:"%h $ad- %s [%an]" `

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


