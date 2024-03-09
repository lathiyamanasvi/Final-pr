import React, { useEffect, useState } from 'react'
import Header from '../../Header'
import axios from 'axios'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { useParams } from 'react-router-dom';
import { useAuth } from '../../../Contexxt/Auth';

const Productdetails = () => {

  const {id} = useParams();
  const [product,setProduct] = useState({});
  const[auth,setAuth] = useAuth();

  const getProduct = async() => {
   try {
    let {data} = await axios.get(`http://localhost:8000/product/${id}`);
    setProduct(data);
   } catch (error) {
    console.log(error);
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

  useEffect(()=>{
    getProduct();
  },[])
  return (
    <>
      <Header/>
      <div class="card mt-5">
  <nav>
  <MdKeyboardArrowLeft class="arrow"/>
    Back to all Plants
    <CiHeart class="heart"/>
  </nav>
  <div className="d-flex">
  <div class="photo">
    <img src={product.image}/>
  </div>
  <div class="description">
    <h2>{product.product}</h2>
    <h1>{product.price}</h1>
    <p>{product.description}</p>
    <button onClick={()=>Add(product.id)}>Add to Cart</button>
    <button>Wishlist</button>
  </div>
  </div>
</div>
    </>
  )
}

export default Productdetails
