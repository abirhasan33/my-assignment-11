import React from 'react';
import { useForm } from "react-hook-form";

const AddNewitem = () => {
    const { register, handleSubmit } = useForm();
    
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/service`;
        console.log(url);
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result =>{
            console.log(result);
        } )
    };


    return (
        <div className='w-50 mx-auto'>
            <h2>Please add a service</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Phone Name' {...register("phone_name", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Brand' {...register("brand")} />
                <input className='mb-2' placeholder='Supplier Name' {...register("supplier_name")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("image")} />
                <input type="submit" value="Add Service" />
            </form>
        </div>
    );
};

export default AddNewitem;
