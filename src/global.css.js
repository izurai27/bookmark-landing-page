

import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap');

:root{
  /* ## Colors*/

  --SoftBlue: hsl(231, 69%, 60%);
  --SoftRed: hsl(0, 94%, 66%);

/* ### Neutral */

--GrayishBlue: hsl(229, 8%, 60%);
--VeryDarkBlue: 229, 31%, 21%;
} 
 
 
body{
  /* ## Typography */
  /* ### Body Copy */
  
  font-size: calc(18/16*1rem);
  font-family: 'Rubik', sans-serif;
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

/* button{
  width:calc(162/16*1rem);
  border:none;
  height:calc(46/16*1rem);
  border-radius:calc(32/16*1rem);
  background-image: linear-gradient(135deg, var(--limeGreen), var(--brightCyan));
  color:var(--lightGrayishBlue);
  cursor:pointer;
  font-weight: 700;
} */

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