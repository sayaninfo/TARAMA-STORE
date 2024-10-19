import mongoose from "mongoose";

const fashionSchema=mongoose.Schema({ 
    name: String,
    tiltle: String,
    price:Number,
    catagory:String,
    image: String,
   
})

const Fashion=mongoose.model('fashion',fashionSchema);

export default Fashion;