const mongoose = require('mongoose')

var PostSubjects = mongoose.model('PostSubjects',
{
    Name : {type:String},
    Description : {type:String},
    Questions :{type:Array}
},'Subjects')

module.exports = { PostSubjects}