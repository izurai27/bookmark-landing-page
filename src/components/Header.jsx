import React, {useState, useEffect} from 'react'
// import logo from '../images/logo.svg'
import hbgMenu from '../images/icon-hamburger.svg'
import { HeaderStyled } from '../component.styled/header.styled'
import Navbar from './navbar'
import NavbarDesktop from './navbarDesktop'

const Header = () => {
  const [openNav, setOpenNav]=useState(false)
  const [size, setSize] = useState(0)
  const minWidth = 889
  

  useEffect(() => {
    setSize(window.screen.width)
  console.log(size)
  },[size])

  const handleMobileMenu = () => {
    setOpenNav(!openNav)
  }




  return (
    <HeaderStyled>
    
        {/* <img src={logo} alt="easybank_logo" className="logo" /> */}
        {(size<minWidth) && <img src={hbgMenu} alt="" className="mobileMenu" onClick={handleMobileMenu} />}
        {openNav && <Navbar handleMobileMenu={handleMobileMenu}/>}
        {(size>=minWidth) && <NavbarDesktop/>}

    </HeaderStyled>
  )
}

export default Header