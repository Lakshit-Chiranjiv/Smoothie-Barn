import UserModel from "../models/userModel.js"

const handleErrors = (error) => {
    let errors = {
        email: '',
        username: '',
        password: ''
    }

    const { message,code } = error

    if(code === 11000){
        if(error.keyPattern.email){
            errors.email = 'Already registered email'
            return errors
        }
        if(error.keyPattern.username){
            errors.username = 'Already registered username'
            return errors
        }
    }

    if(message.includes('user validation failed')){
        Object.values(error.errors).forEach(({properties})=>{
            errors[properties.path] = properties.message
        })
    }

    return errors
}

export const getSignupPage = (req,res) => {

}

export const getLoginPage = (req,res) => {

}

export const signupUser = async(req,res) => {
    const { email,username,password } = req.body

    try {
        const user = await UserModel.create({
            email,username,password
        })
        res.status(201).json(user)
    } catch (error) {
        const errorsObj = handleErrors(error)
        res.status(400).json(errorsObj)
    }
}

export const loginUser = (req,res) => {

}

export const logoutUser = (req,res) => {

}
