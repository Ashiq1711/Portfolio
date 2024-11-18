import React from 'react'
import './Hero.css'
import profile_img from '../../assets/pp.png'
import { FaCloudDownloadAlt } from "react-icons/fa";
const Hero = () => {
  return (
    <div id='home' className='hero'>
<img src={profile_img} alt="" />
<h1>I'm <span>Robiul Islam Ashiq</span>. A MERN Stack Developer</h1>
<p>I'm a full stack developer specializing in building exceptional digital experiences. Currently, I'm focused on building responsive full-stack web applications.</p>
<div className='hero-action'>
<div className='hero-contact'> Contact with me</div>
<div className='hero-resume'>My resume <FaCloudDownloadAlt className='download-icon'/></div>
</div>
    </div>
  )
}

export default Hero