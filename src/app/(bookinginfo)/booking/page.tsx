import getBookings from "@/libs/getBookings"
import BookingCatalog from "@/components/BookingCatalog"

async function bookings(){

    const Bookings = getBookings()
    
    return (
        <main>
            <BookingCatalog bookingJson={Bookings}></BookingCatalog>
        </main>
    )
}

export default bookings