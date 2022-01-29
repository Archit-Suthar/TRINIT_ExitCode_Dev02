import React from 'react';
import { Link,useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router'
function Navbar() {
    const location = useLocation();
    let navigate = useNavigate();
    const handleLogout = ()=>{
        localStorage.removeItem("token");
        navigate("/login")
    
      }
    return <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">BugTracker</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/"?"active":""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/dashboard"?"active":""}` } to="/dashboard">Dashboard</Link>
                        </li>

                    </ul>
                    <div className="d-flex">
                        {!localStorage.getItem("token") ? 
                        <>
                        <Link className="btn btn-outline-primary" to="/login" role="button">LogIn</Link>
                        </> : 
                        <button className="btn btn-outline-primary" onClick={handleLogout}>Log Out</button>}
                    </div>

                </div>
            </div>
        </nav>
    </div>;
}

export default Navbar;
