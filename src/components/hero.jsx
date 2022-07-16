import React from 'react'
import { HeroStyled } from '../component.styled/hero.styled'
import heroImg from '../images/illustration-hero.svg'
import Gap from './Gap'

const Hero = () => {
  return (
    <HeroStyled>
      <div className="img">
        <div className="hero">
          <img src={heroImg} alt="mockup" />
        </div>
      </div>
      <div className='message'>

        
        <h1>A Simple Bookmark Manager</h1>
        <Gap height='1rem'/>
        <p>A clean and simple interface to organize your favourite websites. Open a new 
          browser tab and see your sites load instantly. Try it for free.</p>
        <Gap height='1.9rem'/>
        <div className="buttonGroup">
          <button className="atcChrome">
            Get it on Chrome
          </button>
          <Gap width="1rem"/>
          <button className="atcFirefox">
            Get it on Firefox
          </button>

        </div>
       
      </div>
    </HeroStyled>
    
  )
}

export default Hero