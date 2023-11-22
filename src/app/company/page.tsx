import { getServerSession } from 'next-auth'
import getUserProfile from '@/libs/getUserProfile'
import getCompanies from '@/libs/getCompanies'
import { authOptions } from '../api/auth/[...nextauth]/route'
import CardCatalog from '@/components/CardCatalog'
async function company() {
    const session = await getServerSession(authOptions)

    if (!session || !session.user.token) return null

    const profile = await getUserProfile(session.user.token)

    const companies = getCompanies()

    return (
        <div className='pt-40 h-screen bg-white'>
            <div className='p-5 grid justify-items-center text-3xl font-extrabold'>
                Company For Booking!
            </div>
            <div className="grid justify-items-center">
                <CardCatalog cardjson={companies} typeofcard='company' role={profile.data.role}/>
            </div>
        </div>
    )
}

export default company