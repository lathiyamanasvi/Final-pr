import React, { useEffect, useState } from 'react'
import Header from '../Header'
import { useAuth } from '../../Contexxt/Auth'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Leftsiderbar from './Leftsidebar';
import { FaExpandArrowsAlt, FaRegHeart } from 'react-icons/fa';
import { GiShoppingBag } from 'react-icons/gi';
import { MdOutlineStar } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './Userdetails.css';

const Userdetails = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [cart, setCart] = useState([1,2,3]);
  const [auth, setAuth] = useAuth();

  useEffect(()=>{
    if(auth?.user?.role === "user"){
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

const Add = async(id) => {
  try {
    if(!auth.user){
      alert('user not login')
    }
    let single = await axios.get(`http://localhost:8000/product/${id}`);
    console.log(auth.user.id);
    let record = single.data;
    let duplicate = await axios.get(`http://localhost:8000/cart?user=${auth.user.id}&productId=${record.id}`);
    if(!(duplicate.data !=0)){
      let addcart = await axios.post(`http://localhost:8000/cart`,{
        product : record.product,
        price : record.price,
        description :record.description,
        image:record.image,
        user: auth.user.id,
        productId: record.id
      })
      alert("successfully added") 
    }
    else {
      alert("Product already Exist");
      return false;
  }
  } catch (error) {
    console.log(error);
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
          <Leftsiderbar/>
        </div>

        <div className='col-md-10 p-5'>
          <div style={{height:"100vh",overflow:"auto"}}>
          <h1 className='fs-4'>User Details</h1>
            <div class="user-card" style={{marginLeft:"300px"}}>
              <div class="avatar">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt="" width={200} />
              </div>
              <div class="details">
                <div class="name text-dark fs-5">
               {user.email}<br/>
                  {user.password}
                </div>
              </div>
            </div>

          <div className="">
            <h1>Cart</h1>
            
              <div className="d-flex flex-wrap">
            {
              cart.map((val)=>{
                return (
                      <div class="flex-column align-items-center justify-content-center product-item my-3 bg-white m-1 p-3" style={{ width: "18rem" }}>
                        <div class="product"> <img src={val.image} alt="" />
                          <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
                            <Link to={`/productdetails/${val.id}`}>
                              <li class="icon"><span><FaExpandArrowsAlt /></span></li>
                            </Link>
                            <li class="icon mx-
                            ]3 fs-5"><span><FaRegHeart /></span></li>
                            <li class="icon fs-5 me-3" onClick={()=>Add(val.id)}><span><GiShoppingBag /></span></li>
                          </ul>
                        </div>
                        <div class="title pt-4 pb-1 text-center fw-bolder">{val.product}</div>
                        <div class="d-flex align-content-center justify-content-center"> <span className='fs-5' style={{ color: "#DAA520" }}><MdOutlineStar /></span> <span class="fas fa-star"></span> <span className='fs-5' style={{ color: "#DAA520" }}><MdOutlineStar /></span> <span class="fas fa-star"></span> <span className='fs-5' style={{ color: "#DAA520" }}><MdOutlineStar /></span> <span class="fas fa-star"></span><span className='fs-5' style={{ color: "#DAA520" }}><MdOutlineStar /></span> <span class="fas fa-star"></span><span className='fs-5' style={{ color: "#DAA520" }}><MdOutlineStar /></span> <span class="fas fa-star"></span> </div>
                        <div class="price text-center">{val.price}</div>
                      </div>
                )
              })
            }
            </div>
              


          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Userdetails
