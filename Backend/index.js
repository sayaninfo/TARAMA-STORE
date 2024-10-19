
import express from 'express';
import dotenv from "dotenv";
import mongoose from 'mongoose';
import cors from "cors"

import fashionRoute from "./route/fashion.route.js";
import userRoute from "./route/user.route.js";

const app = express()
app.use(cors());
app.use(express.json());

dotenv.config()

const port = process.env.PORT || 4000
const  MongoDBURI = process.env.MongoURI
console.log(MongoDBURI)

//connect to MongoDB;

try{
  mongoose.connect(MongoDBURI)
  console.log("Connected to MongoDB")
  } catch(error){ 
  console.log("Error :",error)
}

// defining routes

app.use('/fashion', fashionRoute)
app.use('/user', userRoute)

app.listen(port, () => {
  console.log(`Fashion Application listening on port ${port}`)
})