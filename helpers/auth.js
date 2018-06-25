module.exports = {
    gateKeep : (req , res, next) => {

        /* Some auth logic */

        if(req.headers['x-access-token'] === '420blazeIt') {
            next()
        } else {
            res.status(401).json({
                message : "YOU SHALL NOT PASS!"
            })
        }
    }
}