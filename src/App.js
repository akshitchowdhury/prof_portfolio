import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Gallery from './components/Gallery/Gallery';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      
      <Router>
      
          <Routes>         
            <Route path="/" element={<Home />} />
          
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery/>} />
            <Route path="/services" element={<Services/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
          
          <Footer/>
        </Router>
        
    </div>
  );
}

export default App;
