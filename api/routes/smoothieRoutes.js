import express from 'express'

const router = express.Router()

//get all smoothies
router.get('/smoothies',()=>{})

//get all smoothies for respective user by id
router.get('/:userid/smoothies',()=>{})

//add new smoothie
router.post('/addsmoothie',()=>{})

//get single smoothie data
router.get('/smoothie/:id',()=>{})

//delete smoothie
router.delete('/delete/:id',()=>{})

export default router