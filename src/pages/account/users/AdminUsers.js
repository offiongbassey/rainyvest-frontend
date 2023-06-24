import React from 'react'

const AdminUsers = () => {
  return (
    <>
      <h2>Users</h2>
    <br/>
    <div className='dashboard_card'>
      <div className='table'>
          <table>
              <thead>
                  <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Date</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>Moses Otu</td>
                      <td>moses@gmail.com</td>
                      <td>08096097539</td>
                      <td>Mon 24th Aug 6:30pm</td>
                  </tr>
                  <tr>
                      <td>Daniel Emma</td>
                      <td>daniel@gmail.com</td>
                      <td>08096097539</td>
                      <td>Mon 24th Aug 6:30pm</td>
                  </tr>
                  <tr>
                      <td>Mary Idago</td>
                      <td>mary@gmail.com</td>
                      <td>08096097539</td>
                      <td>Mon 24th Aug 6:30pm</td>
                  </tr>
                  <tr>
                      <td>Susan Enock</td>
                      <td>susan@gmail.com</td>
                      <td>08096097539</td>
                      <td>Mon 24th Aug 6:30pm</td>
                  </tr>
              </tbody>
          </table>

      </div>
      
    </div>
    </>
  )
}

export default AdminUsers
