import React, { useState } from 'react';
import style from './SignIn.module.css';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
const SignIn = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history=useNavigate();

 async function submit(e){
  e.preventDefault();

      try{
         
        await axios.post("http://localhost:3000/omApi/SignIn",{
          name,email,password
        })
        .then(res=>{
          if(res.data=='exist'){
             history('/Home',{state:{id:name}})
          }
          else if(res.data=="notexist") {
            alert("User Not Registered");
          }
        })
        .catch(e=>{
          alert("Wrong");
          console.log(e);
        })

      }
      catch(e){
           console.log("error: "+e);
      }

 }



  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform sign in logic or API call here
    // You can access the input values using the state variables (name, email, password)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);

    // Reset the form
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={style.bdy}>
         <div className={style.signinContainer}>
      <h1>Sign In</h1>
      <form  action='POST'>
        <div className={style.formGroup}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{borderRadius:'50px',height:'4vh',width:'250px'}}
          />
        </div>
        <div className={style.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{borderRadius:'50px',height:'4vh',width:'250px'}}
            required
          />
        </div>
        <div className={style.formGroup}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{borderRadius:'50px',height:'4vh',width:'250px'}}
            required
          />
        </div>
        
        <button  className={style.buttn} type="submit" onClick={submit} >Sign In</button>
      </form>
      <Link to="/" style={{padding:'5px',margin:'5px',fontSize:'2.6vh',marginLeft:'55px',fontWeight:'bold'}}>Click here to register first</Link>
    </div>
    

    </div>
     );
};

export default SignIn;
