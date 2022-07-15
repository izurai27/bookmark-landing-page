import React, { useState } from 'react'
import { FeaturesStyled } from '../component.styled/features.styled'
import Detail from './Detail'
// import onlineImg from '../images/icon-online.svg'
// import budgetingImg from '../images/icon-budgeting.svg'
// import onboardingImg from '../images/icon-onboarding.svg'
// import apiImg from '../images/icon-api.svg'


const Features = () => {

  const [indexSelected,setIndex] = useState(0)

  const handleClick = (e) => {
    const activeEl = document.querySelector('.active');
    const select = e.target

    activeEl.classList.toggle('active');
    select.classList.toggle('active');

    setIndex(select.value)

  }


  return (
    <FeaturesStyled>
      <div className="title">
        
        <h2>Features</h2>
        <p>Our aim is to make it quick and easy for you to access your favourite websites. 
      Your bookmarks sync between your devices so you can access them on the go.</p>

      </div>

      <div className="features">
        <ul>
          <li value={0} className='active' onClick={handleClick}>Simple Bookmarking</li>
          <li value={1} onClick={handleClick}>Speedy Seaching</li>
          <li value={2} onClick={handleClick}>Easy Sharing</li>
        </ul>

        <Detail index={indexSelected}/>
      </div>

    

    </FeaturesStyled>
    
  )
}

export default Features