import React from "react";
import logo from '../../assests/amazonlogo.jpg';
import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

function Header(){
   return(
    <>    
      <div className="wrapper">
          <div className="logo">
            <img className="logo m-1" src={logo} alt="logo"/>
          </div>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-6">
                <div class="search-container">
                  <input type="text" class="form-control search-input form-control-lg" placeholder="Search..." />
                  {/* <i class="fas fa-search search-icon"></i> */}
                </div>
              </div>
            </div>
          </div>
          <div className="fa-user-plus d-flex px-4 ">
           <Link to={'/editproducts'}> <a className="signin-icon fs-5 px-2"><i class="fa-solid fa-cart-shopping"><span className="solid-signin px-2 " >products</span></i></a></Link>
           <Link to={'/login'}> <a  className="signin-icon fs-5"><i class="fa fa-user-plus " aria-hidden="true"><span className="solid-signin px-2 " >sign in</span></i></a></Link>
           <Link to={'/signup'}> <a  className="signup fs-5"><i class="fa-solid fa-user-plus px-2"><span className="solid-signin px-2">sign up</span></i></a></Link> 
          </div>     
      </div> 
    </>
   )
}

export default Header