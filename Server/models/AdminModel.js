const mongoose = require('mongoose')

var AdminModel = mongoose.model('AdminModel',
{
    Name: {type:String},
    Email: {type: String},
    Phone: {type:String},
    Password: {type:String},
    Org: {type:String},
    NameOrg: {type:String}
},'Admin')

module.exports = { AdminModel}