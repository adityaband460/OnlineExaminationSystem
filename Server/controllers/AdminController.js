const express = require('express')
var router = express.Router()
var ObjectID = require('mongoose').Types.ObjectId
const bcrypt=require('bcryptjs')

var { AdminModel } = require('../models/AdminModel')


router.get('/', (req, res) => {
    AdminModel.find((err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error while retrieving all records : ' + JSON.stringify(err, undefined, 2))
    })
})


router.post('/', (req, res) => {
    const{Email,Password}=req.body
    AdminModel.findOne({Email:Email})
    .then((savedAdmin)=>{
        if(savedAdmin){
            res.json({message:"admin already exists"})
            //return res.status(422).json({message:"Admin already exists with this email "})
        }
            bcrypt.hash(Password,12)
            .then(hashedPassword=>{
                var newRecord = new AdminModel({
                    Name: req.body.Name,
                    Email: req.body.Email,
                    Phone: req.body.Phone,
                    Password:hashedPassword,
                    Org: req.body.Org,
                    NameOrg: req.body.NameOrg
                    })
        
                    newRecord.save().then(
                        newRecord=>{
                            res.json({message:"saved successfully"})
        
                        })
                        .catch(err=>{
                            console.log(err)
                        })

            })
           
            
    })
    .catch(err=>{
        console.log(err)
    })
})

router.post('/login', (req, res) => {
    const{Email,Password}=req.body
    AdminModel.findOne({Email:Email})
    .then(savedAdmin=>{
        if(!savedAdmin){
             res.json({message:"Invalid Email or Password!"})
             
        }
        bcrypt.compare(Password,savedAdmin.Password)
        .then(doMatch=>{
            if(doMatch){
               res.json({message:"Login successfully!"}) 

            }
            else{
                 res.json({message:"Invalid Email or Password!"})
                
            }
        })
        .catch(err=>{
            console.log(err)
        })
    })
    
});



module.exports = router