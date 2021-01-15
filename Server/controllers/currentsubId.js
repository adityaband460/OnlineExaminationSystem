const express = require('express')
var router = express.Router()
var ObjectID = require('mongoose').Types.ObjectId


var  CurrentId  = require('../models/currentSub')
router.get('/', (req, res) => {
    
    CurrentId.find((err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error while retrieving all records : ' + JSON.stringify(err, undefined, 2))
    })
})
router.put('/', (req, res) => {
    var newRecord = new CurrentId({
        id:"new"
    })
    newRecord.save((err,docs)=>{})
    CurrentId.updateOne({},req.body).then(()=>{
       res.send(req.body)
    })

})
module.exports = router
