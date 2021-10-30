import React from 'react';
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
                                <img src={logo} alt="" />
                            </div>
                        </div>
                        <div className="col-md-10">
                            <div className="menu-items">
                                <ul className="d-flex justify-content-end me-5">
                                    <Link to="/home" className="items">
                                        <li>Home</li>
                                    </Link>
                                    <Link to="/service" className="items">
                                        <li>Service</li>
                                    </Link>
                                    <Link to="/contact" className="items">
                                        <li>Contact</li>
                                    </Link>
                                    <Link to="/about" className="items">
                                        <li>About</li>
                                    </Link>
                                    {
                                        user.email?
                                        
                                    <button onClick={logOut}className="singin-button mt-1 ms-2">Sing Out</button>        
                                     : 
                                    <Link to="/singin">
                                    <button className="singin-button mt-1 ms-2">Sing In</button>                                    
                                    </Link>
                                    } 
                                    
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menubar;<h1>Hello this is Menubar</h1>