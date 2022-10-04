import jwt from 'jsonwebtoken'

const authCheck = (req,res,next) => {
    const token = req.cookies.jwt
    if(token){
        jwt.verify(token,'lakshit secret key',(err,decodedToken)=>{
            if(err){
                console.log(err.message)
                // res.redirect('/login')
                res.json({redirect: '/login'})
            }
            else{
                console.log('decoded token : '+decodedToken)
                next()
            }
        })
    }
    else
        res.json({redirect: '/login'})
        // res.redirect('/login')
}

export default authCheck