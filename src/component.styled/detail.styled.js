import styled from "styled-components";

export const DetailStyled = styled.section`

  .container{
    width:100%;
    display:flex;
    flex-direction: column;
  }


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

  .detailMsg{
    display:flex;
    flex-direction: column;
    row-gap: 1rem;
  }
  
  img{
    
    width:100%;
  }

  .moreinfo{
      display:block;
    }

  @media only screen and (min-width:765px){
    .container{
      flex-direction: row;
      align-items: center;
      column-gap: 8rem;
      padding-inline:calc(150/16*1rem);
    }

    .detailMsg{
      width:80%;
      text-align: left;
     
    }

    img{
    
      width:100%;
    }

    .imgContainer::before{
    
      right: calc(70/375*100%);
      top:20%;
      z-index:-30;
      border-radius: 0 0  150px 0;
      width:140%;
    }

    .moreinfo{
      display:block;
      width:fit-content;
    }
  }
`