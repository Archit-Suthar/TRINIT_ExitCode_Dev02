import React, { useState } from 'react';
import { useNavigate } from 'react-router'
import {
  Link
} from "react-router-dom";
import './signup.css'
const Login = () => {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({ name: " ", email: " ", password: " ", post:"" })
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password,post } = credentials;
    const response = await fetch(`http://localhost:5000/admin/addadmin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password,post })
    });
    const json = await response.json();
    console.log(json)
    if (json.success) {
      //Save the token and redirect to home
      localStorage.setItem('token', json.authtoken);
      navigate("/login")
      alert("Account Created Successfully")
      // props.showAlert("Account Created Successfully","success")
    } else {
      // props.showAlert("Invalid Credentials","danger")
      alert("Invalid Credentials");
    }
  }
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <div className="center">
      {/* <input type="checkbox" id="show"/>
    <label for="show" className="show-btn">View Form</label> */}
      <div className="container-login">
        {/* <label for="show" className="close-btn fas fa-times" title="close"></label> */}
        <div className="text">
          Register
        </div>
        <form onSubmit={handleSubmit}>
          <div className="data">
            <label>User Name</label>
            <input type="text" name='name' required placeholder='Name' onChange={onChange} />
          </div>
          <div className="data">
            <label>Email</label>
            <input type="text" name='email' required placeholder='e.g.username@gmail.com' onChange={onChange} />
          </div>
          <div className="data">
            <label>Password</label>
            <input type="password" name='password' required placeholder='password' onChange={onChange} />
          </div>
          {/* {select} */}
          <select className="form-select" name='post'  onChange={onChange} aria-label="Default select example">
                  <option select = "true">Select Role</option>
                  <option value="Admin">Admin</option>
                  <option value="Employee">Employee</option>
                  <option value="User">User</option>
               </select>

               {/* {select} */}
          <div className="btn">
            <div className="inner"></div>
            <button type="submit">Register</button>
          </div>
          <div className="signup-link">
            All ready have Account? <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;
