import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Home from './pages/home/home';
import About from './pages/about/about';
import Specialities from './pages/specialities/specialities';
import OurDoctors from './pages/doctors/doctors';
import Patients from './pages/patientDashboard/patientDashboard';
import Doctors from './pages/doctorDashboard/doctorDashboard';
import Appointments from './components/appointments/appointments';
import Messages from './components/messages/messages';
import Reports from './components/reports/reports';
import History from './components/history/history';
import Chat from './components/chats/chat';
import Login from './pages/login/login'
import Signup from './pages/signup/signup'
import {useSelector} from 'react-redux'


function App() {
  const {user} = useSelector((state) => state.auth)

  return(
    <>
      <BrowserRouter>
      <Routes>
          <Route path="/"  exact Component={Home} />
          <Route path="/ourdoctors" Component={OurDoctors} />
          <Route path="/specialities" Component={Specialities} />
          <Route path="/aboutus" Component={About} />
          <Route path="/patients" Component={Patients} />
          <Route path="/doctors" Component={Doctors} />
          
          {user && user.role ==='patient' && (
            <Route path="/patients/appointments" Component={Appointments}/>
          )}
          {user && user.role === 'doctor' && (
            <Route path="/doctors/appointments" Component={Appointments}/>
          )}
          {user && user.role ==='patient' && (
            <Route path="/patients/messages" Component={Messages}/>
          )}
          {user && user.role === 'doctor' && (
            <Route path="/doctors/messages" Component={Messages}/>
          )}
          {user && user.role ==='patient' && (
            <Route path="/patients/chat" Component={Chat}/>
          )}
          {user && user.role === 'doctor' && (
            <Route path="/doctors/chat" Component={Chat}/>
          )}
          <Route path="/patients/reports" Component={Reports} />
          <Route path="/patients/history" Component={History} />
          <Route path="/login" Component={Login} />
          <Route path="/signup" Component={Signup} />
      </Routes>
    </BrowserRouter>
    <ToastContainer />
    </>
    
   
  );
}

export default App


