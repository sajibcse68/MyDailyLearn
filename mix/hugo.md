#### :heavy_check_mark: Install Hugo

    $ brew update             # update the formulae and Homebrew install itself
    $ brew install hugo        # install hugo using HomeBrew
    $ which hugo              # show the location of the hugo executable
    $ ls -ls $( which hugo )  # show the installed version
    $ hugo version            # verify that hugo runs correctly



#### :heavy_check_mark: Run hugo project
    
    $ hugo                              # generate public folder
    $ hugo server --watch --verbose
    

    $ hugo new site <path-to-project>   # create a hugo  project
    $ hugo new theme <theme-name>       # create a new   theme

    $ hugo new a.md                     # create a new file inside content/
