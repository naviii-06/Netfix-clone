import React from 'react'
import './Home.css'

import hero from '../../assets/leooo.jpg'
import Navbar from '../../Components/Navbar/Navbar';
import hero_title from '../../assets/fr.png'
import play from '../../assets/play_icon.png'
import infoicon from '../../assets/info_icon.png'
import Titlecard from '../../Components/TitleCard/Titlecard.jsx';
import Footer from './../../Components/Footer/Footer';
// import Leooooo from '../../assets/leoooooo.mkv'

const Home = () => {
  return (
    <div className='home'>

      {/* Nabar mount */}
      <Navbar/>

      {/* Home */}
      <div className='home'>
        <img src={hero} alt="" className='banner-img'/>
         <div className="hero-caption">
          {/* <img src={hero_title} alt="" className='caption-img'/> */}

          <p></p>
              <div className="hro-btn">
                <button className='btn'><img src={play} alt="" />Play</button>
                <button className='btn dark-btn'><img src={infoicon} alt="" />More Info</button>

              </div>
              
         </div>
      </div>



      <div className="morecard"> 
      <Titlecard title={"Blockbuster Movies"} category={"popular"}/>
      <Titlecard title={"Top Picks For You"} category={"top_rated"}/>
      <Titlecard title={"UpComing"} category={"upcoming"}/>
      <Titlecard title={"Only on Netflix"} category={"now_playing"}/>

    </div>
    <Footer/>
    </div>
  )
}

export default Home