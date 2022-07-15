import styled from "styled-components";

export const HeaderStyled = styled.header`
  display:flex;
  justify-content: space-between;
  align-items: center;
  /* height: calc(80/16*1rem); */
  box-sizing: border-box;
  width:100%;
  position:relative;
  
  padding: calc(39/375*100vw) calc(31/375*100vw);
  /* z-index:777; */
  
  
  /* .mobileMenu{
    padding-right:23px;
  } */
  
  @media only screen and (min-width:375px){
    padding:3rem;
    padding-left:calc(170/16*1rem);
  }
`