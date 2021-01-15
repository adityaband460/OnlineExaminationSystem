const express = require('express')
var router = express.Router()
var ObjectID = require('mongoose').Types.ObjectId

var AddQuestions = require('../models/addQuestions')


router.get('/', (req, res) => {
    AddQuestions.find((err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error while retrieving all records : ' + JSON.stringify(err, undefined, 2))
    })
})



router.post('/', async (req, res) => {
    var newRecord = new AddQuestions({
       
    id:req.body.id,
    question : req.body.question,
    a : req.body.a,
    b : req.body.b,
    c : req.body.c,
    d : req.body.d,
    ans : req.body.ans,
    })

    await newRecord.save((err, docs) => {
        if (!err) {res.send(docs)}
        else console.log('Error while creating new record : ' + JSON.stringify(err, undefined, 2))
    })
})

module.exports = router