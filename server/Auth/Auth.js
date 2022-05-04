const { verify } = require('jsonwebtoken');

class CheckToken {

static authenticate( req, res, next ) {
    let token = req.get('authorization');
    if(token){
        token = token.split(' ')[1]
        verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        req.user = decoded
            if(err){
                res.status(400).json({msg : "invalid"})
            }else {
                next()
            }
        })
    }else {
        res.json({message : "access denied"})
    }
}

}

module.exports = CheckToken