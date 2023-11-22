import TopMenu from '@/components/TopMenu'
import { authOptions } from './api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import getUserProfile from '@/libs/getUserProfile'
import MyBooking from '@/components/MyBooking'
import Booking from './booking/page'
import RowCard from '@/components/RowCard'
import BasicCard from '@/components/BasicCard'

async function Home() {

  const session = await getServerSession(authOptions)

  if (!session || !session.user.token) return null

  const profile = await getUserProfile(session.user.token)

  return (
    <main className='text-black bg-white h-screen pt-20'>
      <TopMenu id={profile.data.name} />
      <div className='items-center'>
        <div className='mx-5 text-3xl font-extrabold pl-20 pt-10'>
          MY BOOKING
        </div>
        <div className='p-5 mx-20 my-5 rounded-3xl bg-gray-100'>
          <Booking/>
        </div>
      </div>
    </main>
  )
}

export default Home