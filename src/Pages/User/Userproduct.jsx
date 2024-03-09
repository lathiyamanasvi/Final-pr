import React, { useEffect, useState } from 'react'
import Header from '../Header'
// import Sidebar from './Sidebar'
import axios from 'axios';
import { FaExpandArrowsAlt, FaRegHeart } from 'react-icons/fa';
import { GiShoppingBag } from 'react-icons/gi';
import { MdOutlineStar } from 'react-icons/md';
import { useAuth } from '../../Contexxt/Auth';
import { toast } from 'react-toastify';
import { Link, useNavigate, useNavigation } from 'react-router-dom';


function Userproduct() {

  const [record, setrecord] = useState([]);
  const navigate = useNavigate();
  const [auth, setauth] = useAuth();
  const [product, setProduct] = useState([])
  const [cat, setcat] = useState('');
  const [search, setsearch] = useState('');
  const [marketStateFilter, setMarketStatusFilter] = useState("");


  useEffect(() => {
    axios.get(`http://localhost:8000/product?market=${marketStateFilter}&category=${cat}`)
      .then((res) => {
        console.log(cat);
        setProduct(res.data)
      }).catch((err) => {
        console.log(err);
        return false;
      })

  }, [marketStateFilter])

  useEffect(() => {
    axios.get(`http://localhost:8000/product?category=${cat}`);

  }, [search])


  const getcategory = async () => {
    try {
      let { data } = await axios.get('http://localhost:8000/category');
      setrecord(data)
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  const getProduct = async () => {
    try {
      let { data } = await axios.get('http://localhost:8000/product');
      setProduct(data)
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  const categoryfillter = async (cate) => {
    try {
      let { data } = await axios.get(`http://localhost:8000/product?category=${cate}&market=${marketStateFilter}`)
      setcat(cate)
      setProduct(data)
    } catch (error) {
      console.log(error);
      return false
    }
  }

  useEffect(() => {
    getProduct();
    getcategory();
  }, [])

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




  return (
    <>
      <Header />
      <div className="d-flex">
        <div className="shadow col-lg-3">
          <div class="overlay" style={{ display: "none" }}></div>
          <div class="search-section">
            <div class="container-fluid container-xl">
              <div class="row main-content ml-md-0">
                <div class="sidebar px-5">
                  <h1 class="border-bottom filter-header d-flex d-md-none p-3 mb-0 align-items-center">
                    <span class="mr-2 filter-close-btn">
                      X
                    </span>
                    Filters
                    <span class="ml-auto text-uppercase">Reset Filters</span>
                  </h1>
                  <div class="sidebar__inner ">
                    <div class="filter-body">
                      <div>
                        <h2 class="border-bottom filter-title">Category</h2>
                        <div class="mb-30 filter-options">
                          {
                            record.map((val) => {
                              return (
                                <div class="form-check">
                                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={() => categoryfillter(val.category)} />
                                  <label class="form-check-label" for="flexRadioDefault1">
                                    {val.category}
                                  </label>
                                </div>
                              )
                            })
                          }
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={() => getProduct()} />
                          <label class="form-check-label" for="flexRadioDefault1">
                            All
                          </label>
                        </div>
                        ~
                        <h2 class="border-bottom filter-title">Market</h2>
                        <div onChange={(e) => setMarketStatusFilter(e.target.value)} value={marketStateFilter}>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="Latest" />
                            <label class="form-check-label" for="flexRadioDefault1">
                              Latest
                            </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="Upcoming" />
                            <label class="form-check-label" for="flexRadioDefault2">
                              Upcoming
                            </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="Best" />
                            <label class="form-check-label" for="flexRadioDefault2">
                              Best
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="d-flex flex-wrap justify-content-center">
            {
              product && product.map((val) => {
                return (
                  <div class="flex-column align-items-center justify-content-center product-item my-3 bg-white m-1 p-3" style={{ width: "18rem" }}>
                    <div class="product"> <img src={val.image} alt="" />
                      <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
                        <Link to={`/productdetails/${val.id}`}>
                          <li class="icon"><span><FaExpandArrowsAlt /></span></li>
                        </Link>
                        <li class="icon mx-
                        ]3 fs-5"><span><FaRegHeart /></span></li>
                        <li class="icon fs-5 me-3" onClick={() => Add(val.id)}><span><GiShoppingBag /></span></li>
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

export default Userproduct