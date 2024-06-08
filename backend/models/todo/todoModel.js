const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title : {
    type : String,
    required : true
  },
  description : {
    type : String,
    required : true
  },
  // date : {
  //   type : Date,
  //   default : new Date
  // },
  // isComplete : {
  //   type : Boolean,
  //   default : false
  // },
},{
  timestamps : true,
})

module.exports = mongoose.model('Todo', todoSchema);