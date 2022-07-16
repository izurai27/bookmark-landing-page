import React from 'react'
import { DetailStyled } from '../component.styled/detail.styled'
import feat1 from '../images/illustration-features-tab-1.svg'
import feat2 from '../images/illustration-features-tab-2.svg'
import feat3 from '../images/illustration-features-tab-3.svg'
// import Gap from './Gap'
const detailItems = [
  {
    image: feat1,
    title:'Bookmark in one click',
    paragraf: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'
  },
  {
    image: feat2,
    title:'Intelligent search',
    paragraf:'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'
  },
  {
    image: feat3,
    title:'Share your bookmarks',
    paragraf:'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'
  }
]

const Detail = (props) => {
  return (
    <DetailStyled>
      {
        detailItems.filter((el,index)=> index === props.index).map( (elemen, index) => {
         return(
          <div key={index} className='container'>
            <div className="imgContainer">
              <img src={elemen.image} alt="feature" />
            </div>
            <div className="detailMsg">
              <h2>{elemen.title}</h2>
              {/* <Gap height='1rem'/> */}
              <p>{elemen.paragraf}</p>
              <button className='blue moreinfo'>More Info</button>
            </div>
            </div>

         )

        })
      }
    </DetailStyled>
    
  )
}

export default Detail