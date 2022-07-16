import styled from "styled-components"

export const FooterStyled = styled.footer`
  background-color: hsl(var(--VeryDarkBlue));
  color:#fff;
  display:flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  row-gap: 2.5rem;
  padding:calc(40/16*1rem);
  padding-bottom:calc(50/16*1rem);
  font-size: calc(15/16*1rem);

  .footer_logo path{
    /* stroke:#fff; */
    fill:#fff;
  }

  ul, .group{
    width:100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    row-gap: 2rem;
  }

  ul{
    display:flex;
    flex-direction: column;
    row-gap: calc(35/16*1rem);
  }

  .socmed{
    display: flex;
    /* column-gap: 1rem; */
  }

  li{
    cursor:pointer;
    letter-spacing: 0.1em;
  }

  .right{
    color:var(--grayishBlue)
  }
  
  @media only screen and (min-width:765px){
    flex-direction: row;
    justify-content: space-between;
    padding:calc(16/16*1rem) 10rem;
    box-sizing: border-box;
    align-items: center;
  
    ul{
      /* flex-wrap:wrap; */
      flex-direction: row;
      
      align-items:center;
      width:calc(590/1440*100vw);
      padding-right:calc(300/16*1rem);
      box-sizing: border-box;
      column-gap: 20px;
    }
  
    .right{
      align-items:center;
    }

    .left{
      align-items:center;
      /* width:fit-content; */
    }
  }


`