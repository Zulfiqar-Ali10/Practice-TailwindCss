import React from "react";
import img1 from "/src/imgs/photo1.webp"
import img2 from "/src/imgs/photo2.jpg"
import img3 from "/src/imgs/photo1.webp"

export const Footer = () => {
    return(
        <>
        <h2 className=" hover:bg-red-700 text-center mt-10 mb-5 bg-[brown] text-white p-4 w-40 m-auto rounded">Footer</h2>
      <div className="imgs flex w-100 justify-center items-center mt-20 mb-20">
      <img src={img1} alt="" />
       <img src={img2} alt="" />
       <img src={img3} alt="" />
      </div>
    
    
    
    
        </>
    )
}