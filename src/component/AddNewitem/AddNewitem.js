import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';

const AddNewitem = () => {
const[user]=useAuthState(auth);

const handelform = event =>{
    event.preventDefault();
    // const email=user?.email;
    const email = event.target.email.value;
    const brand=event.target.brand.value;
    const phone_name=event.target.phone_name.value;
    const quantity=event.target.quantity.value;
    const supplier_name=event.target.supplier_name.value;
    const image=event.target.image.value;
    const price=event.target.price.value;

    const Addproduct={email,brand,phone_name,quantity,supplier_name,image,price};

    const url = `https://sleepy-oasis-79633.herokuapp.com/addnewitem`;
        console.log(url);
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Addproduct)
        })
        .then(res=> res.json())
        .then(result =>{
            console.log(result);
        } )
    }

    


    return (
<div className='container py-5'>
             <h2 className='mb-2 text-center'>Add <span className='allPHder'>Products</span></h2>
            <div className='row'>
                <div className='col-md-3'></div>
                <div className='col-md-6 bg-light p-3'>
              <form  onSubmit={handelform}>
        <br/>
        <input type="email" name='email' readOnly value={user?.email} className='form-control'required/>
        <br/>
        <input type="text" name='brand' placeholder='Product Name' className='form-control'required/>
        <br/>
        <input type="text" name='phone_name' placeholder='phone brand' className='form-control' />
        <br/>
        <input type="text" name='slug' placeholder='Phone model name' className='form-control' required/>
        <br />
        <input type="number" name='quantity' placeholder='Quantity' className='form-control' required/>
        <br/>
        <input type="text" name='supplier_name' placeholder='supplier name' className='form-control' required/>
        <br/>
        <input type="text" name='image' placeholder='Img-URL' className='form-control' required/>
        <br/>
        <input type="text" name='price' placeholder='price' className='form-control' required/>
        <br/>
        
        <button className='addProduct-btn button'>Add Product</button>
      </form>
                </div>
                <div className='col-md-3'></div>
            </div>
        </div>
    );
};

export default AddNewitem;
