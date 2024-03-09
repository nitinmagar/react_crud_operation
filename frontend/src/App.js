import React  from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import AddStudent from './components/AddStudent';
import StudentList from './components/StudentList'


function App() {



 const liStyle={
    display: 'inline-block', 
    padding: '9px',
    
    

  }
  

  return (

  
    <Router>
      <div className='navbar'>
        <ul>
          <li style={liStyle}> 
            <Link to="/AddStudent" style={{color:'white'}}>Add Students</Link>
          </li>
          <li style={liStyle}>
            <Link to="/StudentList" style={{color:'white'}} >View Students</Link>
          </li>


        </ul>
        </div><br></br>

      
      <Routes>
        <Route path="/AddStudent" element={<AddStudent />}></Route>
        <Route path="/StudentList" element={<StudentList />}></Route>
      </Routes>



    </Router>

  );
}

export default App;
