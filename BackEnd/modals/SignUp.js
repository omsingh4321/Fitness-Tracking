const mongoose=require('mongoose');
const { Schema } = mongoose;

const SignUpSchema = new Schema({
  name: String, // String is shorthand for {type: String}
  dob: String,
  email: String,
  password: String

});

const SignUp = mongoose.model('SignUp', SignUpSchema);

module.exports=SignUp
