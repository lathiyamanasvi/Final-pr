import React, { useEffect, useState } from 'react'
import 'jquery-ui-dist/jquery-ui';
import $ from 'jquery'
import './User.css'
import Header from '../Header';
import axios from 'axios';
import { FaRegHeart } from "react-icons/fa6";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { MdOutlineStar } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdLocalShipping } from "react-icons/md";
import { CgRedo } from "react-icons/cg";
import { Link } from 'react-router-dom';
import Slider from './Home/Slider';
import BannerBottom from './Home/BannerBottom';
import Gallery from './Home/Gallery';
import NewArrivel from './Home/NewArrivel';


function Home() {
  const [product, setProduct] = useState([]);

  const getProduct = async () => {
    let { data } = await axios.get(`http://localhost:8000/product?market=Best`);
    setProduct(data);
  }

  useEffect(() => {
    getProduct();
  }, [])
  return (
    <>
      <Header />
      <Slider/>
      <BannerBottom class="my-5"/>
      <Gallery/>
      <NewArrivel class="my-5"/>

      <div className="">
        <div className="container">
          <h2 className='d-flex justify-content-start fs-2 fw-bold' style={{paddingLeft:"90px"}}>BEST SELLER</h2>
          <div className="d-flex flex-wrap justify-content-center">
            {
              product.map((val) => {
                return (
                  <div class="flex-column align-items-center justify-content-center product-item my-3 bg-white m-3 p-3" style={{ width: "18rem" }}>
                    <div class="product"> <img src={val.image} alt="" />
                      <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
                        <li class="icon"><span><FaExpandArrowsAlt /></span></li>
                        <li class="icon mx-3 fs-5"><span><FaRegHeart /></span></li>
                        <li class="icon fs-5 me-3"><span><GiShoppingBag /></span></li>
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
    </>
  )
}

export default Home
