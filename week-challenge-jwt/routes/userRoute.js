const router = require('express').Router()
const {register , login} = require('../controllers/usersControler')


router.post("/register",register)
//.post("/login",login)

router.post("/login",login)


module.exports = router