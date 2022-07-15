import React from 'react'
import { StyledNavbarDesktop } from '../component.styled/navbardesktop.styled'
import Gap from './Gap'

const NavbarDesktop = () => {
  return (
    <StyledNavbarDesktop>

        <ul>
          <li>FEATURES</li>
          <li>PRICING</li>
          <li>CONTACT</li>
        </ul>

  <Gap height="20px"/>
        <button className="red">
          Login
        </button>
    </StyledNavbarDesktop>
    
  )
}

export default NavbarDesktop