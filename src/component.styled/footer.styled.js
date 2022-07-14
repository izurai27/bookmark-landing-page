import styled from "styled-components"

export const FooterStyled = styled.footer`
  background-color: var(--darkBlue);
  color:#fff;
  display:flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  row-gap: 2.4rem;
  padding:calc(37/16*1rem);
  font-size: calc(15/16*1rem);

  /* .footer_logo g path{
    fill:#fff;
  } */

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
    row-gap: calc(20/16*1rem);
  }

  .socmed{
    display: flex;
    column-gap: 1rem;
  }

  li{
    cursor:pointer;
  }

  .right{
    color:var(--grayishBlue)
  }
  
  @media only screen and (min-width:765px){
    flex-direction: row;
    justify-content: space-between;
    padding:calc(50/16*1rem) 10rem;
    box-sizing: border-box;
  
    ul{
      flex-wrap:wrap;
      height:calc(89/16*1rem);
      align-items:flex-start;
      /* width:calc(590/1440*100vw); */
      padding-right:calc(300/16*1rem);
      box-sizing: border-box;
    }
  
    .right{
      align-items:flex-end;
    }

    .left{
      align-items: flex-start;
      /* width:fit-content; */
    }
  }


`