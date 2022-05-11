import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';


const Inventory = () => {
    const {serviceId} = useParams();
    const [service, setService] = useState({});

    const [quantityUpodet, setQuantityUodet] = useState();

    useEffect( () =>{
        const url = `http://localhost:5000/service/${serviceId}`;
        console.log(url);
        fetch(url)
        .then(res=> res.json())
        .then(data => {
            setService(data)
            console.log(data);
            setQuantityUodet(data.quantity);
        })

    }, [])

    const quantityUpdete = ()=>{
        const quantity = parseInt(quantityUpodet);
        const url = `http://localhost:5000/service/${serviceId}`
        fetch(url, {
        method: 'PUT',
        body: JSON.stringify({
        quantity
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((data) => {
     console.log(data);
     setQuantityUodet(quantity - 1);
  });
        
    };

    const numberRef = useRef()
    const quantityAdd = (e)=> {
        const quantityInputValue = numberRef.current.value;
        const result = Number(quantityInputValue) + Number(quantityUpodet);
        setQuantityUodet(result);
    }



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
            <p className='phone mb-1'>quantity: {quantityUpodet}</p>
            <p className='phone mb-1'>brand: {service.brand}</p>
            <p className='phone mb-1'>supplierName: {service.supplier_name}</p>
            <buttono onClick={quantityUpdete} className='button px-5 py-1 mt-2'>Delivered</buttono>
            <br />
            <input className='mt-3 px-1 btn-button' type="text" ref={numberRef} placeholder='Pleace add Quantity'/>
            <button onClick={quantityAdd} className='button px-5 py-1 mx-4'>Updet Quantity</button>
      </div>
    </div>
  </div>
</div>
    );
};

export default Inventory;