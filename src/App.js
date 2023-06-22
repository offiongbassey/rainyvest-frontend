import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import About from './pages/about/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <>
          <Navbar />
          <Home />
          <Footer />
          </>
        }
        />
        <Route path="/about" element={
          <>
          <Navbar />
          <About />
          <Footer />
          </>
        }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
