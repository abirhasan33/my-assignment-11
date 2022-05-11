import React, { useEffect, useState } from 'react';
import Serivce from '../Serivce/Serivce';
// import './Serivces.css'
import './Serivces.css';




const Serivces = () => {

    const [product, setproduct] = useState([]);

    useEffect(()=> {
        fetch('https://sleepy-oasis-79633.herokuapp.com/service')
        .then(res => res.json())
        .then(data => setproduct(data));
    },[])

    return (
        <div>
            <h1 id='service' className='serivces-titel my-5'>Product</h1>
            <div className='serivces-container container'>
            {
                product.slice(0,6).map(serivce => (<Serivce key={serivce._id} serivce={serivce}></Serivce>))
            }
            </div>
        </div>
    );
};

export default Serivces;