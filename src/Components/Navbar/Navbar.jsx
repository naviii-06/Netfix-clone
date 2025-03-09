import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import  logo from '../../assets/logo.png'
import search from '../../assets/search_icon.svg';
import bell from '../../assets/bell_icon.svg';
import profile from '../../assets/profile_img.png';
import caret from '../../assets/caret_icon.svg';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../Firebase';
import loadingss from '../../assets/netflix_spinner.gif'
import Footer from './../Footer/Footer';

const Navbar = () => {

   const [loading,setLoading]=useState(false);
  const navRef =useRef();
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY >=80){
        navRef.current.classList.add('nav-dark')
      }
        else{
          navRef.current.classList.remove('nav-dark')
        }
    })
  },[])

  const navi=useNavigate();

  return (

    loading?<div className='laodingssss'>
      <img src={loadingss} alt="" />
    </div>:
    <div ref={navRef} className='navbar'>

      <div className='navbar-left'>
        <img src={logo} alt="rf" />

        <ul>
          <li onClick={()=>{navi('/')}} >Home</li>
          <li onClick={()=>{navi('/player/:id')}}>Tv Show</li>
          <li to={<Footer/>} onClick={()=>{navi('/footer')}}>Movies</li>
          <li>Language</li>
          <li>My Favorite</li>
          <li>New & Popular </li>

        </ul>
      </div>


      <div className='navbar-right'>
           <img src={search} alt="idon" className='icon' />
           <p>Children</p>
           <img src={bell} alt="ion" className='icon' />

          
         <div className="navbar-profile">
            <img src={profile} alt="" className='profile'/>
            <img src={caret} alt="" />
            <div  className="drop-down">
             <p onClick={()=>{
              setLoading(true);
              logout()
              setLoading(false)
            }
              }>Sign Out from Netflix</p>
           </div>
        </div>
      </div>
    </div>

    
    
  )
}

export default Navbar
