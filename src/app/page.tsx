import TopMenu from '@/components/TopMenu'
import { authOptions } from './api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import getUserProfile from '@/libs/getUserProfile'
import MyBooking from '@/components/MyBooking'
import Booking from './booking/page'
import BasicCard from '@/components/BasicCard'


async function Home() {

  return (
    <main className='text-black bg-white h-screen pt-20'>
      <div className='items-center'>
        <div className='mx-5 text-3xl font-extrabold pl-20 pt-10'>
          MY BOOKING
        </div>
        <div className='p-5 mx-16 my-5 rounded-3xl'>
            <Booking/>
        </div>
      </div>
    </main>
  )
}

export default Home