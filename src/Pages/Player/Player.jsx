import React, { useEffect, useState } from 'react'
import "./Player.css"
// import {Link} from 'react-r'

import bavkarrow from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'
const Player = () => {


const {id}=useParams();
const navi =useNavigate();

const [apidata,setApidata]=useState({
  name:"",
  key:"",
  published_at:"",
  typeof:"",
});


  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNWM4NGI0MzAwMDM1Zjg1MGE3ZmQ5ZDkyMTExNmFjNCIsIm5iZiI6MTczOTYzOTgwOC40NTgsInN1YiI6IjY3YjBjYzAwMmE5ZTk2ZGE4ZDZjNGUwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.23LgeAM8N7xAsLGoVUryfp-yu57_W2jQ7wKJjAQLBJk'
    }
  };
  
  
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApidata(res.results[0]))
    .catch(err => console.error(err));
  },[])








  return (
    <div className='player'>
      <img src={bavkarrow} alt="" onClick={()=>{navi(-2)}}/>
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apidata.key}`} title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="playerinfo">
        <p>{apidata.published_at.slice(0,10)}</p>
        <p>{apidata.name}</p>
        <p>{apidata.typeof}</p>
      </div>
    </div>
  )
}

export default Player