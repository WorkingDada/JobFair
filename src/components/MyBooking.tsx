"use client";
import { removeReservation } from "@/redux/features/bookSlice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";

function MyBooking() {
  const booking = useAppSelector((state) => state.bookSlice.booking);
  const dispatch = useDispatch<AppDispatch>();
  const handleCancelReservation = () => {
    dispatch(removeReservation());
  };

  return (
    <div className="flex items-center justify-center h-[70vh] ">
      {booking ? (
        <div className="max-w-md p-6 px-16 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
          <div className="text-xl font-semibold mb-4 text-gray-700">
            Booking Details
          </div>

          <div className="border-b border-gray-300 pb-2 mb-2">
            <span className="font-medium text-gray-600">Company:</span>
            <span className="text-gray-800 ml-2">{booking.company}</span>
          </div>

          <div className="pb-2">
            <span className="font-medium text-gray-600">Reservation Date:</span>
            <span className="text-gray-800 ml-2">
              {booking.bookingDate}
            </span>
          </div>

          <button
            onClick={handleCancelReservation}
            className="w-full mt-5 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition-colors"
          >
            Cancel Reservation
          </button>
        </div>
      ) : (
        <div className="bg-red-100 p-5 rounded-xl text-red-600 font-semibold">
          No Booking!
        </div>
      )}
    </div>
  );
}

export default MyBooking