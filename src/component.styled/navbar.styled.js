import styled from "styled-components";
// import bgImg from '../images/bg-intro-mobile.svg'
// import '../App.css'

export const NavStyled = styled.nav`
  position:absolute;
  /* font-family:'Public Sans', sans-serif; */
  /* width: 100%; */
  box-sizing: border-box;
  background-color: hsl(var(--VeryDarkBlue),0.97);
  top:0;
  left:0;
  right: 0;
  /* height:fit-content; */
  border:none;
  min-height: 100vh;
  z-index:333;
  padding-bottom:calc(48/16*1rem);
  
  .logobar{
    padding:calc(40/16*1rem) calc(32/16*1rem);
    width:100%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    /* background-color: hsl(var(--VeryDarkBlue)); */
  }

  .logonav{
    height:calc(27/16*1rem);
    padding:0;
  }

  /* .logonav path{
    stroke:white;
    fill:white;
  } */
  
  img {
    height:calc(15/16*1rem);
    /* aspect-ratio: 1/1; */
  }

  .navbar{
    /* background-image: ; */
    /* background-size:cover; */
    /* padding:24px; */
    text-align: center;
    /* background-color: var(--grayishBlue); */
    
    background-position: right top, left top ;
    background-repeat: no-repeat no-repeat;
  }

  ul{
    border-radius:3px;
    margin:auto;
    padding:0;
    width:calc(309/16*1rem);
  }
  
  li{
    border-bottom:1px solid var(--GrayishBlue);
    font-size:calc(19/16*1rem);
    color:white;
    letter-spacing:0.2em;
    line-height:2.3em;
    padding:calc(10/16*1rem);
    text-transform: uppercase;
  }
  
  li:first-child{
    border-top:1px solid var(--GrayishBlue);
    
  }
  button{
    background-color: transparent;
    border:2px solid white;
    width:calc(309/375*100%);
    padding:calc(10/16*1rem);
    color:white;
    font-family: inherit;
    border-radius:5px;
    font-size:1.5rem;
  }

  .socmed{
    display:flex;
    justify-content: center;
  }

  .socmed img{
    height:calc(25/16*1rem);
    aspect-ratio: 1 / 1;
  }

  /* &::after{
    content:'';
    min-height: 200vh;
    width:100vw;
    background-color: white;
    position:absolute;
    z-index:-100;
  } */

`