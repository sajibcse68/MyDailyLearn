# Install Meteor in MacOS
$ curl https://install.meteor.com/ | sh

# Run Meteor
$ meteor

# Create Meteor App, folder structures, etc.
$ meteor create --full <app-name>

# Introduce Directories
- **client/** is where all of our client only code goes. The content of this directory is only available on the client.

- **server/** much like the client directory. We're only using this file to require and initialize other code. We're doing this so that we can best average ES2015 imports in our app.

- **private** holds our static server only assets, such as our seed file. These files won't be processed in any way and will only be accessible to our server logic (including in production).

- **public** holds publicly accessible static assets. This is where things like company logo, favicon, etc. Would go. We don't really leverage this at all in our app.

- **imports** is the big part of our, and any Meteor, app that follows this architecture. Something that is different about this directory compared to others, and the way Meteor apps used to be structured, is that you have to manually require any file you want to use in here. `Lazy loading` doesn't happen. This has a variety of benefits, the primary one being knowing where to look when you're debugging. It's broken up into 3 directories. It's broken up into 3 directories itself - `ui/`, `api/`, `startup/`. api and startup are the ones that we're interested in and the only I'll be covering.

`api/` holds the collection logic. This includes the collection definition, associated methods, and associated publications.

`startup/` is code that we want to run upon app startup. We're leveraging this to seed our database, register our API, and tap into an account creation hook.

