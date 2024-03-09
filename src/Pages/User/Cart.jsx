import React, { useEffect, useState } from 'react'
import { useAuth } from '../../Contexxt/Auth';
import axios from 'axios';
import { FaExpandArrowsAlt, FaRegHeart } from 'react-icons/fa';
import { GiShoppingBag } from 'react-icons/gi';
import { MdOutlineStar } from 'react-icons/md';
import { MdDelete } from "react-icons/md";
import Header from '../Header';
import { Link } from 'react-router-dom';

function Cart() {
    const [cart,setcart] = useState([]);
    const [auth,setauth] =useAuth();

    const getcart = async() =>{
        try {
            let {data} = await axios.get(`http://localhost:8000/cart?user=${auth.user.id}`);
            setcart(data);
        } catch (error) {
            console.log(error);
            return false;
        }
    }
    const deleteproduct = async(id) => {
      try {
        let {data} = await axios.delete(`http://localhost:8000/cart/${id}`)
        const updatedProducts = cart.filter(val => val.id !== id);
        setcart(updatedProducts);
      } catch (error) {
        console.log(error);
        return false;
      }
    }
    useEffect(()=>{
        getcart()
    },[auth.user?.id])
  return (
   <>
    <Header/>

    <div className="d-flex flex-wrap justify-content-center">
            {
              cart.map((val) => {
                return (
                  <div class="flex-column align-items-center justify-content-center product-item my-3 bg-white m-3 p-3" style={{ width: "18rem" }}>
                    <div class="product"><img src={val.image} alt="" />
                      <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
                        <Link to={`/productdetails/${val.id}`}>
                        <li class="icon"><span><FaExpandArrowsAlt /></span></li>
                        </Link>
                        
                        <li class="icon mx-3 fs-5"><span><FaRegHeart /></span></li>
                        <li class="icon fs-5 me-3"><span><GiShoppingBag /></span></li>
                        <li class="icon fs-5 me-3" onClick={()=>deleteproduct(val.id)}><span><MdDelete /></span></li>
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

   </>
  )
}

export default Cart
