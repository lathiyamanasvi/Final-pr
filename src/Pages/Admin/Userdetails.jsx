import React, { useEffect, useState } from 'react'
import Header from '../Header'
import { useAuth } from '../../Contexxt/Auth'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Leftsiderbar from './Leftsidebar';
import { MdDelete } from "react-icons/md";
import { IoAddCircleSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import './Userdetails.css';

const Userdetails = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [products,setProduct] = useState([]);
  const [cart, setCart] = useState([1, 2, 3]);
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    if (auth?.user?.role === "user") {
      navigate('/')
    }
  })


  const getUser = async () => {
    try {
      let { data } = await axios.get(`http://localhost:8000/user/${id}`);
      setUser(data);
    }
    catch (error) {
      console.log(error);
      return false;
    }
  }

  const getCart = async () => {
    try {
      let { data } = await axios.get(`http://localhost:8000/cart?user=${id}`);
      console.log(data);
      setCart(data);
    } catch (err) {
      console.log(err);
      return false;
    }
  }


  useEffect(() => {
    getUser();
    getCart();
  }, [])

  return (
    <>
      <Header />

      <div className='d-flex'>
        <div className="col-md-2">
          <Leftsiderbar />
        </div>

        <div className='col-md-10 p-5'>
          <div>
            <h1 className='fs-4'>User Details</h1>
            <div class="user-card mb-4">
              <div class="avatar">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt="" width={200} />
              </div>
              <div class="details">
                <div class="name text-dark fs-5">
                  Name:-{user.Firstname}  {user.Lastname}
                  <br />
                  Email:-{user.email}
                </div>
              </div>
            </div>

            <div className="">
              <h2 className='mt-5 fw-bold'>Cart</h2>

              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Product Name</th>
                    <th scope="col">Product Id</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    cart.map((val) => {
                      return (
                        <tr>
                          <th><img src={val.image} style={{ width: "50px", height: "50px" }} className='me-3' />{val.product}</th>
                          <td>{val.id}</td>
                          <td>{val.price}</td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Userdetails
