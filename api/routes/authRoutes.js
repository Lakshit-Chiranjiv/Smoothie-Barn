import express from 'express'

const router = express.Router()

//sign up page
router.get('/signup',()=>{})

//login page
router.get('/login',()=>{})

//sign up new user
router.post('/signup',()=>{})

//login existing user
router.post('/login',()=>{})

//log out existing user
router.get('/logout',()=>{})

export default router