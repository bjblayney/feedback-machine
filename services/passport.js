const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    //user.id is our mongo db id, not google profile id
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback',
            //for https heroku proxy issue
            proxy: true
        }, 
        (accessToken, refreshToken, profile, done) => {
            // console.log('access token', accessToken);
            // console.log('refresh token', refreshToken);
            // console.log('profile:', profile);
            User.findOne({ googleId: profile.id }).then(existingUser => {
                if (existingUser){
                    //already have a record
                    done(null, existingUser);
                } else {
                    //no record, make one
                    new User({ googleId: profile.id })
                    .save()
                    .then(user => done(null, user));
                }
            });
        }
    )
);