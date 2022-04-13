const express = require('express')
const userRouter = express.Router()

userRouter.get('/users', (req, res) => {
    res.send("this is user Router")
})


module.exports = userRouter;