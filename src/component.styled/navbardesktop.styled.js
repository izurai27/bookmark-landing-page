import styled from "styled-components";

export const StyledNavbarDesktop = styled.nav`
  display: flex;
  column-gap: 30px;
  align-items: center;
  width:calc(600/1440*100vw);
  padding-right:calc(100/1440*100vw);
  justify-content: space-between;

  ul{
    display: flex;
  column-gap: 30px;
  }

  li{
    cursor:pointer;
    font-size: calc(14/16*1rem);
    color:var(--grayishBlue);
    letter-spacing: 0.1em;
  }

  button{
    width:calc(111/16*1rem);
    /* margin-right: calc(111/16*1rem); */
  }
`