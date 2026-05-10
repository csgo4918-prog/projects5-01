import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';
import OurStories from './components/ourstories/OurStories';
import Services from './components/Services';

function App() {
  return (
    <div>
      <Banner />
      <Header />
      <OurStories />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
