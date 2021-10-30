import Button from '@restart/ui/esm/Button';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Card, FormControl, InputGroup } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Doctors.css'


const Home = () => {

    const [doctor, setDoctor] = useState([]);

    // load data from json 

    useEffect(() => {
        fetch("doctorsData.json")
        .then(res => res.json())
        .then(data => setDoctor(data))
    } , [])

    // set Dynamic url

    const history = useHistory()
    const handleAppoinment = (id) => {
        const uri = `appoinment/${id}`
        history.push(uri);
    }

    return (
        <div className="container p-4">
            <div className="text-center">
                <h1><b>You can find here your catagory Doctors</b></h1>
                <h6 className="text-success">Search your Favroite Doctor!</h6>
                <div className="text-center justify-content-center aling-items-center">
                <InputGroup className=" text-center">
                <FormControl width="50"
                placeholder="What do you want to search today?"
                aria-label="Recipient's username with two button addons"
                />
                <Button className="btn bg-dark text-white" variant="outline-secondary">Search</Button>
            </InputGroup>
                </div>
            </div>
            <div className="text-center">
            <h2 className="text-center mt-5 mb-4 text-primary" ><b>Meet some of the team</b></h2>
            </div>
            <div id="doctors" className="coureses">
                <div className="row">
                    {
                        doctor.map(doctors => 
                            <div key={doctors.key} className="col-lg-4 col-md-6 text-center">
                                
                            <Card className="cart-service"  style={{ marginBottom: '35px', height: '800px', borderRadius: "20px" }}>
                            <Card.Img className="p-3" variant="top" src={doctors.img} />
                            <Card.Body>
                                <Card.Title>Name: {doctors.name}</Card.Title>
                                <Card.Text>
                                {doctors.details}
                                </Card.Text>
                                <Card.Text className="text-success">
                                Fee: ${doctors.fee}
                                </Card.Text>
                                
                                <Button onClick={()=>handleAppoinment(doctors.id)} className="button" variant="primary">Book An Appoinment</Button>
                                
                            </Card.Body>
                            </Card>
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