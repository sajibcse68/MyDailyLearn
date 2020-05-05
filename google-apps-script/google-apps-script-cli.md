## Introduction

The Apps Script CLI, or `clasp`, is a tool that lets you to create, edit, and deploy [Apps Script](https://developers.google.com/apps-script/) projects locally. It allows you to create and publish `web apps` and `add-ons` for products like Sheets, Docs, Forms, and Slides from the command line. There are two ways you can develop Apps Script, using `script.google.com` or `locally` on your computer.

## Install

```sh
$ npm i @google/clasp -g
```

## Login

Before we start using the command line tool, we must log in:

```sh
clasp login
```
At this point, we are prompted to log in to Google. Any projects you create with the CLI are associated with this Google account.

## Create New Project

### Create a standalone project

Start out by creating a standalone Google Apps Script project with the following command:

```sh
$ mkdir clasp_codelab;
$ cd clasp_codelab;
$ clasp create --title "Clasp Codelab";
```

We just created an Apps Script Project in the folder `"clasp_codelab"`!

> Note: The `clasp create` command created a standalone script. This means the project is not connected to a Google Sheet, Doc, Form, or Presentation.

### Clone an existing project

To do this, go to [slides.google.com](https://docs.google.com/presentation/u/0/) and create a new presentation. Change the presentation name to `"clasp Codelab Test"`. In the header, under `Tools`, press `Script Editor....`

This will open your Apps Script project at `script.google.com`. To clone a project, we need to find the `Script ID`. You can find this value by going to **File > Project properties > Info > Script ID** (this value is also found in the URL). Copy the value and paste it in the following command:

```sh
$ clasp clone <scriptID>
```

Now we have downloaded the project in our current directory. We can use favorite editor to view the contents of `Code.gs` (an empty function).

## Pulling & Pushing Files

Open the script in the cloud:

```sh
clasp open
```

Now that we're on the `online editor`, we'll edit some code online that we'll later fetch using `clasp`. Do any change (maybe write a simple function) & pull it locally using `clasp`:

```sh
$ clasp pull
```

then do any change locally & push the changes to remote:

```sh
$ clasp push
```

> `clasp` push replaces code that is on script.google.com and clasp pull replaces all files locally.

## Versioning and Deploying

`clasp` allows us to manage `versions` and `deployments`. First, some vocabulary:

- `Version`: A "snapshot" of a script project. A version can be considered a `read-only` branch used for deployments.
- `Deployment`: A published release of a script project (often as an `add-on` or `web app`). Requires a version number.

Create a version of the script:

```sh
clasp version 'First version 1.0.0'
```

Deploy the script:

```sh
$ clasp deploy 1 "First deployment"
```

The `clasp deploy` command looks at your [manifest](https://developers.google.com/apps-script/concepts/manifests) and creates a new versioned deployment. Your code is now deployed as an executable. Learn more about this in the [deployments guide](https://developers.google.com/apps-script/concepts/deployments).

## Reference

- [GitHub Repo](https://github.com/google/clasp)
- [Clasp - The Apps Script CLI](https://codelabs.developers.google.com/codelabs/clasp/#0)