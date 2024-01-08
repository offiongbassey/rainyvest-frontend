import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
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
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getLoginStatus } from './services/authService';
import { selectRole, SET_LOGIN } from './redux/features/auth/authSlice';
import AdminEditProduct from './pages/account/products/AdminEditProduct';
import TestChart from './pages/account/products/TestChart';
import StockItem from './pages/account/stock/StockItem';
import ChangePin from './pages/auth/ChangePin';
import AdminTransactions from './pages/account/transaction/AdminTransactions';
import AdminStockItem from './pages/account/stock/AdminStockItem';
import AdminViewProduct from './pages/account/products/AdminViewProduct';
import AdminViewUserProfile from './pages/account/profile/AdminViewUserProfile';
import AdminUserTransactions from './pages/account/profile/AdminUserTransactions';
import PageNotFound from './pages/pageNotFound/PageNotFound';

axios.defaults.withCredentials = true;

function App() {
  const role = useSelector(selectRole);
  let dashboard = '/';
  if(role === "Admin"){
    dashboard = '/admin/dashboard';
  }else if(role === 'User'){
    dashboard = '/dashboard';
  }else{
    dashboard = '/login';
  }
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
        {/* user dashboard */}
        <Route path="/dashboard" element={role === 'User' ?(
                    <>
                    <Sidebar>
                    <UserDashboard />
                    </Sidebar>
                    </>
        ) : (<Navigate to={dashboard} />)

        }
        />
        <Route path='/market' element={role === "User" ? (
          <>
          <Sidebar >
            <Market />
          </Sidebar>
          </>
          ) : (<Navigate to={dashboard} />)
        }
        />
         <Route path='/market/:url' element={role === "User" ? (
          <>
          <Sidebar >
            <MarketItem />
          </Sidebar>
          </>
          ) : (<Navigate to={dashboard} />)
        }
        />
         <Route path='/market-payment/:stockCode' element={role === "User" ? (
          <>
          <Sidebar >
            <MarketPayment />
          </Sidebar>
          </>
          ) : (<Navigate to={dashboard} />)
        }
        />
        <Route path='/stock/:stockCode' element={role === "User" ? (
          <>
          <Sidebar>
            <StockItem />
          </Sidebar>
          </>
          ) : (<Navigate to={dashboard} />)
        }
        />
        <Route path='/stock' element={role === "User" ? (
          <>
          <Sidebar>
            <Stock />
          </Sidebar>
          </>
          ) : (<Navigate to={dashboard} />)
        }
        />
        <Route path="/transaction" element={role === "User" ? (
          <>
          <Sidebar>
            <Transaction />
          </Sidebar>
          </>
          ) : (<Navigate to={dashboard} />)
        }
        />
        <Route path="/profile" element={role === "User" ? (
          <>
          <Sidebar>
            <Profile />
          </Sidebar>
          </>
                    ) : (<Navigate to={dashboard} />)
        }
        />
        <Route path="/admin/dashboard" element={role === "Admin" ? (
          <>
          <AdminSidebar >
            <AdminDashboard/>
          </AdminSidebar>
          </>
          ) : (<Navigate to={dashboard} />)
        }
        />
        <Route path="/admin/users" element={role === "Admin" ? (
          <>
          <AdminSidebar >
            <AdminUsers />
          </AdminSidebar>
          </>
          ) : (<Navigate to={dashboard} />)
        }
        />
        <Route path="/admin/products" element={role === "Admin" ? (
          <>
          <AdminSidebar >
            <AdminProducts />
          </AdminSidebar>
          </>
          ) : (<Navigate to={dashboard} />)
        }
        />
         <Route path="/admin/add-product" element={role === "Admin" ? (
          <>
          <AdminSidebar >
            <AdminAddProduct />
          </AdminSidebar>
          </>
          ) : (<Navigate to={dashboard} />)
        }
        />
         <Route path="/admin/test" element={role === "Admin" ? (
          <>
          <AdminSidebar >
            <TestChart />
          </AdminSidebar>
          </>
          ) : (<Navigate to={dashboard} />)
        }
        />
         <Route path="/admin/edit-product/:id" element={role === "Admin" ? (
          <>
          <AdminSidebar >
            <AdminEditProduct />
          </AdminSidebar>
          </>
          ) : (<Navigate to={dashboard} />)
        }
        />
        <Route path='/admin/product/:id' element={role === "Admin" ? (
          <>
          <AdminSidebar>
            <AdminViewProduct />
          </AdminSidebar>
          </>
          ) : (<Navigate to={dashboard} />)
        }
        />
        <Route path='/admin/user-transactions/:id' element={role === "Admin" ? (
          <>
          <AdminSidebar>
            <AdminUserTransactions />
          </AdminSidebar>
          </>
          ) : (<Navigate to={dashboard} />)
        }
        />
         <Route path='/admin/user-profile/:id'  element={role === "Admin" ? (
          <>
          <AdminSidebar>
            <AdminViewUserProfile />
          </AdminSidebar>
          </>
          ) : (<Navigate to={dashboard} />)
        }
        />
        <Route path="/admin/stock"  element={role === "Admin" ? (
          <>
          <AdminSidebar >
            <AdminStock />
          </AdminSidebar>
          </>
          ) : (<Navigate to={dashboard} />)
        }
        />
        <Route path='/admin/stock/:stockCode' element={role === "Admin" ? (
          <>
          <AdminSidebar>
            <AdminStockItem />
          </AdminSidebar>
          </>
          ) : (<Navigate to={dashboard} />)
        }
        />
        <Route path="/admin/transactions"  element={role === "Admin" ? (
          <>
          <AdminSidebar >
            <AdminTransactions />
          </AdminSidebar>
          </>
          ) : (<Navigate to={dashboard} />)
        }
        />
        <Route path="/admin/profile"  element={role === "Admin" ? (
          <>
          <AdminSidebar >
            <AdminProfile />
          </AdminSidebar>
          </>
          ) : (<Navigate to={dashboard} />)
        }
        />
        <Route path="*" element={
          <>
          <Navbar />
          <PageNotFound />
          <Footer/>
          </>
        }
        />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
