import React, { useEffect, useState } from 'react';
import PhotoDelels from '../PhotoDelels/PhotoDelels';
import './Photo.css'

const Photo = () => {
    const [serivces, setSerivces] = useState([]);
    useEffect(()=> {
        fetch('showphoto.json')
        .then(res => res.json())
        .then(data => setSerivces(data));
    },[])
    return (
        <>
        <h1 className='serivces-titel my-5'> Phone choose now</h1>
        <div className='serivces-cukout mp-5'>
            {
                serivces.map(serivces => <PhotoDelels key={serivces} serivces={serivces}></PhotoDelels>)
            }
        </div>
            </>
    );
};

export default Photo;