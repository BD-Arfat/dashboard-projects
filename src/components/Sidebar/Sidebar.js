import React from 'react';
import { FcBullish } from "react-icons/fc";
import { DASHBOARD_SIDEBAR_LINKS } from '../../lib/consts/Navigation';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';


const linkClass = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

const Sidebar = () => {

    

    return (
        <div className='flex flex-col bg-neutral-900 w-60 p-3 text-white'>
            <div className='flex items-center gap-2 px-1 py-3'>
                <FcBullish fontSize={24}/>
                <span className='text-neutral-100 text-lg'>Open Shop</span>
            </div>
            <div className='flex-1 py-8 flex flex-col gap-0.5'>
                {
                    DASHBOARD_SIDEBAR_LINKS.map((item)=>(
                        <SlidebarLink key={item.key} item={item}/>
                    ))
                }
            </div>
            <div>bootom part</div>
        </div>
    );
};

function SlidebarLink ({item}){
    const { pathname } = useLocation()
    return (
        <Link to={item.path} className={classNames(pathname === item.path ? 'bg-neutral-700 text-white' : 'text-neutral-400', linkClass)}>
            <span className='text-xl'>{item.icon}</span>
            {item.label}
        </Link>
    )
}

export default Sidebar;