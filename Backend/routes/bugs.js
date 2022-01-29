const express = require('express');
const router = express.Router();
const Bug = require('../models/Bug');
const { body , validationResult } = require("express-validator");

router.post('/addbug',[
    body('name',"Name length is minimus 5").isLength({ min: 5 }),
    body('description',"Description length must be 10 Character").isLength({ min: 5 }),
],async(req,res)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    try {
        let bug = await Bug.findOne({name:req.body.name});
    if(bug){
        return res.status(400).json({error:"Sorry a user with this email already exists"})
    }

    bug = await Bug.create({
        name: req.body.name,
        type: req.body.type,
        status: req.body.status,
        description: req.body.description,
      })

      const data = {
        bug:{
            id:bug.id
        }
    }

    res.json({data});

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error") 
  }

})

module.exports = router;