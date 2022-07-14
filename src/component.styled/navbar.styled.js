import styled from "styled-components";
// import bgImg from '../images/bg-intro-mobile.svg'
// import '../App.css'

export const NavStyled = styled.nav`
  position:absolute;
  /* font-family:'Public Sans', sans-serif; */
  width: 100%;
  background-color: white;
  top:0;
  height:fit-content;
  border:none;
  min-height: 100vh;
  z-index:333;
  
  .logobar{
    height:calc(60/16*1rem);
    padding:20px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
  }

  .navbar{
    /* background-image: ; */
    /* background-size:cover; */
    padding:24px;
    text-align: center;
    background-color: var(--grayishBlue);
    
    background-position: right top, left top ;
    background-repeat: no-repeat no-repeat;
  }

  ul{
    border-radius:3px;
    margin:auto;
    background:white;
    padding:20px;
  }

  li{
    font-size:calc(19/16*1rem);
    letter-spacing:-0.03em;
    line-height:2.3em;
    
  }

  &::after{
    content:'';
    min-height: 200vh;
    width:100vw;
    background-color: white;
    position:absolute;
    z-index:-100;
  }

`