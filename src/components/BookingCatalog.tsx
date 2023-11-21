import BookingCard from "./BookingCard"
import Link from "next/link"
import RowCard from "./RowCard"

export default async function BookingCatalog({ bookingjson }: { bookingjson: JSON }) {
    const bookingjsonready = await bookingjson
    return (
        <>
            <div className='px-20 flex flex-row wrap space-evenly space-around'
            >
                {
                    bookingjsonready.data.map((bookingItem: Object) => (
                        
                        <div className="p-5">
                            <RowCard
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