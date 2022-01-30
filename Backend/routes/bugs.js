const express = require('express');
const router = express.Router();
const Bug = require('../models/Bug');
const { body , validationResult } = require("express-validator");


// ROUTE 1 :Get all the BUgs GET:"/bugs/fetchallnotes". login Required
router.get('/fetchallbugs',  async (req, res) => {
    try {
            const bugs = await Bug.find();
            res.json(bugs)
    } catch (error) {
            console.error(error.message); 
            res.status(500).send("Internal Server Error")
    }
})

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
        return res.status(400).json({error:"Sorry a bug with this name already exists"})
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


// ROUTE 3 :Update an existing bug using  put:"/bug/findbug". login Required

router.put('/findbug/:id', async (req, res) => {
    const { name, description, type } = req.body;
    try {

            // // create new Object
            // const newBug = {};
            // if (name) { newBug.name = name };
            // if (description) { newBug.description = description };
            // if (type) { newBug.type = type };

            // //find the note to be update and update it
            let bug = await Bug.findById(req.params.id);
            if (!bug) { return res.status(404).send('Not Found') }


            // bug = await Bug.findByIdAndUpdate(req.params.id, { $set: newBug }, { new: true })
            res.json({ bug })
    } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error")
    }

})

module.exports = router;