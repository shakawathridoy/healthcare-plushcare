import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'

const About = () => {
    return (
        <div className="about-section">
        <div className="header-about">
                <div className="pt-5">
            <div className="container">
                <h1 className=" text-center mb-3"> How it works. </h1>
                <h4>1. Book on our free mobile app or website.</h4>
                <p className="ms-4">Our doctors operate in all 50 states and same day appointments are available every 15 minutes.</p>
                <h4>2. See a doctor, get treatment and a prescription at your local pharmacy.</h4>
                <h4 className="pb-5">3. Use your health insurance just like you normally would to see your doctor.</h4>
                
            </div>
            </div>
            </div>
            <div className="text-center container">
                <h1><b>Reimagining quality care.</b></h1>
                <h5>From the beginning, our mission has remained unchanged: to help all people live longer, healthier and happier lives.</h5><br></br>
                <Link to="/appoinment"><h3><button className="button m-2">Book an Appoinment</button></h3></Link>
                <h1><b>Where it all started.</b></h1>
                <h5>Getting transportation and food delivery by phone is easy. So why are patients still packed into waiting rooms to see their doctor?”</h5><br></br>
                <div className="text-start">
                    <h5><b>How It all Started?</b></h5>
                    <p>With that bit of wisdom, Dr. James Wantuck and Ryan McQuaid started PlushCare — a doctor’s office on your phone or computer. Ryan had spent plenty of time waiting around for doctors, and James, as a doctor himself, knew how clogged the healthcare system was.</p> <br></br>
                    
                    <p>Ironically, the first PlushCare headquarters was in the back room of a doctor’s office in San Francisco. Dr. Wantuck saw patients via video, while Ryan manned the phones and booked appointments.</p> <br></br>
                    
                    <p>Today, our team of 100+ physicians and employees no longer fits in the back of a doctor’s office, but our mission is unchanged: to help everyone live a longer, healthier and happier life.</p> <br></br>
                </div>
                <Link to="/home"><h3><button className="button m-2">Our Doctors</button></h3></Link>
            </div>
            
            </div>
    );
};

export default About;