import React from 'react'
import './Main.css';
import { Link } from 'react-router-dom';


const BodyMain = ({naam}) => {
 
  return (

    <div className='boxy'>
           <div className="sidebar">
           <ul>
           <li style={{color:'yellow' ,fontSize:'25px' }}><i>Hello {naam} Explore it here</i></li>
            <br></br>
            <li>
          <Link to="/StopWatch">StopWatch</Link>
        </li>
        <li>
          <Link to="/Review">Customer review page</Link>
        </li>
        <li>
        <a href=" https://react-chat-app-1591e.web.app">Chat With Customer Care</a>
        </li>
        <li>
        <a href="http://localhost:3002/">About Body Movements</a>
        </li>
        <li>
          <Link to="/Todo">ToDo Plan List For Me</Link>
        </li>
        <li>
          <Link to="/Track">Nutrition-tracking-page</Link>
        </li>
        <li>
          <Link to="/Pre">Pre-Designed Plans</Link>
        </li>
       
        <li>
          <Link to="/Chl">Challenges-Page</Link>
        </li>
       
        

      </ul>
          </div>

          
  <div className="gallery">
    <div
      className="box_1"
      id="box1"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1502904550040-7534597429ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1100&q=80)"
      }}
    >
      2
    </div>
    <div
      className="box_1"
      style={{
        backgroundImage:
          "url(https://plus.unsplash.com/premium_photo-1684274186188-2a7abbd85b48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80)"
      }}
    >
      1
    </div>
    <div
      className="box_1"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)"
      }}
    >
      3
    </div>
    <div
      className="box_1"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1550345332-09e3ac987658?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80)"
      }}
    >
      4
    </div>
    <div
      className="box_1"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1594882645126-14020914d58d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=885&q=80)"
      }}
    >
      5
    </div>
    <div
      className="box_1"
      style={{
        backgroundImage:
          "url(https://plus.unsplash.com/premium_photo-1674420730676-8c47e2a404a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80)"
      }}
    >
      6
    </div>
    <div
      className="box_1"
      id="box7"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1486218119243-13883505764c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80)"
      }}
    >
      7
    </div>
  </div>
  <p
    style={{ fontSize: "120%",  fontWeight: "bold", position:'absolute',bottom:'36px'}}
  >
    <i>
      Fitness refers to the state of being physically fit and healthy. It
      encompasses various aspects such as cardiovascular
       endurance, muscular strength, flexibility, and body composition.
      Engaging in regular physical activity and maintaining a 
      balanced diet contribute to overall fitness. Fitness benefits the human
      body in numerous ways, including:
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia placeat tempora minima, deserunt accusamus at laborum vel, esse sed debitis pariatur cupiditate maxime.
    </i>
  </p>
  
  <div className="footer" >
               <h2>World-Health</h2>   
            <p>
              laboriosam repellendus magni exercitationem veniam excepturi adipisci inventore nobis placeat ut odio, libero fugit vel obcaecati cum et sed ea animi cupiditate rem. Nam quod enim exercitationem eaque suscipit quis repudiandae. Ipsa quisquam temporibus consectetur laboriosam aperiam eaque molestiae, dolor fugiat officia eum nemo deserunt quos qui id ratione.
                               </p>
               
          </div>


</div>

      

    
  )
}

export default BodyMain;

    