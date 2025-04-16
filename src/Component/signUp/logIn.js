import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assests/amazonlogo.jpg';

function Login() {
    const [login, setLogin] = useState({username: '', password: ''});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setLogin({ ...login, [name]: value });
	};
	// console.log(name)

	const handleSubmit = (e) => {
	    e.preventDefault();
		fetch('https://fakestoreapi.com/auth/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(login)
		})
			.then(response => response.json())
			.then(data => console.log(data));
			console.log("User created:", login);
	};


	return (
		<div className="wrappers signIn">
			<div className="logos">
				<img className='logos' src={logo} alt="logos" />
			</div>
			<div className="forms">
				<div className="heading">LOGIN</div>
				<form onSubmit={handleSubmit}>
					<div>
						<label htmlFor="name">UserName</label>
						<input type="text" id="name" name='username' placeholder="Enter your name" onChange={handleChange}/>
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<input type="password" id="pass" name ='password' placeholder="Enter you password" onChange={handleChange} />
					</div>
					<button type="submit" >
						Submit
					</button>
				</form>
				<p>
					Don't have an account ? <Link to="/signup"> Sign In </Link>
				</p>
			</div>
		</div>
	);
}
export default Login
