import React from 'react';
import { NavLink, Link } from 'react-router-dom';
const Navbar = (props) => {
    return (
        <nav  className="navbar navbar-expand-lg ">
            {
                props.isAuth 
                ? 
                <div className="container">
                    <Link  className="navbar-brand" to="/home">Beach Bums</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="#navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarsExample07">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link"  to="/profile">Profile</NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <span onClick={props.handleLogout} className="nav-link logout-link">Logout</span>
                            </li>
                        </ul>
                     </div>
                 </div>
                 : 
                 <div className="container">
                    <Link fontFamily='tiki_tropicregular' className="navbar-brand" to="/">Beach Bums</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="#navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                     </button>
                    <div className="collapse navbar-collapse" id="navbarsExample07">
                        <ul className="navbar-nav mr-auto">
                           <li className="nav-item">
                                <NavLink className="nav-link" exact to="/">Home</NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link"  to="/signup">Create Account</NavLink>
                            </li>
                            <li className="nav-item">
                               <NavLink className="nav-link"  to="/login">Login</NavLink>
                            </li>
                        </ul>
                    </div>
                    
                </div>
           }
            
    </nav>
    );
}
export default Navbar;