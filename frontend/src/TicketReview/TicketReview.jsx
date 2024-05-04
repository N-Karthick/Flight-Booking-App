import React from 'react'
import Navbar from '../Home/Navbar/Navbar';
import { useSelector } from 'react-redux';
import { Card } from '@mui/material';

const TicketReview = () => {
    const SelectedTripDetails = useSelector((state) => state.SelectedTripDetails);
    
    console.log("-------------->SelectedTripDetails",SelectedTripDetails)
  return (
    <div>
        <Navbar/>
        <Card>
                
        </Card>
    </div>
  )
}

export default TicketReview
