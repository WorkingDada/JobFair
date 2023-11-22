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
import Add from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios'

export default function BasicCard({ json, type, role }: { json: any, type: string, role: string }) {

    const [imgsrc, setImgSrc] = useState(type !== 'booking' ? json.picture : null);
    const companyname = type === 'booking' ? json.company.name : json.name;
    const bookingdate = type === 'booking' ? new Date(json.bookingDate).toDateString() : null;
    const address = json.address;
    const business = json.business;
    const province = json.province;
    const postalcode = json.postalcode;
    const tel = json.tel;

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
    
    const handleDelete = async (event) => {
        event.stopPropagation(); // Prevent the click from bubbling up to the card container
        try {
            // Replace with the actual API endpoint you are using for deletion
            const response = await axios.delete(`/api/deleteCompany/${json.id}`);
            if (response.status === 200) {
                console.log('Company deleted successfully');
                // Optionally, trigger a re-fetch of the data or update state to remove the deleted card
            }
        } catch (error) {
            console.error("Error deleting the company:", error);
            // Handle error, possibly display a message to the user
        }
    };

    return (
        <Card className='hover:scale-110 duration-300 transition ease-in-out' sx={{ width: 320 }}>
            <div>
                <div className='flex'>
                    <Typography level="title-lg">{companyname.toUpperCase()}</Typography>
                    <Typography className="px-2" level="body-sm">{business}</Typography>
                </div>
                {role === 'admin' && (
                    <IconButton
                        aria-label="edit"
                        className='hover:scale-110 duration-300 transition ease-in-out'
                        variant="plain"
                        color="neutral"
                        size="sm"
                        sx={{ position: 'absolute', top: '0.875rem', right: '2.5rem' }} // Adjust position as needed
                    >
                        <EditIcon />
                    </IconButton>
                )}
                {role === 'admin' && (
                    <IconButton className='hover:scale-110 duration-300 transition ease-in-out'
                        aria-label="bookmark"
                        variant="plain"
                        color="neutral"
                        size="sm"
                        onClick={handleDelete} 
                        sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
                    >
                        <DeleteIcon />
                    </IconButton>
                )}
            </div>
            <AspectRatio minHeight="120px" maxHeight="200px">
                <img
                    src={imgsrc}
                    alt={companyname}
                    loading="lazy"
                />
            </AspectRatio>
            <CardContent orientation="horizontal" className="flex items-center justify-between">
                {type === 'booking' && (
                    <div>
                        <Typography level="body-xs">Booking Date:</Typography>
                        <Typography fontSize="md" fontWeight="lg">{bookingdate}</Typography>
                    </div >
                )}
                {type !== 'booking' && (
                    <CardContent>
                        <Typography level="title-md">{address}</Typography>
                        <div className='flex'>
                            <Typography level="body-sm">{province}</Typography>
                            <Typography className='px-2' level="body-sm">{postalcode}</Typography>
                        </div>
                        <Typography level="body-sm">Tel. {tel}</Typography>
                    </CardContent>
                )}
                {/* ADD ACTION TO THIS FORM */}
                <form>
                    <Button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                        variant="solid"
                        type="submit"
                        size="md"
                        color="success"
                        sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
                    >
                        {
                            type === 'booking' ? 'Book Again' : 'Book'
                        }
                    </Button>
                </form>
            </CardContent >
        </Card >
    );

}
