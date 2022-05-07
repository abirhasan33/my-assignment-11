import React from 'react';
import Banar from '../Banar/Banar';
import Serivces from '../Serivces/Serivces';
import Photo from './Photo/Photo';
import ReactPlayer from 'react-player'

const Home = () => {
    // const videoSrc = Car;
    // const poster = "https://www.youtube.com/embed/8wyoi6zG85Y" 
    return (
        <div>
            <Banar></Banar>
            <Serivces></Serivces>
            <Photo></Photo>
           <div className='container mt-5'>
               <h1 className='serivces-titel my-5'>Everything about Xiaomi 12 Pro - Traliers</h1>
           <ReactPlayer width="100%" height="500px" url='https://youtu.be/8wyoi6zG85Y' />
           </div>
        </div>
    );
};

export default Home;