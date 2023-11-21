import BookingForm from "@/components/BookingForm"
import BookingCatalog from "@/components/BookingCatalog"
import getBookings from "@/libs/getBookings"
import { authOptions } from "../api/auth/[...nextauth]/route"
import getUserProfile from "@/libs/getUserProfile"
import { getServerSession } from "next-auth"
import TopMenu from "@/components/TopMenu"

async function Booking(){

    const session = await getServerSession(authOptions)
  
    if (!session||!session.user.token) return null
  
    const profile = await getUserProfile(session.user.token)
    
    const bookings = getBookings(session.user.token)

    return (
        <div>
            <TopMenu id={profile.data.name}/>
            <div className="h-96 bg-white grid justify-items-center text-black">
                <BookingCatalog bookingjson={bookings}/>
            </div>
        </div>
    )
}

export default Booking