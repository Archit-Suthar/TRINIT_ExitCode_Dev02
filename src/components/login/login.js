import React, { useState } from 'react';
import './login.css'
import {
   Link
} from "react-router-dom";
import { useNavigate } from 'react-router'
import './login.css';
const Login = () => {

   let navigate = useNavigate();
   const [credentials, setCredentials] = useState({ email: "", password: "",post:"" });
   const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await fetch(`http://localhost:5000/admin/login`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({ email: credentials.email, password: credentials.password,post: credentials.post })
      });
      const json = await response.json();
      console.log(json)
      if (json.success) {
         //Save the token and redirect to home
         localStorage.setItem('token', json.authtoken);
         localStorage.setItem('post', json.post);
         alert("Logged In Successfully")
         navigate("/dashboard")
      } else {
         alert("Invalid Details");
      }
   }
   const onChange = (e) => {
      setCredentials({ ...credentials, [e.target.name]: e.target.value })
   }
   return (
      <div className="center">
         <div className="container-login">
            <div className="text">
               Login Form
            </div>
            <form onSubmit={handleSubmit}>
               <div className="data">
                  <label>UserName</label>
                  <input type="text" required placeholder='e.g.username@gmail.com' name='email' value={credentials.email} onChange={onChange} />
               </div>
               <div className="data">
                  <label>Password</label>
                  <input type="password" required placeholder='password' name='password' value={credentials.password} onChange={onChange} />
               </div>
               {/* {select} */}
               <select className="form-select" onChange={onChange} name='post' aria-label="Default select example">
                  <option select = "true">Select Role</option>
                  <option value="Admin">Admin</option>
                  <option value="Employee">Employee</option>
                  <option value="User">User</option>
               </select>

               {/* {select} */}
               <div className="forgot-pass">
                  <a href="#">Forgot Password?</a>
               </div>
               <div className="btn">
                  <div className="inner"></div>
                  <button type="submit">login</button>
               </div>
               <div className="signup-link">
                  Not a member? <Link to="/signup">Register</Link>
               </div>
            </form>
         </div>
      </div>
   )
}

export default Login;
