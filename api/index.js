import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv'
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

app.get('/',(req,res)=>{
    res.send("<h1>Hello from Smoothies API</h1><h3><a href='/pokemon'>Head here!!</a></h3>");
})
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// app.use('/pokemon',pokemonRouter);



