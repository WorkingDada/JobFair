import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { BookingItem } from "../../../interface"

type BookState = {
    booking: BookingItem | null
}

const initialState: BookState = { booking: null }

export const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        addReservation: (state, action: PayloadAction<BookingItem>) => {
            state.booking = (action.payload)
        },

        removeReservation: (state) => {
            state.booking = null;
        }
    }
})

export const { addReservation, removeReservation } = bookSlice.actions
export default bookSlice.reducer