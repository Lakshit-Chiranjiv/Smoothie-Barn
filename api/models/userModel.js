import mongoose from "mongoose";
import { isEmail } from 'validator'

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'Email should be unique'],
        lowercase: [true, 'Email should be in lowercase'],
        validate: [isEmail, 'Not a valid Email']
    },
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: [true, 'Username should be unique'],
        lowercase: [true, 'Username should be in lowercase']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [8, 'Minimum password length is 8']
    }
})

const UserModel = mongoose.model('user',userSchema)

export default UserModel;