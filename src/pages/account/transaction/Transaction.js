import React from 'react';
import "../Account.css";

const Transaction = () => {
  return (
    <>
    <h2>Transactions</h2>
    <br/>
    <div className='dashboard_card'>
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
                  <tr>
                      <td>2928928928928</td>
                      <td>N3,500</td>
                      <td>Successful</td>
                      <td>Funds withdrawal</td>
                      <td>Mon 24th Aug 6:30pm</td>
                  </tr>
                  <tr>
                      <td>2928928928928</td>
                      <td>N3,500</td>
                      <td>Successful</td>
                      <td>Funds withdrawal</td>
                      <td>Mon 24th Aug 6:30pm</td>
                  </tr>
                  <tr>
                      <td>2928928928928</td>
                      <td>N3,500</td>
                      <td>Successful</td>
                      <td>Funds withdrawal</td>
                      <td>Mon 24th Aug 6:30pm</td>
                  </tr>
                  <tr>
                      <td>2928928928928</td>
                      <td>N3,500</td>
                      <td>Successful</td>
                      <td>Funds withdrawal</td>
                      <td>Mon 24th Aug 6:30pm</td>
                  </tr>
              </tbody>
          </table>

      </div>
      
    </div>
    </>
  )
}

export default Transaction
