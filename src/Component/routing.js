import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './layout'
import Electronics from './electronics';
import Jewellery from './jewellery';
import Mens from './mens';
import Womens from './womens';
import Products from './products';
import ProductsAll from './productsALL';
import Signup from './signUp/signUP';
import Login from './signUp/logIn';


function Routing(){
        return(
            <>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Products />} />
                  <Route path='/:id' element={<ProductsAll />}/>
                  <Route path="electronics" element={<Electronics />} />
                  <Route path="jewelery" element={<Jewellery />} />
                  <Route path="men's clothing" element={<Mens />} />  
                  <Route path="women's clothing" element={<Womens />}/>
                  <Route path='login' element={<Login />}/>    
                  <Route path='signup' element={<Signup />}/>        
                </Route>
              </Routes>
            </BrowserRouter> 
            </>
        )
}

export default Routing 