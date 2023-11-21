'use client'
import { signOut } from 'next-auth/react';

function TopMenu({id}:{id:string}) {

    const handleLogout = () => {
        signOut({ callbackUrl: '/' });
        // You can specify a callback URL to redirect the user after logging out
    };

    return (
        <div className='subpixel-antialiased h-20 fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-4 bg-gradient-to-r from-purple-600 to-pink-600'>
            <div className="flex space-x-5">
                <div className="text-black p-2 text-white text-lg font-semibold">Logo</div>
                <div className="text-black p-2 text-white text-lg font-semibold">{id}</div>
            </div>
            <div className="flex px-5 space-x-5">
                <div className="text-black p-2 text-white text-lg font-semibold">View Company</div>
                <a className="text-black p-2 text-white text-lg font-semibold" href="/createbooking">Create Booking</a>
                <button className="text-black p-2 text-white text-lg font-semibold" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default TopMenu