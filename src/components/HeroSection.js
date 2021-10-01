import React from 'react'
import '../App.css';
import { Button } from './Button';
import './HeroSection.css'

function HeroSection() {
    return (
      <a href="https://www.youtube.com/watch?v=ZsQ003C-fzE&t=1s" target="_blank">
        <div className='hero-container'>
             <video src="/videos/moona1.mkv" autoPlay loop />
             </div> 
      </a>
        
    )
}

export default HeroSection
