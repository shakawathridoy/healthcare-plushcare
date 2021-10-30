import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Service.css'


const Home = () => {

    const [service, setService] = useState([]);

    useEffect(() => {
        fetch("blog.json")
        .then(res => res.json())
        .then(data => setService(data))
    } , [])
    return (
        <div className="container p-4">
            <h2 className="text-center mt-5 mb-4 text-success" ><b>Check Our Services</b></h2>
            <hr className="w-25" />
            <div className="">
                <div className="row">
                    {
                        service.map(services => 
                        <div key={services.key} className="col-lg-4 col-md-6 text-center cart-handle">
                            <div className="cart-service">
                            <img className="" src={services.img} alt="" />
                            <h4 className="text-start text-primary">{services.title}</h4>
                            <p className="text-start"><small> <b>Details:</b> {services.details}</small></p>
                            <div className="d-flex">
                           
                           <Link to="/home"><button className="button">Get Doctors</button></Link>
                    
                            </div>
                        </div>
                            </div>
                            )
                            
                        }
                </div>
                <div className="text-center">

                </div>
            </div>
        </div>
    );
};

export default Home;