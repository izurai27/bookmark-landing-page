import Header from './components/Header';
import './reset.css';
import GlobalCSS from './global.css'
import Hero from './components/hero';
import Features from './components/features';
import Download from './components/download';
import Footer from './components/footer';
import Faq from './components/faq';
import Subscribe from './components/subscribe';



function App() {
  return (
  
    <>
      <GlobalCSS/>
      <Header/>
      <Hero/>
      <Features/>
      <Download/>
      <Faq/>
      <Subscribe/>
      <Footer/>
    </>
  );
}

export default App;
