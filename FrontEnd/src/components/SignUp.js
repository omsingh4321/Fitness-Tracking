import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './SignUp.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [dob, setDob] = useState('');
  const [height, setHeight] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const history=useNavigate();

    const passw = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
    const dateOfBirth = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/((19|20)\d\d)$/;
    const hyt = /^(10(\.0+)?|([0-9](\.[0-9]+)?))$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    async function submit(){
      
    
          try{
             
            await axios.post("http://localhost:3000/omApi/",{
              fullName,dob,email,password
            })
            .then(res=>{
              if(res.data=='exist'){
                alert("User already Registered");
              }
              else if(res.data=="notexist") {
                history('/Home',{state:{id:fullName}})
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
     
      let flag1 = false;
      let flag2 = false;
      let flag3 = false;
      let flag4=false;
  
      const isValidPassword = passw.test(password);
      if (password !== confirmPassword || !isValidPassword) {
        flag1 = false;
        document.getElementById('Password').classList.add(styles.errorInput);
        document.getElementById('Password1').classList.add(styles.errorInput);
        setTimeout(() => {
          document.getElementById('Password').classList.remove(styles.errorInput);
          document.getElementById('Password1').classList.remove(styles.errorInput);
  
        }, 2000);
        

      } else {
        flag1 = true;
       
      }
      const isValidEmail = emailRegex.test(email);
      if(!isValidEmail)
      {
        flag4=false;
        document.getElementById('Mail').classList.add(styles.errorInput);
        setTimeout(() => {
          document.getElementById('Mail').classList.remove(styles.errorInput);
        }, 2000);
      }
      else {
        flag4=true;
       
      }

      const isValidDob = dateOfBirth.test(dob);
      if (!isValidDob) {
        flag2 = false;
        document.getElementById('DOB').classList.add(styles.errorInput);
        setTimeout(() => {
          document.getElementById('DOB').classList.remove(styles.errorInput);
        }, 2000);
        
      } else {
        flag2 = true;
      
      }
  
      const isValidHeight = hyt.test(height);
      if (!isValidHeight) {
        flag3 = false;
        document.getElementById('height').classList.add(styles.errorInput);
        setTimeout(() => {
          document.getElementById('height').classList.remove(styles.errorInput);
        }, 2000);
        
      } else {
        flag3 = true;
        
      }
  
      if (flag1 && flag2 && flag3 && flag4) {
        // Perform necessary action or redirect
           submit();
           
      }
    }

   
    

  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h1>User Registration</h1>
          <p>It will take 30 seconds</p>
        </div>
        <div className={styles.main}>
          <form  onSubmit={handleSubmit} className={styles.form} method='POST'>
            <p style={{ color: 'white' }}>Full name</p>
            <input
              type="text"
              className={styles.textBox}
              placeholder="Om Singh"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              id="naam"
            />
            <br />
            <br/>

            <p style={{ color: 'white' }}>DOB</p>
            <input
              type="text"
              
              className={styles.textBox}
              placeholder="DD/MM/YYYY"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              id="DOB"
            />
            <br />
            <br/>

            <p style={{ color: 'white' }}>Height</p>
            <input
              type="text"
              className={styles.textBox}
              id="height"
              placeholder="in foots"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
            <br />
            <br />

            <p style={{ color: 'white' }}>Email</p>
            
            <input
              type="text"
              className={styles.textBox}
              id="Mail"
              placeholder="om43singh21@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />

            <p style={{ color: 'white' }}>Password</p>
            <input
              type="password"
              className={styles.textBox}
              id="Password"
              placeholder="Minimum 8 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />

            <p style={{ color: 'white' }}>Confirm Password</p>
            <input
              type="password"
              className={styles.textBox}
              id="Password1"
              placeholder="Minimum 8 characters"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <br />
            <br />

            <div className={styles.adjust}>
              
              <p>Gender</p>
              
              <input type="radio" name="one" /> Male
              <input type="radio" name="one" /> Female
              <input type="radio" name="one" /> Other
              <br />
              
              <button className={styles.submit} type="submit">Submit</button>
              <Link to="/SignIn" style={{position:'absolute',left:'24vh',top:'90vh',fontSize:'17px',color:'white'}}><strong>Click Here To Login</strong></Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
