import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import Leftsiderbar from '../Leftsidebar'
import Header from '../../Header'
import axios from 'axios';
import  './Product.css';
import { FaRegHeart } from "react-icons/fa6";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { MdOutlineStar } from "react-icons/md";
import { MdDelete } from "react-icons/md";

function Product() {

  const [products,setProduct] = useState([]);

  const getProduct = async() => {
    try{
        let {data} = await axios.get(`http://localhost:8000/product`);
        setProduct(data);
    }catch(err){
        console.log(err);
        return false;
    }
}

const deleteproduct = async(id) => {
  try {
    let {data} = await axios.delete(`http://localhost:8000/product/${id}`)
    const updatedProducts = products.filter(product => product.id !== id);
    setProduct(updatedProducts);
  } catch (error) {
    console.log(error);
    return false;
  }
}

useEffect(()=>{
  getProduct();
},[])

  return (
    <>
      <Header />
      <div className='d-flex'>
        <div className='col-md-2'>
          <Leftsiderbar style={{height:"100vh!important"}}/>
        </div>
        <div className='col-md-10'>
        <button className='btn2 d-flex m-auto my-2'>
    Add Product
</button>
          <div style={{height:"100vh",overflow:"auto"}}>
          <div className='d-flex flex-wrap justify-content-center'>
          {
          products.map((val,i)=>{i=i+1
            return(
                  <div class="flex-column align-items-center justify-content-center product-item my-3 bg-white m-3 p-3" style={{width:"18rem"}}>
                      <div class="product"> <img src={val.image} alt=""/>
                          <ul class="d-flex align-items-center justify-content-between list-unstyled icons">
                              <li class="icon"><span><FaExpandArrowsAlt /></span></li>
                              <li class="icon mx-5 fs-5"><span><FaRegHeart /></span></li>
                              <li class="icon fs-5 me-3"><span><GiShoppingBag /></span></li>
                              <li class="icon fs-5" onClick={()=>deleteproduct(val.id)}><span><MdDelete /></span></li>
                          </ul>
                      </div>
                      <div class="title pt-4 pb-1 text-center fw-bolder">{val.product}</div>
                      <div class="d-flex align-content-center justify-content-center"> <span className='fs-5' style={{color:"#DAA520"}}><MdOutlineStar /></span> <span class="fas fa-star"></span> <span className='fs-5' style={{color:"#DAA520"}}><MdOutlineStar /></span> <span class="fas fa-star"></span> <span className='fs-5' style={{color:"#DAA520"}}><MdOutlineStar /></span> <span class="fas fa-star"></span><span className='fs-5' style={{color:"#DAA520"}}><MdOutlineStar /></span> <span class="fas fa-star"></span><span className='fs-5' style={{color:"#DAA520"}}><MdOutlineStar /></span> <span class="fas fa-star"></span> </div>
                      <div class="price text-center">{val.price}</div>
                  </div>
            )
          })
        }
  
          </div>
          </div>
          <ToastContainer />
        </div>
      </div>
    </>
  )
}

export default Product
