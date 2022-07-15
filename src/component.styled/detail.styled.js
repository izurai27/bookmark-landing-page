import styled from "styled-components";

export const DetailStyled = styled.section`
  .imgContainer{
    width:100%;
    margin-top:calc(71/16*1rem);
    margin-bottom:calc(76/16*1rem);
    position:relative;
  }

  .imgContainer::before{
    content:'';
    background-color: var(--SoftBlue);
    width:100%;
    height:100%;
    position:absolute;
    border-radius: 0 0  100px 0;
    right: calc(40/375*100%);
    top:17%;
    z-index:-30;
  }
  
  img{
    width:calc(310/375*100%);
    width:100%;
  }
`