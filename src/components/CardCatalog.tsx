'use client'
import React, { useState, useEffect } from 'react';
import BasicCard from "./BasicCard";

export default function CardCatalog({ cardjson, typeofcard }: { cardjson: Promise<JSON>, typeofcard: string }) {
    const [cardData, setCardData] = useState([]);

    useEffect(() => {
        cardjson.then(data => {
            setCardData(data.data); // Assuming the structure of your JSON
        });
    }, [cardjson]);

    return (
        <>
            <div className='bg-transparent grid grid-cols-1 sm:grid-cols-3 gap-2 '>
                {
                    cardData.map((jsonItem, index) => (
                        <div className="p-5" key={index}>
                            <BasicCard json={jsonItem} type={typeofcard}/>
                        </div>
                    ))
                }
            </div>
        </>
    );
}
