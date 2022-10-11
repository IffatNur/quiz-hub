import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            {
                error && (
                    <div className='text-center'>
                        <img className='mx-auto mt-24 w-60' src={'http://www.setra.com/hubfs/Sajni/crc_error.jpg'} alt="" />
                        <h1 className='text-5xl text-red-600 font-extrabold'>{error.status}</h1>
                        <h2 className='text-2xl font-semibold'>{error.statusText}</h2>
                    </div>
                )
            }
        </div>
    );
};

export default ErrorPage;