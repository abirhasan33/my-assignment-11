import React from 'react';

const MyItemsDFetelis = ({order, handleDelete}) => {
    const { image, phone_name, slug, brand, supplier_name, price, quantity} = order;
    console.log(order);

    

    return (
        <div>
            <img className='images' src={image} alt="" />
            <h4 className='name pt-2'>{phone_name}</h4>
            <p className='phone mb-1'>price: {price}</p>
            <p className='phone mb-1'>quantity: {quantity}</p>
            <p className='phone mb-1'>supplierName: {supplier_name}</p>
            <button className="delete-btn" onClick={()=>handleDelete(order._id)}>Delete</button>
        </div>
    );
};

export default MyItemsDFetelis;