import React, { useEffect, useState } from 'react';
import { getMyTransactions } from '../../../services/transactionService';
import "../Account.css";
import ReactPaginate from "react-paginate";
import Loader from '../../../components/loader/Loader';

const Transaction = () => {
    
    const [transactions, setTransactions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        async function getTransactions(){
            const data = await getMyTransactions();
            setTransactions(data);
            setIsLoading(false);
        }getTransactions();
    }, []);

    //begin pagination
    
  const [currentItmes, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
      const endOffset = itemOffset + itemsPerPage;

      setCurrentItems(transactions.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(transactions.length / itemsPerPage));

  }, [itemOffset, itemsPerPage, transactions]);

  const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage)
       % transactions.length;
       setItemOffset(newOffset);
  }
  

  //end pagination
  return (
    <>
    {isLoading && <Loader />}
    <h2>Transactions</h2>
    <br/>
    <div className='dashboard_card'>
        {transactions.length > 1 ? (
      <div className='table'>
          <table>
              <thead>
                  <tr>
                      <th>Transaction Ref</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th>Desc</th>
                      <th>Date</th>
                  </tr>
              </thead>
              <tbody>
                  {currentItmes.map((transaction, index) => {
                      const {id, transactionCode, amount, type, status, createdAt} = transaction;
                      return(
                  <tr key={id}> 
                      <td>{transactionCode}</td>
                      <td>{`₦${amount.toLocaleString(undefined, {maximumFactorDigits: 2})}`}</td>
                      <td>{status}</td>
                      <td>{type}</td>
                      <td>{createdAt}</td>
                  </tr>
                  )
                })
                }
            
              </tbody>
          </table>
      </div>
      ): (<div className='text-center'><h4>No Data Available</h4></div>)}
      <ReactPaginate
                    breakLabel="..."
                    nextLabel="Next"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={10}
                    pageCount={pageCount}
                    previousLabel="Prev"
                    renderOnZeroPageCount={null}
                    containerClassName="pagination"
                    pageLinkClassName='page-num'
                    previousLinkClassName='page-num'
                    nextLinkClassName='page-num'
                    activeLinkClassName='activePage'

                />
    </div>
    </>
  )
}

export default Transaction
