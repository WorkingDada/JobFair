import * as React from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import Box from '@mui/material/Box';

interface Props {
  imgsrc: string;
  companyname: string;
  bookingdate: string;
}

export default function RowCard({ imgsrc, companyname, bookingdate }: Props) {
  return (
    <Card orientation="horizontal" variant="outlined" sx={{ display: 'flex', width: '100%', alignItems: 'center' }}>
      <Box sx={{ flex: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 90, height: 90 }}>
        <img
          src={imgsrc}
          srcSet={imgsrc}
          loading="lazy"
          alt={`${companyname} logo`}
          style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
        />
      </Box>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography fontWeight="md" textColor="success.plainColor">
          {companyname}
        </Typography>
        <Typography level="body2">{bookingdate}</Typography>
      </CardContent>
      <CardOverflow
        variant="soft"
        color="primary"
        sx={{
          display: 'flex',
          alignItems: 'center', // This will center the text vertically
          justifyContent: 'center',
          flexDirection: 'column', // Stack children vertically
          py: 2,
          px: 0.5,
          writingMode: 'vertical-rl', // Change writing mode to horizontal
          textAlign: 'center',
          fontSize: 'xs',
          fontWeight: 'xl',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          borderLeft: '1px solid',
          borderColor: 'divider',
          flex: 'none', // Do not allow the ticket area to grow
          width: 'auto', // Set the width to be auto to adjust to content
        }}
      >
        Ticket
      </CardOverflow>
    </Card>
  );
}
