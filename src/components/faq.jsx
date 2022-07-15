import React from 'react'
import { FaqStyles } from '../component.styled/faq.styled'
import Gap from '../components/Gap'
// import arrow from '../images/icon-arrow.svg'
import { ReactComponent as Arrow } from '../images/icon-arrow.svg'

const faqitems=[
  {
    quest:'What is Bookmark?',
    ans:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.'
  },
  {
    quest:'How can I request a new browser?',
    ans:'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.'
  },
  {
    quest:'Is there a mobile app?',
    ans:'Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.'
  },
  {
    quest:'What about other Chromium browsers?',
    ans:'Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.'
  }

]

const Faq = () => {

  const handleclick = (e) => {
    const targetSelected = e.target;
    
    const arrow = targetSelected.querySelector('.arrow')
    const answer = targetSelected.querySelector('.answer')
    answer.classList.toggle('display')
    arrow.classList.toggle('rotate')

  }
  return (
    <FaqStyles>
      <h2>Frequently Asked Question</h2>
      <Gap height='1.5rem'/>
      <p>Here are some of our FAQs. If you have any other questions you’d like 
        answered please feel free to email us.</p>
    <Gap height='3rem'/>
    {faqitems.map((el,index) => {
      return(
        <div className="questionItem" key={index} onClick={handleclick}>
          
          <div className="question">{el.quest}
            <Arrow className='arrow'/>
            {/* <img src={arrow} alt="arrow" className="arrow" /> */}
          </div>
          <p className="answer">{el.ans}</p>
        </div>  
      )
    })}
    
    <Gap height='3rem'/>
    <button className="blue">More Info</button>
    </FaqStyles>
    
  )
}

export default Faq