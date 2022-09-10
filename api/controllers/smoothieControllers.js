import SmoothieModel from "../models/smoothieModel.js"

//also send res.locals.user from all the get requests

export const getAllSmoothies = async(req,res) => {
    try {
        const smoothies = await SmoothieModel.find().sort({ createdAt: -1 })
        const user = res.locals.user
        const sendRes = {
            smoothies: smoothies,
            user: user
        }
        res.status(200).json(sendRes)
    } catch (error) {
        console.log("Could not fetch all smoothies",error)
    }
}

export const getAllUserSmoothies = (req,res) => {

}

export const getSingleSmoothie = (req,res) => {

}

export const addSmoothie = (req,res) => {

}

export const deleteSmoothie = (req,res) => {

}
