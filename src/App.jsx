import React, { useEffect } from 'react'
import Home from './Pages/Home/Home';
import { Routes,Route, useNavigate } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Player from './Pages/Player/Player';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase';
//import React from 'react';
import { ToastContainer} from 'react-toastify';

const App = () => {

  const navigate =useNavigate();

useEffect(()=>{
      onAuthStateChanged(auth,async(user)=>{
        if(user){
          navigate('/')
          console.log("Logged in");
        }
        else{
          console.log("Logged out");
          navigate('/login');
        }
      })
},[])


  return (
    <div>
      <ToastContainer theme='dark'/>
       <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/Player/:id' element={<Player/>}></Route>
       </Routes>
    </div>
  )
}

export default App