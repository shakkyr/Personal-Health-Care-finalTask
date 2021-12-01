const authModel = require('../models/auth.model');


exports.getSignup = (req, res, next) =>{
    res.render('signup')
};


exports.postSignup = (req, res, next)=> {
    authModel.createNewClient().then(()=>{
        res.redirect('/login').catch(err=> {
            res.redirect('/signup');
        })
    })
};


exports.getLogin = (req, res, next) => {
    res.render('login')
};