const express = require("express");
const { StokeModel } = require("../models/stok");
const StokeRouter = express.Router();


// StokeRouter.get("/",async(req,res)=>{
//     try {
//        return res.status(200).json({msg:"Welcome To StokeRouter"})  
//     } catch (error) {
//         return res.status(400).json({msg:"Internal Error"});
//     }
// });

StokeRouter.get("/",async(req,res)=>{
    try {
     const data = await StokeModel.find();
     res.status(200).send({"data":data});
    } catch (error) {
        res.status(200).send({"msg":error})

    }
})

// Here is Route
module.exports = {
    StokeRouter
}