import jwt from 'jsonwebtoken'

const authCheck = (req,res,next) => {
    const { authorization } = req.headers

    if(!authorization)
        return res.status(401).json({ error: 'Authorization token is required' })

    const token = authorization.split(' ')[1]
    if(token){
        jwt.verify(token,'lakshit secret key',(err,decodedToken)=>{
            if(err){
                console.log(err.message)
                res.json({ error: 'Unauthorized Request', redirect: '/login' })
            }
            else{
                console.log('decoded token : '+decodedToken)
                next()
            }
        })
    }
    else
        res.json({redirect: '/login'})
}

export default authCheck