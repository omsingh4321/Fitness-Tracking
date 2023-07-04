const mongoose=require('mongoose');
const { Schema } = mongoose;

const TodoListSchema = new Schema({
  date: String, // String is shorthand for {type: String}
  head: String,
  desc: String,

});

const TodoList = mongoose.model('TodoList', TodoListSchema);

module.exports=TodoList