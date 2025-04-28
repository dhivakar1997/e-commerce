// import react, { useState,useEffect } from 'react'
import React from 'react'
import Header from './header/header'
// import Footer from './footer'

import { Outlet } from 'react-router-dom'
import Footer from './footer'
import Categories from './categories'

function Layout(){
   return(
       <>     
         <Header />
         
          <Categories />
          
          <Outlet />

         <Footer />
                     
       </>
   )
}

export default Layout
