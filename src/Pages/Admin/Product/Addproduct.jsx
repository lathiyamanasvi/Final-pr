import React, { useEffect, useState } from 'react'
import Header from '../../Header'
import { ToastContainer, toast } from 'react-toastify'
import axios from 'axios';
import Leftsiderbar from '../Leftsidebar';

function Addproduct() {

  const [categoryrec,setcategoryrec] = useState([]);
  const [product,setproduct] = useState("");
  const [price,setprice] = useState("");
  const [description,setdescription] = useState("");
  const [category,setcategory] = useState("");
  const [image,setimage] = useState("");
  const [status,setstatus] = useState("");
  const [market,setmarket] = useState("");

  const getcat = async() => {
    try {
      let  {data} = await axios.get(`http://localhost:8000/category`);
      setcategoryrec(data);
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  useEffect(()=>{
    getcat();
  },[])

  const submit = async() => {
    try {
      let rec = await axios.post(`http://localhost:8000/product`,{
        product :product,
        price :price,
        description :description,
        category : category,
        image :image,
        status : status,
        market : market
    })  
    toast.success("Product successfully Added");
    setproduct("");
    setprice("");
    setdescription("");
    setcategory("");
    setimage("");
    setstatus("");
    setmarket("");
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  return (
    <>
      <Header />
      
      <div className='d-flex'>
        <div className="col-md-2">
        <Leftsiderbar/>
        </div>
        <div className='col-md-10'>
          <div style={{height:"100vh",overflow:"auto"}}>
            <h2 className='text-center pt-3 border-bottom border-4 pb-2'>Add product</h2>

            <div className="w-50 m-auto shadow mt-3 p-3">
              <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">Enter Product Name</label>
                <input type="text" class="form-control" onChange={(e)=>setproduct(e.target.value)} value={product} />
              </div>
              <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label">Enter Product Price</label>
                <input type="text" class="form-control" onChange={(e)=>setprice(e.target.value)} value={price}  />
              </div>
              <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label">Enter Product Description</label>
                <input type="text" class="form-control" onChange={(e)=>setdescription(e.target.value)} value={description} />
              </div>
              <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">Choose a Category</label>
                <select class="form-select" aria-label="Default select example" onChange={(e)=>setcategory(e.target.value)} value={category}>
                  <option selected>Open this select menu</option>
                  {
                    categoryrec.map((val)=>{
                      return(
                        <option value={val.category}>{val.category}</option>
                      )
                    })
                  }
                </select>
              </div>
              <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label">Choose a Status</label>
                <select class="form-select" aria-label="Default select example" onChange={(e)=>setstatus(e.target.value)} value={status}>
                  <option selected>Open this select menu</option>
                  <option value="Active">Active</option>
                  <option value="Deactive">Deactive</option>
                </select>
              </div>
              <div class="m b-3">
                <label for="formGroupExampleInput2" class="form-label">Choose a Market Status</label>
                <select class="form-select" aria-label="Default select example" onChange={(e)=>setmarket(e.target.value)} value={market}>
                  <option selected>Open this select menu</option>
                  <option value="Latest">Latest</option>
                  <option value="Upcoming">Upcoming</option>
                  <option value="Best">Best</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">Upload a Product Image</label>
                <input type="text" class="form-control" onChange={(e)=>setimage(e.target.value)} value={image} />
              </div>
                <button className=' btn btn-primary' type='button' onClick={()=>submit()} style={{width:"100%"}}>Add Product</button>
            </div>
          </div>
          <ToastContainer />
        </div>
      </div>
    </>
  )
}

export default Addproduct
