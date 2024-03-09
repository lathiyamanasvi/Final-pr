import React, { useEffect, useState } from 'react'
import Leftsiderbar from '../Leftsidebar'
import Header from '../../Header'
import { ToastContainer } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from '../../../Contexxt/Auth'

function Category() {
  const[category,setCategory] = useState([]);
  const [auth,setauth] = useAuth();
  const navigate = useNavigate();

  useEffect(()=>{
    if(auth?.user?.role === "user"){
        navigate('/')
    }
  })

  const getCategory = async() => {
    try{
        let {data} = await axios.get(`http://localhost:8000/category`);
        setCategory(data);
    }catch(err){
        console.log(err);
        return false;
    }
}

useEffect(()=>{
    getCategory();
},[]) 
  return (
    <>
    <Header/>
    <div className='d-flex'>
      <div className='col-md-2'>
        <Leftsiderbar />
      </div>
      <div className='col-md-10 p-5'>
        <Link to={'/admin/add'} className='text-dark'>Add Category</Link>
        <table className="table mt-3" style={{width:"100% !important"}}>
            <thead className='table-primary'>
                <tr className='col-md-9'>
                    <th scope="col">Srno</th>
                    <th scope="col">Category</th>
                    
                </tr>
            </thead>
            <tbody>
                {
                    category.map((item,i)=>{i=i+1
                        return (
                            <tr>
                                <td scope="row">{i}</td>
                                <td >{item.category}</td>
                            </tr>
                        )
                    })
                }
               
              
            </tbody>
            </table>
      <ToastContainer/>
        </div>
      </div>

  </>
  )
}

export default Category
