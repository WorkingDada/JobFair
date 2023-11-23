import { dbConnect } from "@/db/dbConnect";
import { redirect } from "next/navigation";
import Booking from "@/db/models/Booking";
import TopMenu from "@/components/TopMenu";
import { getServerSession } from 'next-auth'
import { authOptions } from "../../api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";
import BasicCard from "@/components/BasicCard";

export default function CreateBooking({params}:{params : { bookingID : string } }) {

    const handleSubmit = async (CreateBookingForm: FormData) => {
        'use server'

        const session = await getServerSession(authOptions)

        const bookingDate = CreateBookingForm.get('bookingDate')
        const user = session.user._id
        const company = params.bookingID

        // Connect to Database and Create User
        try {
            await dbConnect()
            const booking = await Booking.create({
                "bookingDate": bookingDate,
                'user' : user,
                "company" : company
            })
        } catch (error) {
            console.log("Create Booking Error")
            console.log(error)
        }
        redirect("/")
    };

    return (
        <div>
            <TopMenu />
            <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
                <div className="flex w-full max-w-4xl px-40">
                    {/* Company Sign-Up Box */}
                    <div className="flex items-center justify-center min-h-screen bg-gray-100">
                        <div className="w-full max-w-md px-6 py-10 bg-white rounded-3xl shadow-md bg-gradient-to-r from-purple-600 to-pink-600">
                            <h2 className="mb-6 text-2xl font-semibold text-center text-white">Create New Booking</h2>
                            <form className="space-y-4" action={handleSubmit}>
                                {/* Adjusted form fields for Company */}
                                <input
                                    type="date"
                                    name="bookingDate"
                                    placeholder="Interview Date"
                                    required
                                    className="w-full px-4 py-2 border rounded-full focus:ring focus:ring-purple-300 bg-white"
                                />
                                <button
                                    type="submit"
                                    className="w-full px-6 py-2 text-white text-lg bg-green-500 font-semibold rounded-full hover:bg-green-600 focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
                                >
                                    Create Booking!
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}