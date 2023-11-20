export default async function getCompany(id:string) {
    await new Promise((resolve)=>setTimeout(resolve,5000))
    

    const response = await fetch(`http://localhost:5001/api/v1/companies/${id}`)
    if (!response.ok) {
        throw new Error(`Failed to fetch Company ID:${id}`)
    }
    return await response.json()
}