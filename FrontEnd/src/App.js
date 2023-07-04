
import './App.css';
import MainNavbar  from './components/MainNavbar';
import { useLocation } from 'react-router-dom';
import BodyMain from './components/BodyMain';

function App() {
  const location=useLocation()
  return (
   <div style={{backgroundColor:'#c2c49f'}}>
   
   <MainNavbar></MainNavbar>
  <BodyMain naam={location.state.id}></BodyMain>

   </div>
  );
}

export default App;
