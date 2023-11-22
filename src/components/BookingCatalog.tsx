import BookingCard from "./BookingCard"
import Link from "next/link"
import RowCard from "./RowCard"
import BasicCard from "./BasicCard"

export default async function BookingCatalog({ bookingjson }: { bookingjson: JSON }) {
    const bookingjsonready = await bookingjson
    return (
        <>
            <div className='bg-transparent flex'>
                {
                    bookingjsonready.data.map((bookingItem: Object) => (
                        <div className="p-5">
                            <BasicCard
                                imgsrc={bookingItem.picture}
                                companyname={bookingItem.company.name}
                                bookingdate={Date(bookingItem.bookingDate).toString()} />
                        </div>

                    ))
                }
            </div>
        </>
    )
}