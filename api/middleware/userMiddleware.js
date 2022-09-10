import jwt from 'jsonwebtoken'
import UserModel from '../models/userModel.js'

const userCheck = (req,res,next) => {
    const token = req.cookies.jwt

    if(token){
        jwt.verify(token,'lakshit secret key',async(err,decodedToken)=>{
            if(err){
                res.locals.user = null
                next()
            }
            else{
                const user = UserModel.findById(decodedToken.id)
                res.locals.user = user
                next()
            }
        })
    }
    else{
        res.locals.user = null
        next()
    }
}

export default userCheck