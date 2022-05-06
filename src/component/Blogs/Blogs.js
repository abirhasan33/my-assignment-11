import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='container'>
            <p className='m-5'><span className='blogs'>1. Authorization and authentication:</span> authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to</p>
            <p className='m-5'><span className='blogs'>2. Why are you using firebase:</span> Firebase by Google can be used for the following: Firebase manages all data real-time in the database. So, the exchange of data to and fro from the database is easy and quick. Hence, if you are looking to develop mobile apps such as live streaming, chat messaging, etc., you can use Firebase.</p>
            <p className='m-5'><span className='blogs'>3.Firebase provide other than authentication:</span> To use the Firebase Storage we need to authenticate a user via Firebase authentication. The default security rules require users to be authenticated. Firebase Storage is basically a powerful and simple object storage, in which you can store your files easily.
</p>
        </div>
    );
};

export default Blogs;