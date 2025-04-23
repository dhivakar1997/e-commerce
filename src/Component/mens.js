import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import {useFetch} from "./customHooks";

function Mens(){
    // const [Men , setMens] = useState([]);

    // useEffect(() => {
    //     fetch("https://fakestoreapi.com/products/category/men's%20clothing")
    //     .then(Response => Response.json())
    //     .then(json => setMens(json))
    // },[])

    const [cate_fetch] = useFetch ("https://fakestoreapi.com/products/category/men's%20clothing");

    return(
        <>
          <div className="d-flex justify-content-center gap-4 my-4">
          {cate_fetch.map((v,i) => {
           return (
            <>  
            <Link to={`/${v.id} `}>
            <div key={i} class="card" style={{width: "18rem"}}>
              <div class="card-body">
                <img src={v.image} style={{width: "147px", height: "150px"}}/>
                <h5 class="card-title d-flex justify-content-center my-4 text-truncate"  style={{width: '250px'}}>{v.title}</h5>
                <p class="card-text">{v.price}</p> 
                <p class="card-text">{v.rating.rate}</p>           
              </div>
            </div>
            </Link>
            </>
          )})}
          </div> 
        </>
    )
}
export default Mens