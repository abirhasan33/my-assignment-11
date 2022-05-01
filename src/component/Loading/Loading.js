import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{hiight: '400px'}} className='w-100 d-flex justify-content-center align-center'>
              <Spinner animation="border" variant="primary" />
        </div>
    );
};

export default Loading;