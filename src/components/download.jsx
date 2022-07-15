import React from 'react'
import chrome from '../images/logo-chrome.svg'
import firefox from '../images/logo-firefox.svg'
import opera from '../images/logo-opera.svg'
import dot from '../images/bg-dots.svg'
import { DownloadStyled } from '../component.styled/download.styled'
import Gap from './Gap'

const Download = () => {
  return (

    <DownloadStyled>
      <div className="downloadtitle">
        <h2>Download the extention</h2>
        <Gap height="0.9rem"/>
        <p>We’ve got more browsers in the pipeline. Please do let us know if you’ve 
          got a favourite you’d like us to prioritize.</p>

      </div>

      <div className="cards">
        <div className="browser">
          <img className='browserLogo' src={chrome} alt="chrome logo" />
          <div>
            <h3>Add to Chrome</h3>
            <Gap height="0.8rem"/>
            <p>Minimum version 62</p>
          </div>
         
          <img src={dot} alt="" />
          <button className='blue'>Add &#38; Install Extension</button>
        </div>
        <div className="browser">
          <img className='browserLogo' src={firefox} alt="firefox logo" />
          <div>
            <h3>Add to Firefox</h3>
            <Gap height="0.8rem"/>
            <p>Minimum version 55</p>

          </div>
          <img src={dot} alt="" />
          <button className='blue'>Add &#38; Install Extension</button>
        </div>
        <div className="browser">
          <img className='browserLogo' src={opera} alt="opera logo" />
          <div>
            <h3>Add to Opera</h3>
            <Gap height="0.8rem"/>
            <p>Minimum version 46</p>

          </div>
          <img src={dot} alt="" />
          <button className='blue'>Add &#38; Install Extension</button>
        </div>
      </div>

    </DownloadStyled>
    
    
  )
}

export default Download