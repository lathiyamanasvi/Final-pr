import React from 'react'
import { MdLocalShipping } from "react-icons/md";
import { CgRedo } from "react-icons/cg";
import { Link } from 'react-router-dom';

const BannerBottom = () => {
  return (
   <>
    <div className="w-full bg-white border-b-[1px] py-4 border-bottom px-4">
      <div className="max-w-container mx-auto d-flex d-flex-col md:flex-row justify-content-between align-items-center my-3">
        <div className='d-flex align-items-center shadow px-2' style={{height:'25px'}}>
          <span className='fw-bold text-cente'>2</span>
          <p className="fw-light ms-2">Two years warranty</p>
        </div>
        <div className="d-flex align-items-center shadow px-2" style={{height:'25px'}}>
          <span className="text-xl text-center me-2">
            <MdLocalShipping />
          </span>
          <p className="text-lightText text-base">Free shipping</p>
        </div>
        <div className="d-flex align-items-center shadow px-2" style={{height:'25px'}}>
          <span className="text-2xl text-center w-6">
            <CgRedo />
          </span>
          <p className="fw-light ms-2">Return policy in 30 days</p>
        </div>
      </div>
    </div>
   </>
  )
}

export default BannerBottom
