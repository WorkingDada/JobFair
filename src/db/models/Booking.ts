import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
    {
        bookingDate: {
            type: Date,
            required: true,
        },
        user: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
            required: true,
        },
        company: {
            type: mongoose.Schema.ObjectId,
            ref: "Company",
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    });

    const Booking = mongoose.models.Booking || mongoose.model("Booking",BookingSchema)
    
export default Booking;