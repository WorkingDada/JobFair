export default function getBookings(token: string) {
    return fetch('http://localhost:5001/api/v1/bookings', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Failed to fetch bookings: ${response.status}`);
        }
        return response.json();
    });
}
