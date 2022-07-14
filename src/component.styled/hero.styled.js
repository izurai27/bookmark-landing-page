import styled from "styled-components";
// import bgImg from '../images/bg-intro-mobile.svg'
// import bgImgDesktop from '../images/bg-intro-desktop.svg'

export const HeroStyled = styled.main`
  text-align:center;
  
  .img{
    
    /* background-repeat: no-repeat;
    background-size: cover;
    background-position: left 60%;
    background-position: left bottom;
    background-position: left 63%; */
    
    overflow: hidden;
    width:100%;
    aspect-ratio: 375/325;
    /* aspect-ratio: 1/1; */
    
  }
  .mockup{
    width:100%;
    height: 100%;
    display:flex;
    align-items: flex-end;
    justify-content: center;
    transform:translateY(-26px)
  }
  img{
    width:100%;
    width:calc(345/375*100%);
   
  }

  .message{
    padding-inline: 2rem;
  }
 h1{
    margin-top:-5px;
  }

  @media only screen and (min-width:765px){
    display: flex;
    flex-direction: row-reverse;
    justify-content:space-between;
    align-items:center;
    background-color: var(--veryLightGray);
    /* overflow: visible; */
    
    .img{
      
      /* background-size: 160%;
      background-position: 6% 67%;  */
      width:130%;
      aspect-ratio:  784/ 658;
      position:relative;
      overflow: visible;
    }

    .mockup{
      position:absolute;
      top:25px;
      right:0;
      display:flex;
      align-items: flex-end;
      justify-content: left;
      overflow: hidden;
      width:100%;
      height:fit-content;
      

    }
    img{
      
      width:100%;
      transform: translate(112px, -117px);
      transform: translate(17%, -14%);
      
    }

    .message{
      text-align: left;
      padding-inline: 0;
      padding-left:calc(154/1440*100vw);
      padding-right:calc(72/1440*100vw);

    }

    
  }
` 