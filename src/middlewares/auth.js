const jwt = require( 'jsonwebtoken')

exports.validateToken = ( req, res, next) => {
    //check for auth token in request headers
    const authHeader = req.headers["authorization"]

    if( authHeader){
        const token = authHeader.split(" ")[1]

        // if no token found
        if( token == null) {
            res.status( 401).json({
                message: "Token not found"
            })
        }

        //verify access token
        jwt.verify( token, process.env.ACCESS_TOKEN_SECRET, ( err, user) => {
            if( err){
                res.status( 403).json({
                    status: "FAILED",
                    data: {
                        error: "Invalid access token"
                    }
                })
            } else{
                req.user = user
                next()
            }
        })
    } else{
        res.status( 401).json({
            status: "FAILED",
            data: {
                error: "Unauthorized"
            }
        })
    }
}