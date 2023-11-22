import * as React from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

function NoBookingCard() {
    return (
        <Card className='hover:scale-110 duration-300 transition ease-in-out' sx={{ width: 320, textAlign: 'center' }}>
            <CardContent>
                <Typography level="title-lg" sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                    No Booking
                </Typography>
                <Typography sx={{ fontSize: '1rem', marginTop: '1rem' }}>
                    You currently have no bookings.
                </Typography>
            </CardContent>
        </Card>
    );
}

export default NoBookingCard;
