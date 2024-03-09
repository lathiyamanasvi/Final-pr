import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Slider() {

  const [slider,setslider] = useState([])

  const getslider = async()=>{
    let {data} = await axios.get('http://localhost:8000/slider');
    console.log(data);
    setslider(data);
  }

  useEffect(()=>{
    getslider();
  },[])
  return (
   <>
    <div id="carouselExampleCaptions" class="carousel slide mt-3" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 3"></button>
        </div>
        {/* <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/b656a7f4-4688-4997-bb7c-54b78793981e1658752386588-Western-Wear_Desk.jpg" class="d-block w-100" alt="..." style={{ height: "400px" }} />
            <div class="carousel-caption d-none d-md-block">
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-26224-DailyBanner-Z5-P3-BudaJeans-FyreRose-Acai-under999.jpg" class="d-block w-100" alt="..." style={{ height: "400px" }} />
            <div class="carousel-caption d-none d-md-block">
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://images-static.nykaa.com/uploads/34268587-0212-4d17-9489-485576f2ecbd.png?tr=w-1200,cm-pad_resize" class="d-block w-100" alt="..." style={{ height: "400px" }} />
            <div class="carousel-caption d-none d-md-block">
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://b37db184fa09e5ba0292-662caecad9dd967cd19824f80fb1538c.lmsin.net/LS-Fest/LS-new/LS-Uber-HP-Desktop-HeroBanner9-19Feb24.jpg" class="d-block w-100" alt="..." style={{ height: "400px" }} />
            <div class="carousel-caption d-none d-md-block">
            </div>
          </div>
        </div> */}
        <div class="carousel-inner">
        {
          slider.map((val,i)=>{i=i+1
            return(
              <div class="carousel-item">
            <img src={val.src} class="w-100" alt="..." style={{ height: "400px" }} key={i} />
            <div class="carousel-caption d-none d-md-block">
            </div>
          </div>
            )
          })
        }
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
   </>
  )
}

export default Slider
