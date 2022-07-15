import styled from "styled-components";

export const SubscribeStyled = styled.section`
  display:flex;
  flex-direction: column;
  align-items: center;
  padding:calc(65/16*1rem) calc(35/16*1rem);
  text-align: center;
  background-color: var(--SoftBlue);
  color:white;
  margin-top:calc(80/16*1rem);

  p{
    color:white;
    text-transform: uppercase;
    letter-spacing:0.1em;
  }

  .email{
    width:100%;
    border-radius: 5px;
  }

  .emailwarning{
    border:2px solid var(--SoftRed);
    background-color: var(--SoftRed);
    overflow:hidden;
  }
  
  .group{
    display:flex;
    background-color: white;
    justify-content: space-between;
    align-items: center;
    padding-inline:calc(21/16*1rem);
  }

  input{
    width:100%;
    height:3rem;
    border-radius:5px;
    border:none;
    outline:none;
    
  }
  
  
  
  input::placeholder{
    font-family: inherit;
  }
  
  .alert{
    display:none;
  }
  
  .alertOn{
    display:inline-block;
    width:1.5rem;
    height: 1.5rem;
    
    border-radius: 100%;
    
    /* height:1rem; */
  }
  
  .warning{
    display:none;
  }
  
  .warningOn{
    display:block;
    color:white;
    background-color: var(--SoftRed);
    font-size: 0.8rem;
    text-align: left;
    padding:0.3rem;
    font-style: italic;
  }

  .red{
    width:100%;
    background-color: var(--SoftRed);
    color:white;
  }
`