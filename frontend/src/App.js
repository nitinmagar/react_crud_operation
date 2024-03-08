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

  // ulStyle={

  // };

 const liStyle={
    display: 'inline-block', padding: '9px'

  }



  return (

  
    <Router>
      
        <ul>
          <li style={liStyle}> 
            <Link to="/AddStudent">Add Students</Link>
          </li>
          <li style={liStyle}>
            <Link to="/StudentList">View Students</Link>
          </li>


        </ul>

      
      <Routes>
        <Route path="/AddStudent" element={<AddStudent />}></Route>
        <Route path="/StudentList" element={<StudentList />}></Route>
      </Routes>



    </Router>

  );
}

export default App;