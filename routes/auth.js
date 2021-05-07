const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/login', (req, res) => {
    res.send("Please login");
});

router.post('/login', (req, res, next) => {
    //callback invokes the local strategy and if no error and user is found it logs the user in
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return res.status(400).json({errors: err});
        }
        if (!user) {
            return res.status(400).json({errors: "No user found"})
        }
        req.logIn(user, (err) => {
            if (err) {
                return res.status(400).json({errors:err});
            }
            return res.status(200).json({success: `logged in ${user.id}`});
        });
    }) (req, res, next);
});

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
    console.log("User logged out");
})

module.exports = router;