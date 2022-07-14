import styled from "styled-components";

export const ArticleStyled = styled.article`
  display:flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--veryLightGray);
  row-gap: calc(30/16*1rem);
  padding-top:calc(90/16*1rem);
  padding-bottom:calc(90/16*1rem);

  .illustration{
    height:calc(200/16*1rem);
    display:flex;
    align-items: flex-end;
    overflow: hidden;
  }

  img{
    height: 100%;
  }

  .article-item{
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
  }
  
  .articleCards{
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
  /* background-color: var(--veryLightGray); */
    row-gap: calc(27/16*1rem);
  /* padding-top:calc(86/16*1rem); */
  }

  p{
  font-size:0.8rem;
  letter-spacing:-0.06em;
  color:var(--grayishBlue);
  line-height:1.6em;
  
}

  @media only screen and (min-width:765px){
    padding:calc(90/16*1rem) calc(155/16*1rem) ;
    align-items: flex-start;
    row-gap: calc(45/16*1rem);
    padding-bottom:calc(85/16*1rem);
    .articleCards{
      flex-direction: row;
      justify-content: space-between;
      column-gap: 2rem;
      align-items: flex-start;
      flex-wrap:wrap;
    }

    
    .article-item{
      max-width: calc(253/16*1rem); 
    }

    p{
 
  line-height:1.3em;
  
}

  }
`