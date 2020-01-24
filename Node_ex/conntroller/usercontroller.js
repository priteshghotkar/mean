const express=require('express');
const mongose=require('mongoose');
const Usermodel=require('../models/userModel');
const router=express.Router();

router.post('/save',(req,resp)=>{
    if(req)
    {
        console.log(req.body);
        const user=new Usermodel(req.body);
        user.save();
        resp.sendStatus(200);
    }


})
module.exports=router;