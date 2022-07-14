import React from 'react'
import { FooterStyled } from '../component.styled/footer.styled'
// import { ReactComponent as Logo } from '../images/logo copy.svg'
// import { ReactComponent as Logo } from '../images/logo.svg'
// import fb from '../images/icon-facebook.svg'
// import ig from '../images/icon-instagram.svg'
// import twit from '../images/icon-twitter.svg'
// import yt from '../images/icon-youtube.svg'
// import pin from '../images/icon-pinterest.svg'

const Footer = () => {
  return (
    <FooterStyled>
      <div className="group left">
        {/* <Logo className='footer_logo'/> */}
        <div className="socmed">
          {/* <img src={fb} alt="facebook logo" />
          <img src={yt} alt="youtube logo" />
          <img src={twit} alt="twitter logo" />
          <img src={pin} alt="pinterest logo" />
          <img src={ig} alt="instagram logo" /> */}
        </div>

      </div>

      <ul>
        <li>About Us</li>
        <li>Contact</li>
        <li>Blog</li>
        <li>Careers</li>
        <li>Support</li>
        <li>Privacy Policy</li>
      </ul>
      <div className="group right">
        <button>Request Invite</button>
        <div>© Easybank. All Rights Reserved</div>

      </div>
    </FooterStyled>
    
  )
}

export default Footer