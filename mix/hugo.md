#### :arrow_forward: Install Hugo

    $ brew update             # update the formulae and Homebrew install itself
    $ brew install hugo        # install hugo using HomeBrew
    $ which hugo              # show the location of the hugo executable
    $ ls -ls $( which hugo )  # show the installed version
    $ hugo version            # verify that hugo runs correctly



#### :arrow_forward: Run hugo project
    
    $ hugo                              # generate public folder
    $ hugo server --watch --verbose
    

    $ hugo new site <path-to-project>   # create a hugo  project
    $ hugo new theme <theme-name>       # create a new   theme

    $ hugo new a.md                     # create a new file inside content/
    $ hugo new dir1/b.md                # create a new file content/dir1/b.md
    $ hugo server -D                    # render with draft file (draft: true)

#### :arrow_forward: Loop

```
// Loop over array
{{ range array }}
    {{ . }}
{{ end }}

// Declaring value => variable-name
{{ range $element := array }}
    {{ $element }}
{{ end }}

// Declaring Key-Value variable name
{{ range $index, $value := array }}
    {{ $index}}
    {{ $value }}
{{ end }} 

```

#### :arrow_forward: Conditionals
Go Templates treat the following values as false: 
- false
- 0
- any zero-length array, slice, map or string.


``` 
// if                                        |  // with (alternative)
{{ if isset .Params "tilte" }}               |  {{ with .Params.title }} <h4>{{ . }}</h4> {{ end }}
    <h4>{{ index .Params "title" }} </h4>    |
{{ endif }}

// with, an alternative way of writing "if" and then referencing the same value is to use "with" instead. 
// "with" rebinds the context "." within its scope and skips the block tf the variable is absent. 
{{ with .Params.title }} <h4>{{ . }}</h4> {{ end }}

// if ... else
{{ if isset .Params "title" }}
    {{ index .Params.title }}
{{ else }}
    {{ index .Params "caption" }}
{{ end }}

// if ... else if
{{ if isset .Params "alt" }}
    {{ index .Params "alt" }}
{{ else if isset .Params "caption" }}
    {{ index .Params "caption" }}
{{ end }}

// and, or
{{ if and ( or ((isset .Params "title") (isset .Params "caption")) (isset .Params "altr") }}


```

#### Note
- Function are used only inside `Layouts` directory not from others directory
- We can use `shortcodes` inside *content/<*.md>* file by `{{< shortcode-file-name>}}`. Shortcode file exists in *layouts/shortcodes/<file>.html*

