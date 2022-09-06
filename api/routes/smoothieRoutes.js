import express from 'express'
import { addSmoothie, deleteSmoothie, getAllSmoothies, getAllUserSmoothies, getSingleSmoothie } from '../controllers/smoothieControllers'

const router = express.Router()

//get all smoothies
router.get('/smoothies',getAllSmoothies)

//get all smoothies for respective user by id
router.get('/:userid/smoothies',getAllUserSmoothies)

//add new smoothie
router.post('/addsmoothie',addSmoothie)

//get single smoothie data
router.get('/smoothie/:id',getSingleSmoothie)

//delete smoothie
router.delete('/delete/:id',deleteSmoothie)

export default router