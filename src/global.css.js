

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
  font-size:calc(30/16*1rem);
  letter-spacing: 0.02em;
  color: var(--VeryDarkBlue);
  font-weight: 500;
  line-height: 1.4em;
}

p{
  font-size:1rem;
  letter-spacing:-0.03em;
  color:var(--GrayishBlue);
  line-height:1.5em;
  
}

button {
    /* width:calc(151/16*1rem); */
    font-size:0.9rem;
    letter-spacing: -0.03em;
    padding:1rem;
    font-family:inherit;
    font-weight: 500;
    border-radius:5px;
    border:none;
    box-shadow: 0px 5px 10px  rgba(0,0,0,0.4);

  }
.blue{
  background-color: var(--SoftBlue);
    color:white;
    padding-inline:2.5rem;
}
h2{
  font-size:calc(24/16*1rem);
  letter-spacing: 0.02em;
  color:var(--VeryDarkBlue);
  line-height: 1.2em ;

  @media only screen and (min-width:765px){
    font-size:calc(40/16*1rem);
      letter-spacing: -0.01em;
  }
}

h3{
  font-size:calc(20/16*1rem);
  letter-spacing: 0.03em;
  color:var(--VeryDarkBlue);
  font-weight: 500;
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