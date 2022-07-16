import styled from "styled-components";

export const SubscribeStyled = styled.section`
  display:flex;
  flex-direction: column;
  align-items: center;
  padding:calc(65/16*1rem) calc(35/16*1rem);
  padding-bottom:calc(60/16*1rem);
  text-align: center;
  background-color: var(--SoftBlue);
  color:white;
  margin-top:calc(75/16*1rem);

  p{
    color:white;
    text-transform: uppercase;
    letter-spacing:0.1em;
  }

  .email{
    width:100%;
    
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
    border-radius: 5px;
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

  @media only screen and (min-width: 765px){
    row-gap: 10px;
    margin-top:calc(100/16*1rem);

    button.red{
      width: 40%;
    }

    h2{
      width:30%;
    }

    form{
      display:flex;
      width:30%;
      justify-content: space-between;
      column-gap: 10px;
    }
  }
`