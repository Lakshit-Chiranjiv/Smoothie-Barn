import express from 'express'
import { signupUser,loginUser,logoutUser } from './../controllers/authControllers.js'

const router = express.Router()

//sign up new user
router.post('/signup',signupUser)

//login existing user
router.post('/login',loginUser)

//log out existing user
router.get('/logout',logoutUser)

export default router