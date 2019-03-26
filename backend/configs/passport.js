const JwtStrategy = require('passport-jwt').Strategy
const ExtractJWT = require('passport-jwt').ExtractJwt
const moment = require('moment')
const User = require('../database/models/User')

const opts = {}
opts.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken()
opts.secretOrKey = process.env.JWT_SECRET || "my-jwt-secret"

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, async (payload, done) => {

        try {

            let dbUser = await User.findOne({
                email: payload.email
            });

            let exp = moment.unix(payload.exp)
            let iat = moment.unix(payload.iat)

            let tokenInfo = {
                user: {
                    id: dbUser._id,
                    username: dbUser.username,
                    email: dbUser.email
                },
                tokenMeta: {
                    iat: iat.unix(),
                    iatHuman: iat.format('DD/MM/YYYY - HH:mm:ss'),
                    exp: exp.unix(),
                    expHuman: exp.format('DD/MM/YYYY - HH:mm:ss'),
                    diffToExp: moment.duration(exp.diff(moment()), 'ms').asSeconds(),
                    diffToExpHuman: exp.fromNow()
                }
                
            }

            console.log(tokenInfo);

            return done(null, tokenInfo)

        } catch (error) {
            console.log(error);
        }

        return done(null, false)
    })
  )
}