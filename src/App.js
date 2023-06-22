import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import About from './pages/about/About';
import SignUp from './pages/auth/SignUp';
import Login from './pages/auth/Login';
import Forgot from './pages/auth/Forgot';
import ResendMail from './pages/auth/ResendMail';
import ResetPassword from './pages/auth/ResetPassword';

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
        <Route path="/signup" element={
          <>
          <Navbar />
          <SignUp />
          <Footer />
          </>
        }
        />
        <Route path="/login" element={
          <>
          <Navbar />
          <Login />
          <Footer />
          </>
        }
        />
        <Route path="/forgot-password" element={
          <>
          <Navbar />
          <Forgot />
          <Footer />
          </>
        }
        />
        <Route path ="/resend" element={
          <>
          <Navbar />
          <ResendMail />
          <Footer />
          </>
        }
        />
        <Route path ="/change-password" element={
          <>
          <Navbar />
          <ResetPassword />
          <Footer/>
          </>
        }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
