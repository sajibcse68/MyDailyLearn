# MyDailyLearn
Here is some important `commands` or `code snippets` on different topics that I am learning in my developing life.

## Table of Contents
1. [Git](#git)
1. [JavaScript](#javascript)
1. [Linux](#linux)
1. [Docker](#docker)


# [Git](https://github.com/sajibcse68/MyDailyLearn/blob/master/git/git-cheatsheet.md)

- [Configure git](https://github.com/sajibcse68/MyDailyLearn/blob/master/git/git-cheatsheet.md#configure-git)
  - Config file locations
  - Configure user's name & email
  - Various important config commands
- [Branching](https://github.com/sajibcse68/MyDailyLearn/blob/git/git/git-cheatsheet.md#branching)
  - Create new branch
  - Delete branch
  - Quick switch back to previous branch/commit-sha/references etc.
  - Branch listing
  - Rename a branch
  - Track new branch
  - Checkout branch/commit-sha/references/etc. (go forward/backward)
- [Add, Commit, Amend, Pull, Push, Merge & Delete](https://github.com/sajibcse68/MyDailyLearn/blob/master/git/git-cheatsheet.md#add-commit-amend-pull-push-merge--delete)
- [Checkout forward/backward](https://github.com/sajibcse68/MyDailyLearn/blob/master/git/git-cheatsheet.md#add-commit-amend-pull-push-merge--delete)
- [Cherry Pick](https://github.com/sajibcse68/MyDailyLearn/blob/master/git/git-cheatsheet.md#add-commit-amend-pull-push-merge--delete)
- [Stashing](https://github.com/sajibcse68/MyDailyLearn/blob/master/git/git-cheatsheet.md#stashing)
- [Logging](https://github.com/sajibcse68/MyDailyLearn/blob/master/git/git-cheatsheet.md#logging)
- [Show - more logging](https://github.com/sajibcse68/MyDailyLearn/blob/master/git/git-cheatsheet.md#show-more-logging)
- [Recovery or Reset](https://github.com/sajibcse68/MyDailyLearn/blob/master/git/git-cheatsheet.md#recovery-or-reset)
  - Reset using `reflog`
- [Squash](https://github.com/sajibcse68/MyDailyLearn/blob/master/git/git-cheatsheet.md#squash)
- [Rebase](https://github.com/sajibcse68/MyDailyLearn/blob/master/git/git-cheatsheet.md#rebase)
  - Change the `author` of an earlier commit
  - Change the `commit message` of an earlier commit
  - Reordering commits using rebase
  - Rebase options
- [Working with remotes](https://github.com/sajibcse68/MyDailyLearn/blob/master/git/git-cheatsheet.md#working-with-remotes)
- [Conflicts](https://github.com/sajibcse68/MyDailyLearn/blob/master/git/git-cheatsheet.md#conflicts)
  - e.g. Merging `release` branch into `master` and we have 3 folders `foo/`, `bar/`, `js/`. Now want to resolve conflicts such as `foo/`, `bar/` should like `master` and `js/` should like `release` branch.
- [Git Submodules](https://github.com/sajibcse68/MyDailyLearn/blob/master/git/git-cheatsheet.md#submodules)
- [Some important operations](https://github.com/sajibcse68/MyDailyLearn/blob/master/git/git-cheatsheet.md#some-important-operations)
  - Cleanup garbage in remote repository
  - Prune empty commits
  - Create a new **[WorkTree](https://git-scm.com/docs/git-worktree#_synopsis)** and work paralley in the same repo (diffeent branch)
  - Add a `signed-off-by` field in a commit
  - How to tell git to ignore local changes (already tracked by git)?
  - Generate a Git Hash (SHA1) for specific contents
- [Tag and Releases](https://github.com/sajibcse68/MyDailyLearn/blob/master/git/git-cheatsheet.md#tags-and-releases)
- [Fancy Commands](https://github.com/sajibcse68/MyDailyLearn/blob/master/git/git-cheatsheet.md#fancy-commands)
- [Concepts](https://github.com/sajibcse68/MyDailyLearn/blob/master/git/git-cheatsheet.md#concepts)
  - Tracked vs Untrack file
  - GitHub vs Git
  - Commit Object
  - Three areas where code lives
  - Three types of git `References`
  - Different types of HEAD
  - The Seven Rules of a Great Git Commit Message
  - Difference between HEAD~ and HEAD^

# Docker

* Docker Install (latest or a specific version)
* Run docker as daemon
* Remove all containers
* Remove all images
* Run an image
* print log of a container
* Exec a container
* Run image with binding port

