import React, { useState } from 'react'
import './Login.css'
import Logo from '../../assets/logo.png'
import loadingss from '../../assets/netflix_spinner.gif'

import {login,signup} from '../../Firebase.js'

const Login = () => {
 
   const [signState,setSignState]=useState("Sign In ")

   const [name,setName]=useState("");
   const [email,setEmail]=useState("");
   const [password,setPassword]=useState("");
   const [loading,setLoading]=useState(false);

   const user_auth = async(event)=>{
    setLoading(true);
    event.preventDefault();
    if(signState==="Sign In"){
      await login(email,password);
      setEmail("");
      setPassword("");
    }
    else{
      await signup(name,email,password);
     
    }

    setLoading(false);

   }

  return (
    loading?<div className='logining'>
      <img src={loadingss} alt="" />
    </div>:
    <div className='login'>
      <img src={Logo} alt="" className='loginlogo' />
      <div className="loginform">
        <h1>{signState}</h1>
        <form>
          {signState==="Sign Up"?<input value={name} onChange={(event)=>
            {setName(event.target.value)}} type="text" placeholder='Your Name'/>:<></>}

          <input  value={email} onChange={(event)=>
            {setEmail(event.target.value)} } type="email" placeholder='Email'/>

          <input  value={password} onChange={(event)=>
            {setPassword(event.target.value)} }type="password" placeholder='Password'/>

          <button onClick={user_auth} type='submit'>{signState}</button>
          <div className="formhelp">
            <div className="remember">
              <input type="checkbox"/>
              <label htmlFor="">Rememeber Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>

        <div className="formswitch">
          
          {signState==="Sign Up"?<p>Already Have an Account <span onClick={()=>{
            setSignState("Sign In")
          }}>Sign In Now</span></p>:<p>New To Netflix? <span onClick={()=>{setSignState("Sign Up")}}>Sign Up Now</span></p>}
           
        </div>
      </div>
    </div>
  )
}

export default Login