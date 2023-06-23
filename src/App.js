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
import UserDashboard from './pages/account/dashboard/UserDashboard';
import Sidebar from './components/Sidebar/Sidebar';
import Market from './pages/account/market/Market';
import Stock from './pages/account/stock/Stock';
import Transaction from './pages/account/transaction/Transaction';
import Profile from './pages/account/profile/Profile';
import AdminSidebar from './components/Sidebar/AdminSidebar';
import AdminDashboard from './pages/account/dashboard/AdminDashboard';
import AdminUsers from './pages/account/users/AdminUsers';
import AdminProfile from './pages/account/profile/AdminProfile';
import AdminWithdraw from './pages/account/withdraw/AdminWithdraw';
import AdminPayments from './pages/account/payments/AdminPayments';
import AdminStock from './pages/account/stock/AdminStock';
import AdminProducts from './pages/account/products/AdminProducts';

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
        <Route path="/resend" element={
          <>
          <Navbar />
          <ResendMail />
          <Footer />
          </>
        }
        />
        <Route path="/change-password" element={
          <>
          <Navbar />
          <ResetPassword />
          <Footer/>
          </>
        }
        />
        <Route path="/dashboard" element={
          <>
          <Sidebar>
          <UserDashboard />
          </Sidebar>
          </>
        }
        />
        <Route path='/market' element={
          <>
          <Sidebar >
            <Market />
          </Sidebar>
          </>
        }
        />
        <Route path='/stock' element={
          <>
          <Sidebar>
            <Stock />
          </Sidebar>
          </>
        }
        />
        <Route path="/transaction" element={
          <>
          <Sidebar>
            <Transaction />
          </Sidebar>
          </>
        }
        />
        <Route path="/profile" element={
          <>
          
          <Sidebar>
            <Profile />
          </Sidebar>
          </>
        }
        />
        <Route path="/admin/dashboard" element={
          <>
          <AdminSidebar >
            <AdminDashboard/>
          </AdminSidebar>
          </>
        }
        />
        <Route path="/admin/users" element={
          <>
          <AdminSidebar >
            <AdminUsers />
          </AdminSidebar>
          </>
        }
        />
        <Route path="/admin/products" element={
          <>
          <AdminSidebar >
            <AdminProducts />
          </AdminSidebar>
          </>
        }
        />
        <Route path="/admin/stock" element={
          <>
          <AdminSidebar >
            <AdminStock />
          </AdminSidebar>
          </>
        }
        />
        <Route path="/admin/payments" element={
          <>
          <AdminSidebar >
            <AdminPayments />
          </AdminSidebar>
          </>
        }
        />
        <Route path="/admin/withdraws" element={
          <>
          <AdminSidebar >
            <AdminWithdraw />
          </AdminSidebar>
          </>
        }
        />
        <Route path="/admin/profile" element={
          <>
          <AdminSidebar >
            <AdminProfile />
          </AdminSidebar>
          </>
        }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
