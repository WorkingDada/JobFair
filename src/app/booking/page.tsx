import BookingForm from "@/components/BookingForm"
import CardCatalog from "@/components/CardCatalog"
import getBookings from "@/libs/getBookings"
import { authOptions } from "../api/auth/[...nextauth]/route"
import getUserProfile from "@/libs/getUserProfile"
import { getServerSession } from "next-auth"
import TopMenu from "@/components/TopMenu"
import NoBookingCard from "@/components/NoBookingCard"

async function Booking(){
    
    const session = await getServerSession(authOptions)
  
    if (!session||!session.user.token) return null
  
    const profile = await getUserProfile(session.user.token)
    
    const bookings = getBookings(session.user.token)

    return (
        <div>
            <div className="grid justify-items-center text-black">
                <CardCatalog cardjson={bookings} typeofcard='bookings' role={profile.data.role}/>
            </div>
        </div>
    )
}

export default Booking