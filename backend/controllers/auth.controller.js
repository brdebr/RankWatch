const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('../database/models/User')

exports.signup = async (req, res, next) => {
    const email = req.body.email
    const username = req.body.username
    const password = req.body.password

    if (!password || password.length === 0) {
        res.status(500).json({
            message: 'Something went wrong :/',
            errors: ['Password cant be blank or null']
        })
    }

    let hashedPw = await bcrypt.hash(password, 10)

    let newUser = new User({
        username: username,
        email: email,
        password: hashedPw
    })

    let result = await newUser.save()

    res.status(201).json({
        message: 'User created! :D',
        data: {
            user: {
                id: result.id,
                name: result.name
            }
        }
    })
}

exports.login = async (req, res, next) => {
    const email = req.body.email
    const password = req.body.password

    try {
        
        let user = await User.findOne({
            email: email
        })

        if(!user){
            res.json({
                message: 'Auth error :/',
            })
        }
        let matchPass = await bcrypt.compare(password, user.password)

        if (user && matchPass) {
            try {
                let token = jwt.sign({
                        id: user.id,
                        email: user.email,
                        username: user.username
                    },
                    "my-jwt-secret", {
                        expiresIn: '1h'
                    }
                )
                res.json({
                    message: 'Login Successfully! :D',
                    data: {
                        user: {
                            id: user.id,
                            username: user.username,
                            email: user.email
                        }
                    },
                    token
                })
            } catch (error) {
                console.log(error);
            }
        } else{
            res.json({
                message: 'Something didn\'t work :/',
                data: {
                    error: 'Failed authentication'
                },
            })
        }

    } catch (error) {
        console.log(error);
    }

}