import Fashion from "../model/fashion.model.js"

export const getfashion=async (req,res)=>{
    try{
        const fashion=await Fashion.find()
        res.status(200).json(fashion) 
    }catch(error){
        console.log("Error",error)
        res.status(500).json(error)
    }
}