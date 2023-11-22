export default async function getCompany(id:string) {
    const response = await fetch(`http://localhost:5001/api/v1/companies/${id}`)
    console.log(response)
    if (!response.ok) {
        throw new Error(`Failed to fetch Company ID:${id}`)
    }
    return await response.json()
}