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
        <div class="row container mt-5">
  <div class="col-sm-6">
    <div class="card border-0">
      <div class="card-body mx-auto mt-5">
          <img src={service.image} alt="" />
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card border-0">
      <div class="card-body login-form">
      <h4 className='name'>{service.phone_name}</h4>
            <p className='p pt-1'>Model: {service.slug}</p>
            <p className='phone mb-1'>price: {service.price}</p>
            <p className='phone mb-1'>quantity: {service.quantity}</p>
            <p className='phone mb-1'>brand: {service.brand}</p>
            <p className='phone mb-1'>supplierName: {service.supplier_name}</p>
            <button className='button px-5 py-1 mt-3'>Deleveryed</button>
            <br />
            <input className='mt-4 px-1 btn-button' type="text" placeholder='Pleace add Quantity'/>
            <button className='button px-5 py-1 mx-4 '>Updet Quantity</button>
      </div>
    </div>
  </div>
</div>
    );
};

export default Inventory;