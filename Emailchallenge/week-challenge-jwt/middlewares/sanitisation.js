const {body , validationResult} = require('express-validator');


function sanitizePost() {
    return[
        body('title').trim().isLength({min : 4}).escape(),
        body('author').trim().isLength({min : 3}).escape(),
        body('paragraph').trim().isLength({min : 20}).escape(),
        (req,res,next) => {
            const err = validationResult(req);
            if(!err.isEmpty()){
               res.send(err);
            }
            next();
        }
    ];
}

function sanitizeUserRegister(){
    return[
        body('username').trim().isLength({min : 3}).escape(),
        body('password').trim().isLength({min : 8}).escape(),
        body('email').trim().isEmail().escape(),
        (req,res,next) => {
            const err = validationResult(req);
            if(!err.isEmpty()){
                res.send(err);
            }
            next();
        }
    ];
}

module.exports = {sanitizePost,sanitizeUserRegister};