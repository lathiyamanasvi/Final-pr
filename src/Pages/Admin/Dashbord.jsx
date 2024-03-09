import React, { useEffect, useState } from 'react';
import Leftsiderbar from './Leftsidebar';
import Header from '../Header'
import { useAuth } from '../../Contexxt/Auth';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const Dashboard = () => {

  const [user, setUser] = useState([]);
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  useEffect(()=>{
    if(auth?.user?.role === "user"){
      navigate('/')
    }
  })

  const getUsers = async () => {
    try {
      let { data } = await axios.get(`http://localhost:8000/user?role=user`);
      setUser(data)
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  useEffect(() => {
    getUsers();
  }, [])

  return (
    <div>
      <Header />
      <div className='d-flex'>
        <div className="col-md-2">
          <Leftsiderbar />
        </div>

        <div className='col-md-10'>
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">SrNo</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
             {
              user.map((val,i)=>{i=i+1
                return(
                  <tr>
                  <th scope="row">{i}</th>
                  <td>{val.Firstname}</td>
                  <td>{val.email}</td>
                  <td className='d-flex justify-content-between'>
                    <Link to={`/details/${val.id}`}><button className='btn btn-success btn-sm'>View</button></Link>
                    <Link><button className='btn btn-danger btn-sm mx-2'>Delete</button></Link>
                    <button className='btn btn-primary btn-sm'>Edit</button>
                  </td>
                </tr>
                )
              })
             }
            </tbody>
          </table>
        </div>
      </div>


    </div>
  )
}

export default Dashboard