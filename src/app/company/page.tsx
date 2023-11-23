import { getServerSession } from 'next-auth'
import getUserProfile from '@/libs/getUserProfile'
import getCompanies from '@/libs/getCompanies'
import { authOptions } from '../api/auth/[...nextauth]/route'
import CardCatalog from '@/components/CardCatalog'
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link'
import BasicCard from '@/components/BasicCard'

async function company() {
    const session = await getServerSession(authOptions)

    if (!session || !session.user.token) return null

    const profile = await getUserProfile(session.user.token)

    const companies = getCompanies()

    return (
        <div className='pt-40 h-screen bg-white'>
            <div className='flex justify-between items-center p-5'>
                <div className='text-3xl font-extrabold text-center flex-grow'>Company For Booking!</div>
                {
                    session.user.role === 'admin' ?
                        <Link href='/createcompany' passHref>
                            <IconButton className='flex items-center justify-between' aria-label="add company">
                                <AddIcon fontSize="large" />
                            </IconButton>
                        </Link>
                        :
                        <div></div>
                }
                <div className='h-full w-auto p-5'></div>
            </div>
            <div className="grid justify-items-center">
                <CardCatalog cardjson={companies} typeofcard='companies' role={profile.data.role} />
            </div>
        </div>
    )
}

export default company