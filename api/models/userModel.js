import mongoose from "mongoose";
import pkg from 'validator'
import bcrypt from 'bcrypt'

const { isEmail } = pkg

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Not a valid Email']
    },
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [8, 'Minimum password length is 8']
    }
})

userSchema.pre('save',async function(next){
    //this keyword gives us the access to the req.body before it is saved to the db, as we will use it in pre hook and we can't use arrow func as they don't give us the pre hook
    console.log('user to be created')
    console.log(this)
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password,salt)
    next()
})

userSchema.post('save',(doc,next)=> {
    console.log('user created')
    console.log(doc),
    next()
})

userSchema.statics.login = async function(email, username, password){
    //this in this method refers to userModel
    const user = await this.findOne({ email })
    if(user){
        if(username === user.username){
            const isPasswordCorrect = await bcrypt.compare(password,user.password)
            if(isPasswordCorrect){
                return user
            }
            else
                throw Error('Wrong Password')
        }
        else
            throw Error('Incorrect Username')
    }
    else
        throw Error('Unregistered Email')
}

const UserModel = mongoose.model('user',userSchema)

export default UserModel;