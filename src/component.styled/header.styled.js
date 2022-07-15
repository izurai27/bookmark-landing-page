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
  
  .logo{
    padding-left:23px;
  }

  /* .mobileMenu{
    padding-right:23px;
  } */
`