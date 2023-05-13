import './App.css';
import { HashRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Places from './components/Places';
import SectionNft from './components/SectionNft';
import Adventure from './components/Adventures';

function App() {
  return (
    <div className="App">
      <HashRouter Basename='/'>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/place" element={<Places />} />
            <Route path="/nft" element={<SectionNft />} />
            <Route path="/community" element={<Adventure />} />
          </Routes>
          <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
