import React from 'react';

const PhotoDelels = ({serivces}) => {
    const {img} = serivces; 
    return (
        <>
        <div className='serivces-images'>
            <img className='serivces-img' src={img} alt="" />
        </div>
        </>
    );
};

export default PhotoDelels;