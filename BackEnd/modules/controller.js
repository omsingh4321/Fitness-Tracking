
const SignUp=require('../../modals/SignUp');
const TodoList=require('../../modals/TodoList');

const signIn=async(req,res)=>{
    const {name,email,password}=req.body;

    try{

        const check=await SignUp.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        console.log(e);
        res.json("notexist");
       
    }
};
const todoList=async(req,res)=>{
    const {date,head,desc}=req.body;
    const data={
        date:date,
        head:head,
        desc:desc
    }

    try{

        const check=await TodoList.findOne({head:head})
        const todos = await TodoList.find();
        if(check && head!=""){
            res.json(todos);
        }
        else if(head!=""){
            await TodoList.insertMany([data])
            res.json(todos);
        }
        else{
            res.json(todos);
        }


    }
    catch(e){
        console.log(e);
        res.json("notexist");
        
    }

};








const signUp=async(req,res)=>{
    const { name,dob,email,password}=req.body;
    const data={
        name:name,
        dob:dob,
        email:email,
        password:password
    }

    try{

        const check=await SignUp.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            
            await SignUp.insertMany([data])
            res.json("notexist")
        }


    }
    catch(e){
        console.log(e);
        res.json("Not exist");
        
    }
};



module.exports={
    signIn,
    signUp,
    todoList
}




