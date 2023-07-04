const express=require('express');
const {signIn}=require("./controller");
const {signUp}=require("./controller");
const {todoList}=require("./controller");

const { CLSThresholds } = require('web-vitals');
const router=express.Router();


router.route('/SignIn').post(signIn)

router.route('/').post(signUp)

router.route('/Todo').post(todoList);


module.exports=router;
