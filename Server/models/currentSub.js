const mongoose = require('mongoose')
var CurrentIdSchema = mongoose.Schema(
{
    id:{type:String},
   
})

module.exports = mongoose.model("CurrentId", CurrentIdSchema,"CurrentId")