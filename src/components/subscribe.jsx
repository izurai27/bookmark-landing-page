import React from 'react'
import { SubscribeStyled } from '../component.styled/subs.styled'
import Gap from './Gap'
import alert from '../images/icon-error.svg'

const Subscribe = () => {

  const handleInput = (e) => {
    console.log(e.target.value)
    const val = e.target.value;
    const alert = document.querySelector('.alert')
    const warning = document.querySelector('.warning')
    const email = document.querySelector('.email')
    
    if(/\w+@\w+\.\w/.test(val) === false){
      console.log(/\w+@\w+\.\w{2,}/.test(val))
      alert.classList.add('alertOn');
      email.classList.add('emailwarning');
      warning.classList.add('warningOn');
    } else {
      alert.classList.remove('alertOn');
      email.classList.remove('emailwarning');
      warning.classList.remove('warningOn');
    }
  }

  return (
    <SubscribeStyled>
      <p> 35,000+ already joined</p>
      <Gap height='0.5rem'/>
      <h2>Stay up-to-date with what we’re doing</h2>
      <Gap height='2rem'/>
      <form>
      <div className="email ">
        <div className='group'>
          <input type="email" placeholder='Enter your email address' onInput={handleInput}/>
          <img src={alert} alt="" className="alert" />
        </div>
        <div className="warning ">Whoops, make sure it's an email</div>
      </div>
      <Gap height='1rem'/>
      <button className='red'>Contact Us</button>

      </form>

    </SubscribeStyled>
  )
}

export default Subscribe