import React, { useEffect, useState } from 'react';
import {GiWallet} from "react-icons/gi";
import {HiOutlineUserCircle} from "react-icons/hi";
import {IoMdLogOut} from "react-icons/io";
import { getBanks, myInfo, resetPin, verifyBankAccount, withDrawFunds } from '../../../services/authService';
import LogoutButton from "../../../components/Sidebar/LogoutButton";
import Loader from "../../../components/loader/Loader";
import RedirectLoggedOutUser from '../../../middleware/redirectLoggedOutUser';
import { toast } from 'react-toastify';
import Modal from "react-modal";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const initialState = {
  amount: "",
  pin: ""
}
const Profile = () => {
  RedirectLoggedOutUser("/login");
  const [user, setUser] = useState('');
  const [bankId, setBankId] = useState('');
  const [accountNumber, setAccountNumber] = useState("");
  const [banks, setBanks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [withdrawData, setWithdrawData ] = useState(initialState);
  const {amount, pin} = withdrawData;

  const  handleInputChange = (e) => {
    const {name, value} = e.target;
    setWithdrawData({...withdrawData, [name]: value})
  }

  let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }

  useEffect(() => {
    setIsLoading(true);
      async function getUserData(){
          const data = await myInfo();
          setUser(data);
          setAccountNumber(data.accountNumber);
          setBankId(data.bankId);
          setIsLoading(false);
      }getUserData();
  }, []);

  useEffect(() => {
    setIsLoading(true);
    async function  getActiveBanks(){
      const data = await getBanks();
      setBanks(data);
      setIsLoading(false);
    }getActiveBanks();
  }, []);

  const sendRestPin = async() => {
    try {
      setIsLoading(true);
      await resetPin();
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  }

  const verifyBank = async() => {
    if(!bankId){
      return toast.error("Please kindly select your bank");
    }
    if(!accountNumber){
      return toast.error("Please provide your account Number");
    }
    if(bankId === '0' || bankId === 0){
      return toast.error("Please kindly select your bank");
    }
    
    setIsLoading(true);

    const formData = {
      bank: bankId,
      account_number: accountNumber,
      currency: "NGN",
      type: "nuban"
    }
    try {
       await verifyBankAccount(formData);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      
    }
  }

  const withdraw = async (e) => {
    e.preventDefault();
    if(!amount){
      return toast.error("Please provide amount");
    }
    if(!pin){
      return toast.error("Please provide PIN");
    }
    const userData = {
      amount,
      pin
    }
    setIsLoading(true);
    try {
      const data = await withDrawFunds(userData);
      setIsLoading(false);
      if(data.message === "Transaction Successful"){
        closeModal();
      }
    } catch (error) {
      setIsLoading(false);
    }
  }


  return (
    <>
    {isLoading && <Loader />}
    <h2>My Profile</h2>
    <p>Total Balance</p>
    {user === '' ? (<></>) : (
       <h2><GiWallet size={20}/> 
       {`₦${user?.balance.toLocaleString(undefined, {maximumFactorDigits: 2})}`}
       <div className='float-right'>
       <button onClick={sendRestPin} className='btn-success'>Reset Pin </button> <button onClick={openModal} className='btn-success-out'> Withdraw</button>
       </div>
       </h2>
       )}
    <br/>
      <div className='dashboard_card'>
          <div className='profile profile-box'>
              <div>
                    <HiOutlineUserCircle size={60} className='dashboard-icon' />
                    <h4>Profile Name: {`${user?.firstName} ${user?.lastName}`} <br/> Acc. Name: {user?.accountName}</h4>
                      <label>Account Number:</label>
                      <input type="number" name="accountNumber" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} placeholder='Account Number' />
                      <br/>
                      <label>Bank:</label> 
                      <br/>
                      <select required name='bankId' value={bankId} onChange={(e) => setBankId(e.target.value)}>
                        {user.bankStatus === "ctive" ? (
                          <option value={user.bankId}>{user.bank}</option>  
                        ) : (
                          <option value={0}>Select Your Bank</option>
                        )}
                        {banks.map((bank) => {
                          return(
                        <option value={bank.id}>{bank.name}</option>
                        )
                      })}
                        
                      </select>
                      <br/>
                      <button type='button' onClick={verifyBank} className='btn-success'>Verify your Bank Account</button> 
                      <br/>
                      <br/>
                      <hr/>
                      <br/>


                    
                </div>
          </div>
      </div>
      <div className='dashboard_card'>
          <div className='profile_footer'>
                <ul>
                <li><IoMdLogOut size={20} />  <LogoutButton /></li>
                </ul>
          </div>
          <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Withdraw Funds</h2>
        <form onSubmit={withdraw}>
                            <div className='form-group'>
                            <label>Amount:</label>
                            <input type="number" placeholder='Amount' required className='form-control' 
                              name="amount" value={amount} onChange={handleInputChange} />
                            </div>
                            <div className='form-group'>
                            <label>PIN:</label>
                            <input type="password" id='password' placeholder='PIN' required className='form-control' 
                              name="pin" value={pin} onChange={handleInputChange} />
                              
                            </div>
                            <div className='withdraw-form-btn'>
                                <button type='submit' className='btn btn-success'> Withdraw </button> <button className='btn btn-danger' onClick={closeModal}>close</button>
                            </div>
        </form>
        
      </Modal>
      </div>
    </>
  )
}

export default Profile
