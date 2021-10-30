import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../image/plushCare.png'
import './Menubar.css'

const Menubar = () => {

    const {user, logOut} = useAuth()
    return (
        <div>
            <div className="menubar-container">
                <div className="menubar container">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="logo-img text-center">
                                <Link to="/home">
                                <img src={logo} alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-10">
                            <div className="menu-items">
                                <div className ="collapse navbar-collapse d-flex justify-content-end me-5" id ="colNav">
                                <nav className ="navbar navbar-expand-xl  ">
                                <Link to="/home" className="items">
                                        <li>Home</li>
                                    </Link>
                                    <Link to="/service" className="items">
                                        <li>Service</li>
                                    </Link>
                                    <Link to="/appoinment" className="items">
                                        <li>Appoinment</li>
                                    </Link>
                                    <Link to="/about" className="items">
                                        <li>About</li>
                                    </Link>
                                
                                    </nav>
                                    {
                                        user.email?
                                        
                                    <button onClick={logOut}className="singin-button mt-1 ms-2">Sing Out</button>        
                                     : 
                                    <Link to="/singin">
                                    <button className="singin-button mt-1 ms-2">Sing In</button>                                    
                                    </Link>
                                    } 
                                    <p className="mt-4 ms-3">{user.displayName}</p>
                                    
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menubar;<h1>Hello this is Menubar</h1>