const express=require('express');
const userdModel=require('../models/userModel');
const router=express.Router();

router.post('/save',(req,resp)=>{
    if(req.length)
    {
        console.log(req.body);
        const user=new userdModel(req.body);
        user.save();
        resp.sendStatus(200);
    }else{
        resp.sendStatus(404).send("Bad request");
    }


});

router.post('/getbyemail',async (req,resp)=>{
  try{
    const users = await userdModel.find({"email":req.body.email})
        resp.send(users);
  }catch(e)
  {
      resp.send(500);
  }
   

});
module.exports=router;