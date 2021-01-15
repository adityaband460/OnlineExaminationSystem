const express = require('express')
var router = express.Router()
var ObjectID = require('mongoose').Types.ObjectId


var { PostSubjects } = require('../models/postSubjects')

//to get all objects
router.get('/', (req, res) => {
    PostSubjects.find((err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error while retrieving all records : ' + JSON.stringify(err, undefined, 2))
    })
})
// to get specific obj get questions arrays
router.get('/:id', (req, res) => {
    
    PostSubjects.findById(req.params.id,(err, docs) => {
        if (!err) res.send(docs.Questions)
        else console.log('Error while retrieving all records : ' + JSON.stringify(err, undefined, 2))
    })
})

//to add new object
router.post('/', (req, res) => {
    var newRecord = new PostSubjects({
        Name: req.body.Name,
        Description: req.body.Description,
        Questions: req.body.Questions
    })

    newRecord.save((err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error while creating new record : ' + JSON.stringify(err, undefined, 2))
    })
})
//updates based on id
router.put('/:id', (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('No record with given id : ' + req.params.id)

    var updatedRecord = {
        Name: req.body.Name,
        Description: req.body.Description,
        Questions:req.body.Questions1
    }
//postsubjects is model
        PostSubjects.findByIdAndUpdate({_id:req.params.id},req.body).then(()=>{
            PostSubjects.findOne({_id:req.params.id}).then((sub)=>{
                res.send(sub)
            })
        })

    // PostSubjects.findByIdAndUpdate(req.params.id, { $set: updatedRecord },{new:true}, (err, docs) => {
    //     if (!err) res.send(docs)
    //     else console.log('Error while updating a record : ' + JSON.stringify(err, undefined, 2))
    // })
})

router.delete('/:id', (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('No record with given id : ' + req.params.id)

    PostSubjects.findByIdAndRemove(req.params.id, (err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error while deleting a record : ' + JSON.stringify(err, undefined, 2))
    })
})

module.exports = router