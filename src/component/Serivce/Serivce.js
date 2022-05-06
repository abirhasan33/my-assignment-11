import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Serivce = ({serivce}) => {
    const { image, _id, phone_name, slug, brand, supplier_name, price, quantity} = serivce;
    console.log(serivce)
    const nevigate = useNavigate();
    const navigetToServiseDetail = id => {
        nevigate(`/inventory/${id}`);
    }
    return (
        <div className='serivces'>
            <img className='images' src={image} alt="" />
            <h4 className='name pt-2'>{phone_name}</h4>
            <p className='p pt-1'>Model: {slug}</p>
            <p className='phone mb-1'>price: {price}</p>
            <p className='phone mb-1'>quantity: {quantity}</p>
            <p className='phone mb-1'>brand: {brand}</p>
            <p className='phone mb-1'>supplierName: {supplier_name}</p>
            <button className='button w-75 mt-3' onClick={()=>navigetToServiseDetail(_id)}>Update</button>
        </div>
    );
};

export default Serivce;