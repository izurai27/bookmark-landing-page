import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
:root{
  /* ## Colors*/

  --darkBlue: hsl(233, 26%, 24%);
  --limeGreen: hsl(136, 65%, 51%);
  --brightCyan: hsl(192, 70%, 51%);

/* ### Neutral */

--grayishBlue: hsl(233, 8%, 62%);
--lightGrayishBlue: hsl(220, 16%, 96%);
--veryLightGray: hsl(0, 0%, 98%);
--white: hsl(0, 0%, 100%);
--breakpoint:1440px;
} 
 
 
body{
  /* ## Typography */
  /* ### Body Copy */
  
  font-size: calc(18/16*1rem);
  font-family: 'Public Sans', sans-serif;
  /* overflow: hidden; */
}

h1{
  font-size:calc(42/16*1rem);
  letter-spacing: -0.04em;
  color: var(--darkBlue);
  font-weight: 300;
  line-height: 1.15em;
}

p{
  font-size:1rem;
  letter-spacing:-0.06em;
  color:var(--grayishBlue);
  line-height:1.6em;
  
}

button{
  width:calc(162/16*1rem);
  border:none;
  height:calc(46/16*1rem);
  border-radius:calc(32/16*1rem);
  background-image: linear-gradient(135deg, var(--limeGreen), var(--brightCyan));
  color:var(--lightGrayishBlue);
  cursor:pointer;
  font-weight: 700;
}

h2{
  font-size:calc(30/16*1rem);
  letter-spacing: -0.01em;
  color:var(--darkBlue);
  line-height: 1.2em ;

  @media only screen and (min-width:765px){
    font-size:calc(40/16*1rem);
      letter-spacing: -0.01em;
  }
}

h3{
  font-size:calc(16/16*1rem);
  letter-spacing: -0.06em;
  color:var(--darkBlue);
}

@media only screen and (min-width:765px){

  h1{
    font-size:calc(53/16*1rem);
    letter-spacing: 0;
       
  }

  p{
  font-size:calc(19/16*1rem);
 
  
  line-height:106%;
  
}

}

`