const { sign } = require('jsonwebtoken')

const createAccessToken = id => {
    return sign({id}, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn : "15m"
    })
}

const createRefreshToken = id => {
    return sign({id}, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn : "7d"
    })
}

const sendAccessToken = (req, res, accestoken) => {
    res.send({
        accestoken,
        name : req.body.name
    })
}

const sendRefreshToken = (res, refreshtoken) => {
    res.cookie('refreshtoken', refreshtoken, {
        httpOnly : true,
        path : '/refresh_token'
    })
}

module.exports = {
    createAccessToken,
    createRefreshToken,
    sendAccessToken,
    sendRefreshToken
}