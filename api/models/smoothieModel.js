import mongoose from "mongoose";

const smoothieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Smoothie name is required'],
        unique: true,
    },
    steps: {
        type: [String],
    },
    price: {
        type: Number,
        min: [0, 'price can\'t be lower than zero']
    },
    createdBy: {
        type: String,
        required: [true, 'Must provide the creator username']
    }
},{timestamps: true})

const SmoothieModel = mongoose.model('smoothie',smoothieSchema)

export default SmoothieModel;