function TopMenu(){
    return (
        <div className='ssubpixel-antialiased text-sm h-20 bg-emerald-600 fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-4 bg-gradient-to-r from-purple-600 to-pink-600'>
            <div className="flex space-x-5">
              <div className="text-black rounded-lg p-2 bg-white">Logo</div>
              <div className="text-black rounded-lg p-2 bg-white">
                USERNAME
                </div>
            </div>
            <div className="flex px-5 space-x-5">
                <div className="text-black rounded-lg p-2 bg-white">
                    View Company
                </div>
                <div className="text-black rounded-lg p-2 bg-white">
                    Create Booking
                </div>
                <div className="text-black rounded-lg p-2 bg-white">
                    Logout
                </div>
            </div>
        </div>
    )
}

export default TopMenu