// import axios from 'axios';
import { signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import MyItemsDFetelis from './MyItemsDFetelis';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [order, setOrder] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const email = user?.email;
        const url= `http://localhost:5000/order?email=${email}`

        try {
            fetch(url, {
                headers:{
                    "authorization": `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {

                    console.log(data);
                    setOrder(data)
                })
        }
        catch (error) {
            console.log(error);
            if(error.res.status === 401 || error.res.status === 403){
                signOut(auth);
                navigate('/login');
            }
        }

    }, [user]);



    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `http://localhost:5000/order/${id}`;
            console.log(url);
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = order.filter(service => service._id !== id);
                setOrder(remaining);
            })
        }
    }

    return (
        <div>
            <h1 id='service' className='serivces-titel my-3'>My Items {order.length}</h1>
            <div className='serivces-container container'>
            {
                order.map(order=> (<MyItemsDFetelis handleDelete={handleDelete} key={order._id} order={order}></MyItemsDFetelis>))
            }
        </div>
        </div>
    );
};

export default MyItems;