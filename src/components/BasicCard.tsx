'use client'
import { useEffect, useState } from 'react';
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import getCompany from '@/libs/getCompany'
import CircularProgress from '@mui/material/CircularProgress'; 

export default function BasicCard({ json, type }: { json: any, type: string }) {
    
    const [imgsrc, setImgSrc] = useState(type !== 'booking' ? json.picture : null);
    const companyname = type === 'booking' ? json.company.name : json.name;
    const bookingdate = type === 'booking' ? new Date(json.bookingDate).toDateString() : null;

    useEffect(() => {
        const fetchCompanyData = async () => {
            if (type === 'booking' && json.company) {
                try {
                    const response = await getCompany(json.company.id);
                    setImgSrc(response.data.picture);
                } catch (error) {
                    console.error("Error fetching company data:", error);
                }
            }
        };

        fetchCompanyData();
    }, [json, type]); // Dependencies: json and type

    return (
        <Card className='hover:scale-110 duration-300 transition ease-in-out' sx={{ width: 320 }}>
            <div>
                <Typography level="title-lg">{companyname}</Typography>
                <IconButton className='hover:scale-110 duration-300 transition ease-in-out'
                    aria-label="bookmark"
                    variant="plain"
                    color="neutral"
                    size="sm"
                    sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
                >
                    <DeleteIcon/>
                </IconButton>
            </div>
            <AspectRatio minHeight="120px" maxHeight="200px">
                <img
                    src={imgsrc}
                    alt={companyname}
                    loading="lazy"
                />
            </AspectRatio>
            <CardContent orientation="horizontal">
                {type === 'booking' && (
                    <div>
                        <Typography level="body-xs">Booking Date:</Typography>
                        <Typography fontSize="md" fontWeight="lg">{bookingdate}</Typography>
                    </div >
                )}
                <Button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                    variant="outlined"
                    size="md"
                    color="primary"
                    sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
                >
                    Edit
                </Button>
            </CardContent >
        </Card >
    );
    
}
