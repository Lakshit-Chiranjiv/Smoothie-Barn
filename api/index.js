import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv'
import authRoutes from './routes/authRoutes.js'
import smoothieRoutes from './routes/smoothieRoutes.js'
import SmoothieModel from "./models/smoothieModel.js";

const app = express();

dotenv.config()

app.use(cors());

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log("Connected to database")
    app.listen(8000,()=>{console.log("server running on port 8000")});
})
.catch((err) => {console.log(err)});

const db = mongoose.connection;

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('smoothie barn api')
})

app.use('/smoothiebarn',authRoutes)
app.use('/smoothiebarn',smoothieRoutes)



