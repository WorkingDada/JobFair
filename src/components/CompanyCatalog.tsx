import ProductCard from "./ProductCard"
import Link from "next/link"

export default async function CompanyCatalog({companyJson}:{companyJson:Object}){
    const companyJsonReady = await companyJson
    return (
        <>
        Explore {companyJsonReady.count} Hospitals in service
        <div style={{margin:"20px", display: "flex", flexDirection: "row",  flexWrap: "wrap", justifyContent: "space-evenly", alignContent: "space-around"
            }}>
                {
                    companyJsonReady.data.map((companyItem:Object)=>(
                        <Link href={`/hospital/${companyItem.id}`} className="w-1/5">
                        <ProductCard 
                        txt={companyItem.name} 
                        imgSrc={companyItem.picture}/>
                        </Link>
                    ))
                }
        </div>
        </>
    )
}