import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

function ProductsAll(){
    const {id} = useParams();
    const [ productsAll , setProduct] = useState(null);

   useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(Response => Response.json())
        .then(json => setProduct(json))
   },[id])


   if(!productsAll) return <h1>loading</h1>
   return(
    <>
        <div className=" d-flex justify-content-center align-content-start flex-wrap">        
            <div class="card" style={{width: "18rem"}}>
              <div class="card-body">
                <img src={productsAll.image} style={{width: "147px", height: "150px"}}/>
                <h5 class="card-title d-flex justify-content-center my-4">{productsAll.title}</h5>
                <p class="card-text">{productsAll.category}</p> 
                <p class="card-text">{productsAll.price}</p> 
                <p class="card-text">{productsAll.rating.rate}</p>           
              </div>
            </div>        
        </div> 
    </>
   )

}
export default ProductsAll