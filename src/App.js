import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import axios from "axios";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
import AdminStock from './pages/account/stock/AdminStock';
import AdminProducts from './pages/account/products/AdminProducts';
import MarketItem from './pages/account/market/MarkekItem';
import MarketPayment from './pages/account/market/MarketPayment';
import AdminAddProduct from './pages/account/products/AdminAddProduct';
import ConfirmEmail from './pages/auth/ConfirmEmail';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getLoginStatus } from './services/authService';
import { SET_LOGIN } from './redux/features/auth/authSlice';
import AdminEditProduct from './pages/account/products/AdminEditProduct';
import TestChart from './pages/account/products/TestChart';
import StockItem from './pages/account/stock/StockItem';
import ChangePin from './pages/auth/ChangePin';
import AdminTransactions from './pages/account/transaction/AdminTransactions';
import AdminStockItem from './pages/account/stock/AdminStockItem';
import AdminViewProduct from './pages/account/products/AdminViewProduct';
import AdminViewUserProfile from './pages/account/profile/AdminViewUserProfile';
import AdminUserTransactions from './pages/account/profile/AdminUserTransactions';

axios.defaults.withCredentials = true;

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function loginStatus(){
      const status = await getLoginStatus();
      dispatch(SET_LOGIN(status));
    }loginStatus();
  },[dispatch]);
  return (
    <BrowserRouter>
     <ToastContainer />
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
        <Route path="/resetpassword/:token" element={
          <>
          <Navbar />
          <ResetPassword />
          <Footer/>
          </>
        }
        />
        <Route path="/reset-pin/:token" element={
          <>
          <Navbar />
          <ChangePin />
          <Footer/>
          </>
        }
        />
        
        <Route path="/confirm-email/:token" element={
          <>
          <Navbar />
          <ConfirmEmail />
          <Footer />
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
         <Route path='/market/:url' element={
          <>
          <Sidebar >
            <MarketItem />
          </Sidebar>
          </>
        }
        />
         <Route path='/market-payment/:stockCode' element={
          <>
          <Sidebar >
            <MarketPayment />
          </Sidebar>
          </>
        }
        />
        <Route path='/stock/:stockCode' element={
          <>
          <Sidebar>
            <StockItem />
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
         <Route path="/admin/add-product" element={
          <>
          <AdminSidebar >
            <AdminAddProduct />
          </AdminSidebar>
          </>
        }
        />
         <Route path="/admin/test" element={
          <>
          <AdminSidebar >
            <TestChart />
          </AdminSidebar>
          </>
        }
        />
         <Route path="/admin/edit-product/:id" element={
          <>
          <AdminSidebar >
            <AdminEditProduct />
          </AdminSidebar>
          </>
        }
        />
        <Route path='/admin/product/:id' element={
          <>
          <AdminSidebar>
            <AdminViewProduct />
          </AdminSidebar>
          </>
        }
        />
        <Route path='/admin/user-transactions/:id' element={
          <>
          <AdminSidebar>
            <AdminUserTransactions />
          </AdminSidebar>
          </>
        }
        />
         <Route path='/admin/user-profile/:id' element={
          <>
          <AdminSidebar>
            <AdminViewUserProfile />
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
        <Route path='/admin/stock/:stockCode' element={
          <>
          <AdminSidebar>
            <AdminStockItem />
          </AdminSidebar>
          </>
        }
        />
        <Route path="/admin/transactions" element={
          <>
          <AdminSidebar >
            <AdminTransactions />
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
