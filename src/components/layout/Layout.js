import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <div className='bg-sky-100'>slider</div>
            <div className='bg-teal-200'>header</div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default Layout;