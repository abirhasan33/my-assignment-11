import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='container'>
            <p className='m-5'><span className='blogs'>1. javascript VS nodejs:</span> JavaScript is a simple programming language that could be run in any browser that supports the JavaScript Engine. On the other hand, Node.js is a running ..</p>
            <p className='m-5'><span className='blogs'>2. Use nodejs and when should you use mongodb:</span> MongoDB represents the data as a collection of documents rather than tables related by foreign keys. This makes it possible for the varied types of data dealt over the internet to be stored decently and accessed in the web applications using Node. js.</p>
            <p className='m-5'><span className='blogs'>3. Sql and nosql databases:</span> SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
           </p>
           <p className='m-5'><span className='blogs'>4. What is the purpose of jwt and how does it work:</span> SJWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
           </p>
        </div>
    );
};

export default Blogs;