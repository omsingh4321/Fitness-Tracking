import React, { useState,useEffect } from 'react';
import axios from 'axios';
const Todo = () => {
  const [tasks, setTasks] = useState([]);

  const [date, setDate] = useState('');
  const [head, setHead] = useState("");
  const [desc, setDesc] = useState('');

  useEffect(() => {

    submit();
    
  }, []);






  const handleSubmit = (e) => {
    e.preventDefault();
   
    submit(e);
    
    setDate('');
    setHead('');
    setDesc('');
  };

  async function submit(){
    
  
        try{
           
          await axios.post("http://localhost:3000/omApi/Todo",{
            date,
            head,
            desc
            
          })
          .then(res=>{
              if(res.data==='exist')
              {
                alert("Oh! Somethiing wrong happen");
                
              }
              else{
                setTasks(res.data);
                console.log(tasks);
              }
            
           
          })
          .catch(e=>{
            alert("Something Wrong happens");
            console.log(e);
          })
  
        }
        catch(e){
             console.log("error: "+e);
        }
      }
    

  return (
    <div  style={{ backgroundImage: "linear-gradient(to bottom, #f2e6ff, #ccffee)", position: 'fixed', top: 0, right: 0, bottom: 0, left: 0}}>
      <h1 style={{ color: 'blueviolet', fontSize: '60px',position:'relative' ,left:'38%' }}>Daily Tasks</h1>
      <br />
      <div style={{ display: 'flex', alignItems: 'center' }}>
  <label htmlFor="date" style={{fontSize:'20px',fontStyle:'italic',fontWeight:'bold'}}>Select Date </label>
  <input type="date" name="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} 
  style={{border:'2px solid black',borderRadius:'50px',margin:'10px',height:'5vh',width:'18vh'}} />


<div style={{ display: 'flex', alignItems: 'center' }}>
  <label htmlFor="name" style={{fontSize:'20px',fontStyle:'italic',fontWeight:'bold'}}>Task heading</label>
  <input type="text" name="name" id="name" value={head} onChange={(e) => setHead(e.target.value)}
   style={{border:'2px solid black',borderRadius:'50px',margin:'10px',height:'5vh',width:'18vh',padding:'5px'}} />

<div style={{ display: 'flex', alignItems: 'center' }}>
  <label htmlFor="description" style={{fontSize:'20px',fontStyle:'italic',fontWeight:'bold'}}>Task description</label>
  <textarea type="text" name="description" id="description" value={desc} onChange={(e) => setDesc(e.target.value)}
   style={{border:'2px solid black',borderRadius:'10px',margin:'5px',padding:'10px',height:'10vh',width:'40vh'}} />


<button type="submit" onClick={handleSubmit} style={{backgroundColor:'#cc99ff',color:'#39004d',padding:'5px',marginLeft:'6vh'}}>Add task</button></div></div></div>
<br></br><br></br><br></br>


      <div className="taskList">
        <h4 style={{ fontSize: '30px',margin:'5px' }}>Your task list</h4>
        <table className="tasks" style={{border:'4px solid black',}} border="">
          <thead>
            <tr>
              <th style={{ width: '8%' }} align="center">Index</th>
              <th style={{ width: '12%' }} align="center">Date</th>
              <th style={{ width: '20%' }} align="center">Task name</th>
              <th style={{ width: '60%' }} align="center">Task Description</th>
            </tr>
          </thead>
          <tbody style={{fontWeight:'bold'}}>
          {tasks.map((task,i) => (
               <tr>
                  <td style={{backgroundColor:'#ccffff'}}>{i+1}</td>
                  <td style={{backgroundColor:' #ffb3cc'}}>{task.date}</td>
                  <td style={{backgroundColor:'#ffffe6'}}>{task.head}</td>
                  <td style={{backgroundColor:'#f5f5f0'}}>{task.desc}</td>
                             </tr>
                             ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Todo;
