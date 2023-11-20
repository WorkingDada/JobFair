import TopMenu from "@/components/TopMenu"

function DefaultPage(){
    return (
        <main className='text-black bg-white h-screen pt-40 pl-20'>
            <TopMenu/>
            <div className='text-2xl pb-20'>
                MY BOOKING
            </div>
        </main>
    )
}

export default DefaultPage