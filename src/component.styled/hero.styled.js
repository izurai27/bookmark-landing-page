import styled from "styled-components";
// import bgImg from '../images/bg-intro-mobile.svg'
// import bgImgDesktop from '../images/bg-intro-desktop.svg'

export const HeroStyled = styled.main`
  text-align:center;
  padding-top:calc(40/16*1rem);
  
  .img{
    
    /* background-repeat: no-repeat;
    background-size: cover;
    background-position: left 60%;
    background-position: left bottom;
    background-position: left 63%; */
    
    overflow: hidden;
    width:100%;
    aspect-ratio: 375/305;
    /* aspect-ratio: 1/1; */
    
  }
  .hero{
    width:100%;
    height: 100%;
    /* display:flex;
    align-items: flex-end;
    justify-content: center;
    transform:translateY(-26px); */
    position: relative;
  }
  
  .hero::before{
    content:'';
    background-color: var(--SoftBlue);
    width:100%;
    height:68%;
    position:absolute;
    border-radius: 0 0 0 100px;
    left: 80px;
    top:17%;
    z-index:-30;
    /* box-shadow: -10px 0px 20px 0px grey; */
  }

  img{
    width:110%;
    width:calc(345/375*100%);
    z-index:10;
  }

  .message{
    padding-inline: 2rem;
  }

  /* h1{
    margin-top:-5px;
  } */

  .buttonGroup{
    display:flex;
    justify-content: center;

  }
  button{
    width:calc(151/16*1rem);
    font-size:0.9rem;
    letter-spacing: -0.03em;
    padding:1rem;
    font-family:inherit;
    font-weight: 500;
    border-radius:5px;
    border:none;
    box-shadow: 0px 5px 10px  rgba(0,0,0,0.4);

  }

  .atcChrome{
    background-color: var(--SoftBlue);
    color:white;
  }

  .atcFirefox{
    background-color: hsl(0,0,5);
  }

  @media only screen and (min-width:765px){
    display: flex;
    flex-direction: row-reverse;
    justify-content:space-between;
    align-items:center;
    background-color: var(--veryLightGray);
    padding-top:calc(51/16*1rem);
    /* overflow: visible; */
    
    .img{
      
      /* background-size: 160%;
      background-position: 6% 67%;  */
      width:100%;
      aspect-ratio:  577/ 392;
      position:relative;
      overflow: visible;
    }

    .hero::before{
      
      width:74%;
      height:80%;
      left: 26%;
      top:30%;
      border-radius: 0 0 0 180px;
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
      /* transform: translate(112px, -117px); */
      /* transform: translate(-10%, 0); */
      
    }

    .message{
      text-align: left;
      padding-inline: 0;
      padding-left:calc(154/1440*100vw);
      padding-right:calc(72/1440*100vw);

    }

    .buttonGroup{
      justify-content: flex-start;
    }

    
  }
` 