import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Appoinment.css'

const Appoinment = () => {

    const {id} = useParams()
    const [appoinments, setAppoinments] =  useState([]);
    const [specificAppoinment, setSpecificAppoinment] = useState({});

    useEffect(() => 
        fetch('/doctorsData.json')
        .then(res => res.json())
        .then(data => setAppoinments(data))
     , []);

    useEffect(() => {
        if(appoinments.length>0){const matchedData = appoinments.find(appoinment => appoinment.id==id)
        setSpecificAppoinment(matchedData);
        }
    }, [appoinments]);

    return (
        <div>
            <h1>this is Appoinment page {id}</h1>
            <h2>Name: {specificAppoinment?.name}</h2>
           
        </div>
    );
};

export default Appoinment;