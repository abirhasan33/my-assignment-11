import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import useServiceDetail from '../Hooks/useServiceDetail';

const Inventory = () => {
    const {serviceId} = useParams();
    // const [service] = useServiceDetail(serviceId)
    const [service, setService] = useState({});

    useEffect( () =>{
        const url = `http://localhost:5000/service/${serviceId}`;
        console.log(url);
        fetch(url)
        .then(res=> res.json())
        .then(data => setService(data))

    }, [])
    console.log(service);
    return (
        <div>
            <h1>Inventory ({service.brand})</h1>
        </div>
    );
};

export default Inventory;