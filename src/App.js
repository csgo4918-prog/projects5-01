import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import OurStories from './components/ourstories/OurStories';
import Services from './components/service/Servises';

function App() {
  return (
    <div>
      <Banner />
      <Header />
      <OurStories />
      <Services />
    </div>
  );
}

export default App;
