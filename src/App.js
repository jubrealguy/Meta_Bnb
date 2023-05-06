import './App.css';
import { HashRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Places from './components/Places';

function App() {
  return (
    <div className="App">
      <HashRouter Basename='/'>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/place" element={<Places />} />
          </Routes>
          <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
