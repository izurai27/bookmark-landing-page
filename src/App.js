import Header from './components/Header';
import './reset.css';
import GlobalCSS from './global.css'
import Hero from './components/hero';
import Reason from './components/reason';
import Article from './components/article';
import Footer from './components/footer';



function App() {
  return (
  
    <div className="App">
      <GlobalCSS/>
      <Header/>
      <Hero/>
      <Reason/>
      <Article/>
      <Footer/>
    </div>
  );
}

export default App;
