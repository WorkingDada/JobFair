import Image from 'next/image';
import { useState } from 'react';

interface Props {
    imgSrc: string;
    companyName: string;
    bookingDate: string;
}

export default function BookingCard({ imgSrc, companyName, bookingDate }: Props) {
    return (
        <div>
            <div className="w-full h-[70%] relative rounded-t-lg">
                <Image src={imgSrc}
                    alt='Company Picture'
                    fill={true}
                    className='object-cover rounded-t-lg' />
            </div>
            <div className="w-full h-[15%] p-[10px]">{companyName}</div>
        </div>
    );
}