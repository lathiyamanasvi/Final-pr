import React, { useEffect, useState } from 'react'
import Header from '../../Header'
import Leftsiderbar from '../Leftsidebar'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../../../Contexxt/Auth';
import { useNavigate } from 'react-router-dom';

function Add() {

  const [category, setCategory] = useState("");
  const [auth,setauth] = useAuth();
  const navigate = useNavigate();

  useEffect(()=>{
    if(auth?.user?.role === "user"){
      navigate('/');
    }
  })

  const submit = async (e) => {
    e.preventDefault();
    try {
      let record = await axios.post('http://localhost:8000/category', {
        category: category
      })
      toast.success("category Succesfully Added");
      setCategory("");
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  return (
    <>
      <Header />
      <div className='d-flex'>
        <div className='col-md-2'>
          <Leftsiderbar />
        </div>
        <div className='col-md-10'>
          <div className='sub-form'>
            <div className="subscribe" style={{marginTop:"15%",marginLeft:"30%"}}>
              <p>SUBSCRIBE</p>
              <input placeholder="Add category" className="subscribe-input" name="email" type="text" onChange={(e) => setCategory(e.target.value)} value={category} />
              <br />
              <button className="submit-btn" onClick={submit}>SUBMIT</button>
             </div>

          </div>
          <ToastContainer />
        </div>
      </div>

    </>
  )
}

export default Add
