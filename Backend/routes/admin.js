const express = require('express');
const router = express.Router();
const Administration = require('../models/Administration');
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'TeamExitC0de';
// ROUTE 1 :Create a Admin using POST:"/admin/addadmin". No login Required
router.post('/addadmin', [
    body('name', "Name length is minimus 5").isLength({ min: 5 }),
    body('password', "Password length is minimus 5").isLength({ min: 5 }),
    body('email').isEmail(),
], async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        let admin = await Administration.findOne({ email: req.body.email });
        if (admin) {
            return res.status(400).json({ success, error: "Sorry a admin with this email already exists" })
        }
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password,salt)
        admin = await Administration.create({
            name: req.body.name,
            password: secPass,
            email: req.body.email,
            post: req.body.post
        })

        const data = {
            admin: {
                id: admin.id
            }
        }
        const authtoken = jwt.sign(data,JWT_SECRET);
      success = true;
      res.json({success,authtoken})

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error")
    }

})


//ROUTE 2 :Authenticate a admin using POST:"/admin/login". No login Required
router.post('/login',[
    body('email','Enter Valid Email').isEmail(),
    body('password','Password can not be blank').exists()
],async (req,res)=>{
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {email,password,post} = req.body;
    try { 
        let admin = await Administration.findOne({email});
        if(!admin){
            return res.status(400).json({success,error:"Please try to login with correct credentials"})
        }

        const passwordCompare = await bcrypt.compare(password,admin.password);
        if(!passwordCompare){
            return res.status(400).json({success,error:"Please try to login with correct credentials"})
        }
        const data = {
            admin:{
                id:admin.id,
                post:admin.post 
            } 
        }
        const authtoken = jwt.sign(data,JWT_SECRET);
        success=true;
        if(post == admin.post){
            res.json({success,authtoken,post:admin.post})
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error") 
    }
   
})

module.exports = router;