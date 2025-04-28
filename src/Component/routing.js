import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './layout';
import Electronics from './electronics';
import Jewellery from './jewellery';
import Signup from './signUp/signUP';
import Login from './signUp/logIn';
import Mens from './mens';
import Womens from './womens';
import Products from './products';
import ProductsAll from './productsALL';
import ProductsEdit from './productEdit.js';


function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Products />} />
                    <Route path='/:id' element={<ProductsAll />} />
                    <Route path="electronics" element={<Electronics />} />
                    <Route path="jewelery" element={<Jewellery />} />
                    <Route path="mens-clothing" element={<Mens />} />  
                    <Route path="womens-clothing" element={<Womens />} />
                    <Route path='login' element={<Login />} />
                    <Route path='signup' element={<Signup />} />
                    <Route path='editproducts' element={<ProductsEdit />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;
