import styled from "styled-components";
// import arrow from '../images/icon-arrow.svg'

export const FaqStyles = styled.section`
  padding:calc(50/16*1rem) calc(36/16*1rem);
  text-align: center;

  .questionItem{
    text-align: left;
    padding-top:calc(28/16*1rem);
    padding-bottom:calc(20/16*1rem);
    border-bottom: 1px solid var(--GrayishBlue);
  }
  .question{
    position:relative;
    font-size:1rem;
    letter-spacing:-0.03em;
    display:flex;
    justify-content: space-between;
    pointer-events: none;
  }

  .arrow{
    /* width:1rem; */
    height:90%;
    position:absolute;
    background-size: contain;
    background-repeat: no-repeat;
    /* display:flex;
    align-items: flex-start;
    justify-content: flex-start; */
    right:0;
  }

  .arrow img{
    width:100%;
  }

  .answer{
    display:none;
  }

  .display{
    display:block;
    margin-top:2rem;
    line-height: 1.9em;
  }

  .rotate{
    transform:rotate(180deg);

    path{
      stroke:var(--SoftRed)
    }
  }
`