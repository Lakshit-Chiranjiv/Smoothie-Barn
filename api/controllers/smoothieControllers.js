import SmoothieModel from "../models/smoothieModel.js"
import UserModel from "../models/userModel.js"

//also send res.locals.user from all the get requests

export const getAllSmoothies = async(req,res) => {
    try {
        const smoothies = await SmoothieModel.find().sort({ createdAt: -1 })
        if(!smoothies) throw Error('could not get smoothies');
        const user = res.locals.user
        const sendRes = {
            smoothies: smoothies,
            user: user
        }
        res.status(200).json(sendRes)
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

export const getAllUserSmoothies = async(req,res) => {
    const { userid } = req.params;
    try {
        const userFromDb = await UserModel.findById(userid);
        const smoothies = await SmoothieModel.find();
        if(!smoothies) throw Error('could not get smoothies');
        const userSmoothies = smoothies.filter((sm) => sm.createdBy === userFromDb.username)
        const user = res.locals.user
        const sendRes = {
            userSmoothies: userSmoothies,
            user: user
        }
        res.status(200).json(sendRes);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

export const getSingleSmoothie = async(req,res) => {
    const { id } = req.params;
    try {
        const smoothie = await SmoothieModel.findById(id);
        if(!smoothie) throw Error('could not find pokemon');
        const user = res.locals.user
        const sendRes = {
            smoothie: smoothie,
            user: user
        }
        res.status(200).json(sendRes);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

export const addSmoothie = async(req,res) => {
    const { username } = req.params
    const { name,steps,price } = req.body

    const user = await UserModel.findOne({ username })

    if(user){
        const addObj = {
            name,
            steps,
            price,
            createdBy: username
        }
    
        try {
            const smoothie = new SmoothieModel(addObj)
            const result = await smoothie.save()
            res.status(201).json(result)
        } catch (error) {
            res.status(400).json({message: "Could not add Smoothie"})
        }
    }
    else{
        res.status(400).json({message: "No such user with username"})
    }


}

export const deleteSmoothie = async(req,res) => {
    const { id } = req.params;

    try {
        await SmoothieModel.findByIdAndDelete(id);
        res.json({redirectUrl: '/'})
    } catch (error) {
        res.json({message: "Could not delete smoothie"})
    }
}
