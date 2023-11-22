export default async function getCompanies() {
    const response = await fetch('http://localhost:5001/api/v1/companies')
    if (!response.ok) {
        throw new Error("Failed to fetch bookings")
    }
    return await response.json()
}