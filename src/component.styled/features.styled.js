import styled from "styled-components";

export const FeaturesStyled = styled.section`
  background-color: var(--lightGrayishBlue);
  text-align:center;
  padding: calc(73/16*1rem) calc(30/16*1rem);
  /* padding: calc(73/16*1rem) 0; */
  display:flex;
  flex-direction: column;
  row-gap: calc(40/16*1rem);
  

  .title{
    display:flex;
    flex-direction: column;
    row-gap:calc(16/16*1rem);
    justify-content: center;
    align-items: center;
    width:100%;
    text-align: center;
  }

  /* .group{
    display:flex;
    flex-direction: column;
    row-gap:calc(27/16*1rem);
    justify-content: space-between;
    align-items: center;
  } */

  img{
    width: calc(70/16*1rem);
  }

  /* .cards{
    display: flex;
    flex-direction: column;
    row-gap:calc(25/16*1rem);

  } */

  li{
    font-size: calc(18/16*1rem);
    color:var(--GrayishBlue);
    padding:calc(19/16*1rem);
    border-bottom:1px solid var(--GrayishBlue);
    position:relative;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  li:first-child{
    border-top:1px solid var(--GrayishBlue);
  }

  .active::after{
    content:'';
    width:45%;
    height:4px;
    background-color:var(--SoftRed);
    position:absolute;
    bottom:0;
  }


  @media only screen and (min-width:765px){
    align-items: center;
    
    row-gap: calc(60/16*1rem);
    padding: calc(120/16*1rem) calc(3/16*1rem);

    ul{
      display:flex;
      width:100%;
      justify-content: center;
    }

    li{
      width:17%;
    }

    li:first-child{
    border-top:none;
  }

  .active::after{
      content:'';
      width:100%;
      
    }
    

    .title{
      /* align-items: flex-start; */
      width:calc(550/1440*100%);
      row-gap:calc(20/16*1rem);
    }

    p{
      line-height: 2rem;;
    }

    
  }

`