import React from 'react'
import { FooterStyled } from '../component.styled/footer.styled'
// import { ReactComponent as Logo } from '../images/logo copy.svg'
import { ReactComponent as Logo } from '../images/logo-bookmark.svg'
import fb from '../images/icon-facebook.svg'
// import ig from '../images/icon-instagram.svg'
import twit from '../images/icon-twitter.svg'
// import yt from '../images/icon-youtube.svg'
// import pin from '../images/icon-pinterest.svg'
import Gap from './Gap'

const Footer = () => {
  return (
    <FooterStyled>
        <Logo className='footer_logo'/>
      

      <ul>
        <li>FEATURES</li>
        <li>PRICING</li>
        <li>CONTACT</li>
      </ul>
      <div className="socmed">
          <img src={fb} alt="fb_link" />
          <Gap width='2rem'/>
          <img src={twit} alt="twitter_link" />
        </div>
      
    </FooterStyled>
    
  )
}

export default Footer