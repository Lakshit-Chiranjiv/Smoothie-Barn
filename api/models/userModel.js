import mongoose from "mongoose";
import pkg from 'validator'

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

const UserModel = mongoose.model('user',userSchema)

export default UserModel;