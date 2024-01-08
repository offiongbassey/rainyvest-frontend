import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../../components/loader/Loader';
import { getUsers } from '../../../services/authService';
import ReactPaginate from "react-paginate";

const AdminUsers = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    
    useEffect(() => {
      setIsLoading(true);
        async function fetchUsers(){
            const data = await getUsers();
            setUsers(data);
            setIsLoading(false);
        }   
        fetchUsers();
    }, []);


     //begin pagination
    
  const [currentItmes, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
      const endOffset = itemOffset + itemsPerPage;

      setCurrentItems(users.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(users.length / itemsPerPage));

  }, [itemOffset, itemsPerPage, users]);

  const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage)
       % users.length;
       setItemOffset(newOffset);
  }
  

  //end pagination
  return (
    <>
    {isLoading && <Loader />}
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
                      <th>Role</th>
                      <th>Date</th>
                  </tr>
              </thead>
              <tbody>
                {currentItmes?.map((user) => {
                    const {id, firstName, lastName, role, email, phone, createdAt} = user;
                return(
                  <tr key={id}>
                      <td><Link to={`/admin/user-profile/${id}`} >{`${firstName} ${lastName}`}</Link></td>
                      <td>{email}</td>
                      <td>{phone}</td>
                      <td>{role}</td>
                      <td>{createdAt}</td>
                  </tr>
                  )
                })}
              </tbody>
          </table>

      </div>
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

export default AdminUsers
