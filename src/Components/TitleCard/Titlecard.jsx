import React, { useEffect, useState } from 'react'
import './Titlecard.css'
//import Titlecard from './../TitleCards/Titlecard';
import cards_data from './../../assets/cards/Cards_data';
import { useRef } from 'react';
import {Link} from 'react-router-dom'

const Titlecard = ({title,category}) => {
  
const [Apidata,setApidata]=useState([]);

const cardref=useRef();

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNWM4NGI0MzAwMDM1Zjg1MGE3ZmQ5ZDkyMTExNmFjNCIsIm5iZiI6MTczOTYzOTgwOC40NTgsInN1YiI6IjY3YjBjYzAwMmE5ZTk2ZGE4ZDZjNGUwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.23LgeAM8N7xAsLGoVUryfp-yu57_W2jQ7wKJjAQLBJk'
  }
};

const handlewheel = (event)=>{
  event.preventDefault();
  cardref.current.scrollLeft+=event.deltaY;
}

useEffect(()=>{
  
fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
.then(res => res.json())
.then(res => setApidata(res.results))
.catch(err => console.error(err));
   cardref.current.addEventListener('wheel',handlewheel);
},[])


  return (
    <div className='titlecard'>

      <h2>{title?title:"Popular Movies"}</h2>
      <div className='cardlist' ref={cardref}>
          {Apidata.map((card,index)=>{
            return <Link to={`/player/${card.id}`} className='card' key={index}>
              <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
              <p>{card.original_title}</p>
            </Link>
          })}
      </div>
    </div>
  )
}

export default Titlecard