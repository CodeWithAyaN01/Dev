import jwt from 'jsonwebtoken'

export const authenticationMiddleware = async function(req, res, next) {
    try {
        const tokenHeader = req.headers['authorization']
        if(!tokenHeader) {
            return next()
        }
        if(!tokenHeader.startsWith('Bearer')) {
            return res.status(400).json({ error: `Start with bearer` })
        }
        const token = tokenHeader.split(' ')[1]

        // decode the token
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decode
        next()
    } catch (error) {
        next()
    }
}

export const ensureAuthentication = async function(req, res, next) {
    if(!req.user) {
        return res.json({error: `You must be authenticated`})
    }
    next()
}