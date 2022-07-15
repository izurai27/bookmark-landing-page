import styled from "styled-components";

export const DownloadStyled = styled.section`
  display:flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--veryLightGray);
  text-align: center;
  row-gap: calc(40/16*1rem);
  padding-top:calc(80/16*1rem);
  padding-bottom:calc(90/16*1rem);
  padding-inline:calc(47/16*1rem);

  .cards{
    display:flex;
    flex-direction: column;
    align-items: center;
    width:100%;
    row-gap: calc(40/16*1rem);
  }

  .browser{
    box-shadow: 0px 5px 10px  #EFEFEF;
    width:100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    padding-top:calc(49/16*1rem);
    padding-bottom:calc(20/16*1rem);
    border-radius: 20px;
    row-gap: calc(30/16*1rem);
  }

  .browserLogo{
    width:calc(139/375*100%);
  }

  img{
    height: 100%;
  }

  /* .article-item{
    display: flex;
    flex-direction: column;
    width:calc(301/375*100%);
    overflow:hidden;
    border-radius: 10px;
    background-color: white;

  }

  .caption{
    padding:calc(32/16*1rem);
    display: flex;
    flex-direction: column;
    row-gap: calc(13/16*1rem);
  }

  cite{
    font-size:calc(10/16*1rem);
    color:var(--grayishBlue);
  } */
  
  /* .articleCards{
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items: center; */
  /* background-color: var(--veryLightGray); */
    /* row-gap: calc(27/16*1rem); */
  /* padding-top:calc(86/16*1rem); */
  /* } */

  /* p{
  font-size:0.8rem;
  letter-spacing:-0.06em;
  color:var(--grayishBlue);
  line-height:1.6em;
  
} */

  @media only screen and (min-width:765px){
    padding:calc(90/16*1rem) calc(155/16*1rem) ;
    align-items: flex-start;
    row-gap: calc(45/16*1rem);
    padding-bottom:calc(85/16*1rem);
    

    
    

  }
`