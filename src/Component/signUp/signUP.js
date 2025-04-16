import React, { useState } from "react";
import { Link } from "react-router-dom";
import './signup.css';
import logo from '../../assests/amazonlogo.jpg'

function Signup() {
  const [users, setUsers] = useState({ username: '', email: '', password: '' });

    //const user = { username: 'john_doe', email: 'john@example.com', password: 'pass123' };
  
      
    const handleChange = (e) => {
      const { name, value } = e.target;
      setUsers({ ...users, [name]: value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      fetch('https://fakestoreapi.com/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(users)
      })
      .then(response => response.json())
      .then(data => console.log(data));
    };

  return (
    <div className="wrappers signUp">
      <div className="logos">
        <img className='logos' src={logo} alt="logo" />
      </div>
      <div className="forms">
        <div className="heading">CREATE AN ACCOUNT</div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" placeholder="Enter your name" onChange={handleChange} value={users.username}/>
          </div>
          <div>
            <label htmlFor="email">E-Mail</label>
            <input type="text" name="email" id="email" placeholder="Enter your mail" onChange={handleChange} value={users.email}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" onChange={handleChange} value={users.password}
            />
          </div>
          <button type="submit">Submit</button>
          <h2 align="center" className="or">OR</h2>
        </form>
        <p>
          Have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
export default Signup;
