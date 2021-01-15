const express = require('express')
var router = express.Router()
var ObjectID = require('mongoose').Types.ObjectId
const bcrypt=require('bcryptjs')

var { StudentModel } = require('../models/studentModel')


router.get('/', (req, res) => {
   StudentModel.find((err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error while retrieving all records : ' + JSON.stringify(err, undefined, 2))
    })
})


router.post('/', (req, res) => {
    const{Email,Password}=req.body
   StudentModel.findOne({Email:Email})
    .then((savedAdmin)=>{
        if(savedAdmin){
            res.json({message:"Student already exists with this email "})
        }
            bcrypt.hash(Password,12)
            .then(hashedPassword=>{
                var newRecord = StudentModel({
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
   StudentModel.findOne({Email:Email})
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
//delete api
router.delete('/:id', (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('No record with given id : ' + req.params.id)

       StudentModel.findByIdAndRemove(req.params.id, (err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error while deleting a record : ' + JSON.stringify(err, undefined, 2))
    })
})


module.exports = router