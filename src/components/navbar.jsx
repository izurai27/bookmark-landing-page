import React from 'react'
import { NavStyled } from '../component.styled/navbar.styled'
import { ReactComponent as Logo } from '../images/logo-bookmark copy.svg'
import fb from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import close from '../images/icon-close.svg'
import Gap from './Gap'
// import { calculateNewValue } from '@testing-library/user-event/dist/utils'


const Navbar = (props) => {




  return (
    <NavStyled>
      <div className="logobar">
        <Logo className='logonav'/>
        {/* <img src={logo} alt="bookmark_logo" className="logo" /> */}
        <img src={close} alt="closeMobileMenu" className='close' onClick={props.handleMobileMenu}/>
      </div>
      
      <div className="navbar">
        <ul>
          <li>Features</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>
        <Gap height="1.56rem"/>
        <button className="atcInvite">
          LOGIN
        </button>
        <Gap height='13.75rem'/>
        <div className="socmed">
          <img src={fb} alt="fb_link" />
          <Gap width='2.375rem'/>
          <img src={twitter} alt="twitter_link" />
        </div>
      </div>

    </NavStyled>
    
  )
  
}

export default Navbar
