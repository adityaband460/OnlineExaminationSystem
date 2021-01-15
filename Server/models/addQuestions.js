const mongoose = require('mongoose')
var AddQuestionsSchema = mongoose.Schema(
{
    id:{type:Number},
    question : {type:String},
    a : {type:String},
    b : {type:String},
    c : {type:String},
    d : {type:String},
    ans : {type:String},
})

module.exports = mongoose.model("AddQuestions",AddQuestionsSchema,"Questions")//last parmeter is collection name