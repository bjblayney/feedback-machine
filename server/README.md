# Node and React Survey feedback

## Start Up
* npm install
* npm start

# Notes
* Using `const keys = require('./config/keys');` for secrets, git ignored.
* nodemon for auto restarting server - `npm run dev`
* cookie based authentication
 

## Express
* http utility
* app.get 
* gets and serves us the json data


## Heroku staging
* https://dashboard.heroku.com/apps
* https://young-fortress-55419.herokuapp.com/
* https://git.heroku.com/young-fortress-55419.git
* Holds prod env variables _Config Vars_


## Passport
* helpers for handling authentication
* Using only Google Strategy
* http://www.passportjs.org/docs/google/


### Google Oauth
* console.developers.google.com
* Using google+ api for Oauth
    * scope: ['profile', 'email']
* Auth flow:
    * send auth request to google _via click or route_
    * user grants permission
    * receive auth code
    * send request to google for info _accessToken, refreshToken, profile, done_
    * google replies with details
* trusting google that the user ID will not change


## MongoDB
* list of users for login
    * user's created surveys
* mongodb is schema-less - in a collection, every record can have its own distinct set of properties
* using mongoose.js
    * model classes and instances
    * mongoose wants a defined schema, so we lose out on mongobd's schema-less-ness
    * 


## Create React App
* https://github.com/facebook/create-react-app
* react server, webpack, babel, live re-load dev stuff
* client side - another package.json file
* `cd client`
    * `npm run build`
        * compiles into `/client/build`
* index.js - Data layer control (Redux)
* app.js - Redndering layer control (React Router)

### Redux

### React Router
* react-router-dom - for helpers around the dom
