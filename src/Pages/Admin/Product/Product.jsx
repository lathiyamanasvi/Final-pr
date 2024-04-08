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
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../Contexxt/Auth';

function Product() {

  const [products,setProduct] = useState([]);
  const [auth,setauth] = useAuth('');
  const navigate = useNavigate('');

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

const Add = async (id) => {
  try {
    if (!auth.user) {
      alert('user not login');
      navigate('/');
    }
    let single = await axios.get(`http://localhost:8000/product/${id}`);
    console.log(auth.user.id);
    let record = single.data;
    let duplicate = await axios.get(`http://localhost:8000/cart?user=${auth.user.id}&productId=${record.id}`);
    if (!(duplicate.data != 0)) {
      let addcart = await axios.post(`http://localhost:8000/cart`, {
        product: record.product,
        price: record.price,
        description: record.description,
        image: record.image,
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
          <Link to={'/admin/addproduct'}>        <button className='btn2 d-flex m-auto my-2'>
    Add Product
</button></Link>
          <div style={{height:"100vh",overflow:"auto"}}>
          <div className='d-flex flex-wrap justify-content-center'>
          {
          products.map((val,i)=>{i=i+1
            return(
                  <div class="flex-column align-items-center justify-content-center product-item my-3 bg-white m-3 p-3" style={{width:"18rem"}}>
                      <div class="product"> <img src={val.image} alt="" style={{objectFit:"contain"}}/>
                          <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
                            <Link to={`/productdetails/${val.id}`}>
                            <li class="icon" ><span><FaExpandArrowsAlt /></span></li>
                            </Link>
                              
                              <li class="icon fs-5 mx-3" onClick={() => Add(val.id)}><span><GiShoppingBag /></span></li>
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
