import TopMenu from "@/components/TopMenu"
import BookingForm from "@/components/BookingForm"

function CreateBooking(){
    return (
        <div className="bg-white h-screen">
            <div className="font-bold text-3xl pt-40">
                <BookingForm/>
            </div>
        </div>
    )
}

export default CreateBooking