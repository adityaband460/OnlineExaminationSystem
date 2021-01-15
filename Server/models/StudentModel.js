const mongoose = require('mongoose')

var StudentModel = mongoose.model('StudentModel',
{
    Name: {type:String},
    Email: {type: String},
    Phone: {type:String},
    Password: {type:String},
    Org: {type:String},
    NameOrg: {type:String}
},'Student')

module.exports = { StudentModel}