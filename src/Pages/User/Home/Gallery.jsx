import React from 'react'

const Gallery = () => {
  return (
   <>
     <div className="container mt-5">
        <div class="gallery">

          <img class="four-grid-cells h-100"
            src="https://mb-demo1.myshopify.com/cdn/shop/files/banner1_78752618-8fe6-4899-a42e-b807ba9e84b7.jpg?v=1694412274"
            alt="Northern Winter Sky Image" />

          <img class="wide-top"
            src="https://orebishopping.reactbd.com/static/media/saleImgTwo.ecb733524e878406c281.webp"
            alt="A River Flowing Image" />

          <img class="wide-image"
            src="https://orebishopping.reactbd.com/static/media/saleImgThree.7f55d28e41e547163b6c.webp"
            alt="A cloudy Mountain Image" />

        </div>
      </div>
   </>
  )
}

export default Gallery
