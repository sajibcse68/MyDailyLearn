#### Various Heroku commands
```
// Login to heroku account
$ heroku login

// Create a new remote repo named `heroku` where the code will be pushed to 
$ heroku create

// Two remotes listed, `origin` and `heroku`
$ git remote -v 

// Push the latest code to heroku for deployment
$ git push heroku master

// Open up a browser window and navigate to the deployed application URL
$ heroku open

// Rename remote repo, edit url, then update git remote locally
$ git remote rm heroku
$ heroku git:remote -a <new-name>
```

#### Some reasons we might want to push a new version to `staging` frist instead of going straight to production.
- If our app crashes on launch (or on the first query), we don't want all our users to be inconvenienced.
- The staging environment lets our lawyer check it for copyright violations.
- Staging environments are always faster than production, so we can make changes quicker.
- If we push to production and it breaks, our users will be affected.
- If the new version needs more resources (like CPU or memory) we can find out in staging instead of finding out when we 
  get a giant bill for production resources 
  