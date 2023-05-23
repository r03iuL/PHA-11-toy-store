import React from 'react';
import useDynamicTitle from '../../DynamicTitle/DynamicTitle';

const Error = () => {
    useDynamicTitle('Error!');
    return (
        <div className=' '>
            
            <img className='mx-auto' src="https://img.freepik.com/free-vector/hand-drawn-404-error_23-2147731549.jpg?w=740&t=st=1684845602~exp=1684846202~hmac=c0266124bb210b7ce2e0c22a45d561e3bd0f185962cbfdde3d01d2d34e3b0f23" alt="" />
        </div>
    );
};

export default Error;