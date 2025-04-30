import React from "react";
import { useEffect, useState } from "react";
import Electron from '../../src/./assests/amazonbluetooth.jpg'
import Jewels from '../../src/./assests/amazonjewels.jpg'
import Mens from '../../src/./assests/amazonmens.jpg'
import Womens from '../../src/./assests/amazonwomens.jpg';
import { Link } from "react-router-dom"; 
import './header/header.css'
import {useFetch } from "./customHooks";

function Categories(){

  // const [count, setCount] = useState([]);
//   const images ={
//     "electronics": Electron,
//     "jewelery" : Jewels,
//     "men's clothing": Mens,
//     "women's clothing": Womens
// };
   const [cate_fetch] = useFetch('https://fakestoreapi.com/products/categories');

  // useEffect(() => {
  //   fetch('https://fakestoreapi.com/products/categories')
  //   .then(response => response.json())
  //   .then(json => setCount(json))
  // },[])

  return (
    <>
       <div className="categories d-flex justify-content-lg-end gap-4 my-5 p-2 ms-1">
         {cate_fetch.map((v) => {
          return (
            <>
            {/* <div className="d-flex align-items-end"> */}
              <Link className="text-decoration-none badge bg-primary p-2 fs-6" style= {{width: '9rem'}} to={`/${v}`}>{v}</Link>
              
            {/* </div> */}
            {/* <Link to={`/${v} ` } > */}
          
            
            {/* <div class="card" style={{width: "18rem", height : "23rem"}}>
              <div class="card-body">
                <img src={images[v]} style={{width: "147px", height: "150px"}}/>
                <h5 class="card-title d-flex justify-content-center my-4 text-truncate " style={{width: '200px'}}>{v}</h5>       
              </div>
            </div> */}
            {/* </Link> */}
            </>
          )})}
        </div> 
    </>
  );
}
export default Categories