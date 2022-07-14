import React from 'react'
import { StyledNavbarDesktop } from '../component.styled/navbardesktop.styled'
import Gap from './Gap'

const NavbarDesktop = () => {
  return (
    <StyledNavbarDesktop>

        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>Careers</li>
        </ul>

  <Gap height="20px"/>
        <button className="atcInvite">
          Request Invite
        </button>
    </StyledNavbarDesktop>
    
  )
}

export default NavbarDesktop