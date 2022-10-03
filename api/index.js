import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv'
import authRoutes from './routes/authRoutes.js'
import smoothieRoutes from './routes/smoothieRoutes.js'
import cookieParser from 'cookie-parser'
import authCheck from "./middleware/authMiddleware.js";
import userCheck from "./middleware/userMiddleware.js";

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
app.use(cookieParser())

app.get('*',userCheck)
app.get('/',(req,res)=>{
    res.send('smoothie barn api')
})

app.use('/',authRoutes)
app.use('/',authCheck,smoothieRoutes)



