export default async function getBooking(id:string) {
    await new Promise((resolve)=>setTimeout(resolve,5000))
    

    const response = await fetch(`http://localhost:5001/api/v1/bookings/${id}`)
    if (!response.ok) {
        throw new Error(`Failed to fetch booking ID:${id}`)
    }
    return await response.json()
}