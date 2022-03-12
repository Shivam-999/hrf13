import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Form from './Components/Form';
import EmpCalendar from './Components/EmpCalendar';
import TaskMan from './Components/TaskMan';
import EmpSideNav from './Components/EmpSideNav';
import Offboarding from './Components/Offboarding';
import ReimbForm from './Components/ReimbForm';
import Home from './Components/Home';
import AdminDash from './Components/AdminDash';
import AdminEmp from './Components/AdminEmp';
import EmpAttendance from './Components/EmpAttendance';
import Passwordreset from './Components/Passwordreset';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  
  
    <Router>

      <Routes>
        <Fragment>
        <Route path="/timeemp" element={<EmpAttendance/>}/>
        <Route path="/" element={<EmpSideNav/>}/>
        <Route path="/offboarding" element={<Offboarding/>}/>
        <Route path="/calendar" element={<EmpCalendar/>}/>
        <Route path="/taskman" element={<TaskMan/>}/>
        <Route path="/form" element={<Form/>}/>
        <Route path="/reimbform" element={<ReimbForm/>}/>
        <Route path="/admin" element={<AdminDash/>}/>
        <Route path="/adminmanage" element={<AdminEmp/>}/>
        <Route path="/passwordreset" element={<Passwordreset/>}/>
        <Route path="/home" element={<Home/>}/>

         
          </Fragment>
      </Routes>

    </Router>,

  document.getElementById('root')
);
