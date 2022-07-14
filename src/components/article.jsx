import React from 'react'
// import currency from '../images/image-currency.jpg'
// import confetti from '../images/image-confetti.jpg'
// import plane from '../images/image-plane.jpg'
// import restaurant from '../images/image-restaurant.jpg'
import { ArticleStyled } from '../component.styled/article.styled'


const articles = [
  {
    title:'Receive money in any currency with no fees',
    author:'Claire Robinson',
    caption:'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …',
    // image:currency
  },
  {
    title:'Treat yourself without worrying about money',
    author:'Wilson Hutton',
    caption:'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …',
    // image: restaurant
  },
  {
    title:'Take your Easybank card wherever you go',
    author:'Wilson Hutton',
    caption:'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …',
    // image: plane
  },
  {
    title:'Our invite-only Beta accounts are now live!',
    author:'Claire Robinson',
    caption:'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...',
    // image: confetti
  }



]

const Article = () => {
  return (

    <ArticleStyled>
      <h2>Latest Articles</h2>
      <div className="articleCards">
        {articles.map((element,index) => {
        return (
          <div className='article-item' key={index}>
            <div className="illustration">
               <img src={element.image} alt="illustration" />
            </div>
           
            <div className="caption">
              <cite>By {element.author}</cite>
              <h3>{element.title}</h3>
              <p>{element.caption}</p>
            </div>
          
          </div>
        )
      })}

      </div>

    </ArticleStyled>
    
    
  )
}

export default Article