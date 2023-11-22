import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import { format } from 'path';

interface Props {
    companyname: string;
    bookingdate: string;
    imgsrc: string;
}

export default function BasicCard({ companyname, bookingdate, imgsrc }: Props) {

    const formattedDate = new Date(bookingdate).toDateString();

    return (
        <Card sx={{ width: 320 }}>
            <div>
                <Typography level="title-lg">{companyname}</Typography>
                <IconButton
                    aria-label="bookmark Bahamas Islands"
                    variant="plain"
                    color="neutral"
                    size="sm"
                    sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
                >
                    <BookmarkAdd />
                </IconButton>
            </div>
            <AspectRatio minHeight="120px" maxHeight="200px">
                <img
                    src={imgsrc}
                    srcSet={imgsrc}
                    loading="lazy"
                    alt=""
                />
            </AspectRatio>
            <CardContent orientation="horizontal">
                <div>
                    <Typography level="body-xs">Booking Date:</Typography>
                    <Typography fontSize="md" fontWeight="lg">{formattedDate}</Typography>
                </div>
                <Button
                    variant="outlined"
                    size="md"
                    color="primary"
                    aria-label="Explore Bahamas Islands"
                    sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
                >
                    Edit
                </Button>
                <Button
                    variant="outlined"
                    size="md"
                    color="danger"
                    aria-label="Explore Bahamas Islands"
                    sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
                >
                    Remove
                </Button>
            </CardContent>
        </Card>
    );
}