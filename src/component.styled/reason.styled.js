import styled from "styled-components";

export const ReasonStyled = styled.section`
  background-color: var(--lightGrayishBlue);
  text-align:center;
  padding: calc(73/16*1rem) calc(24/16*1rem);
  display:flex;
  flex-direction: column;
  row-gap: calc(55/16*1rem);

  .title{
    display:flex;
    flex-direction: column;
    row-gap:calc(16/16*1rem);
    justify-content: space-between;
    align-items: center;
  }

  .group{
    display:flex;
    flex-direction: column;
    row-gap:calc(27/16*1rem);
    justify-content: space-between;
    align-items: center;
  }

  img{
    width: calc(70/16*1rem);
  }

  .cards{
    display: flex;
    flex-direction: column;
    row-gap:calc(25/16*1rem);

  }


  @media only screen and (min-width:765px){
    align-items: flex-start;
    padding: calc(105/16*1rem) 10rem;
    row-gap: calc(80/16*1rem);

    .cards{
      flex-direction: row;
      column-gap: 2rem;
    }

    .group{
      text-align: left;
      align-items: flex-start;
      row-gap:calc(35/16*1rem);
    }

    .title{
      align-items: flex-start;
      width:calc(800/1440*100%);
      text-align: left;
      row-gap:calc(30/16*1rem);
    }

    /* h2{
      font-size:calc(40/16*1rem);
      letter-spacing: -0.01em;
    } */

    h3{
      font-size:calc(24/16*1rem);
      letter-spacing: -0.01em;
    }

    p{
      font-size:calc(16/16*1rem);
      line-height:150%;
    }
  }

`