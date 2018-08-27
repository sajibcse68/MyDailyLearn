#### Why `Yarn`?
- Fast
- Offline Mode
- Secure

#### Install
```
$ brew install yarn   # macOS
$ brew upgrade yarn   # upgrade to latest stable version

# instal via npm 
$ npm install -g yarn
```

#### Add or Remove package

```
$ yarn global <add/bin/list/remove/upgrade> [--prefix]

$ yarn global add <package>  # add a package globally
$ yarn add <package>         # add a package into current project's dependencies
$ yarn add <package> --dev   # add a package into current project's dev-dependencies
$ yarn remove <package>      # remove a package from current project

```

#### Change of modify a config value. The change is written in `~/.yarnrc` file.
```
$ yarn config list                 # see the global config list

$ yarn config set save-prefix '~'  # save-prefix was '^' before now '~'
$ yarn config list                 # notice 'save-prefix': '~'
$ cat ~/.yarnrc                    # save-prefix "~" is written

$ yarn config delete save-prefix
# undo the config to default, delete the entry from ~/.yarnrc file
```

#### Dependency types

- `dependencies:` These are normal dependencies, or rather ones that we need running our code (e.g. React or ImmutableJS).
  - `$ yarn install --production` # only install devDependencies into node_modules/
  - `$ yarn add <package>` # dependencies

- `devDependencies:` These are our development dependencies. Dependencies that we need at some point in thedevelopment workflow but not while running our code (e.g. Gulp, Grunt, Lintr, Babel or Flow).
  - `$ yarn add -D <package>` # devDependencies

- `peerDependencies:` These are a special type of dependency that would only ever come up if we were publishing our own package. Having a `peer dependencies` means that our package needs a dependency that is the same exact dpendency as the person installing our package. This is useful for packages like `react` that need to have a single copy of `react-dom` that is also used by the person installing it.

- `optionalDependencies:` These are just that: optional. If they fail to install, Yarn will still say the install process was successful. This is useful for dependencies that won't necessarily work on every machine and we have a fallback plan in case they are not installed (e.g Watchman)

- `bundledDependencies:` Array of package names that will be bundled when publishing the package. Bundled dependencies should be inside our project. The functionality is basically the same as normal dependencies. They will also be packed when running `yarn pack`. Normal dependencies are usually from the npm registry. Bundled dependencies are useful in cases normal dependencies are not sufficient:

  - When we want to re-use a third party library that doesn't come from the npm registry or that was modified.
  - When we want to re-use our own projects as module
  - When we want to distribute some files with our module.


#### Semantic Versioning

| Type                    |Modifier |   e.g.    | Efective Range         | Comment                |
| --------                |:-------:|  :-------: |  :-----------:         | -------------          |
| Exact                   | none    |  "1.0.0"  | 1.0.0 -> 1.0.0         | Exact and only version to install 
| Exact                   | =       | "=1.0.0"  | 1.0.0 -> 1.0.0         | Same as before |
| Latest Minor            | ^       |  "^1.1.0" | 1.1.0 -> 1.999.999     | 
| Latest Patch            | ~       | "~1.1.2"  | 1.1.0 -> 1.1.999       |
| Greater Than            | >       | ">1.1.0"  | 1.1.1 -> 999.999.999   |
| Less Than               | <       | "<1.1.0"  | 1.0.999 -> 0.0.0       |
| Greater Than or Equal To| >=      | ">=1.1.0" | 1.1.0 -> 999.999.999   |
| Less Than or Equal To   | <=      | "<=1.1.0" | 1.1.0 -> 0.0.0         |
| Latest (Any)            | *       | "*"       | 0.0.0 -> 999.999.999   |
| Latest (Any)            | X       | "X"       | 0.0.0 -> 999.999.999   |
| Latest (Any) Minor      | *       | "1.*"     | 1.0.0 -> 1.999.999     |
| Latest (Any) Minor      | X       | "1.X"     | 1.0.0 -> 1.999.999     |
| Latest (Any) Patch      | *       | "1.1.*"   | 1.1.0 -> 1.1.999       |
| Latest (Any) Patch      | X       | "1.1.X"   | 1.1.0 -> 1.1.999       |

#### Fancy Commands

```
# see the yarn bin directory location
$ yarn bin

# see the installed version, desired version based on sembar & latest available version
$ yarn outdated

# upgrade a package version
$ yarn upgrade

# display the outdated packages before performing any upgrade, allowing user to select which packages to upgrade
$ yarn upgrade-interactive

# see the complete dependency graph
$ yarn list

# see details of disk size with/without dependencies, # of shared dependencies etc.
$ yarn why <package>

# see the details info of a package
$ yarn info <package>

# see the global config list
$ yarn config list
```