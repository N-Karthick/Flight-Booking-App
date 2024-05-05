import React from 'react'
import Navbar from '../Home/Navbar/Navbar';
import { useSelector } from 'react-redux';
import { Card, CardContent } from '@mui/material';

const TicketReview = () => {
  const SelectedTripDetails = useSelector((state) => state.SelectedTripDetails);

  console.log("-------------->SelectedTripDetails", SelectedTripDetails)
  return (
    <div>
      <Navbar />
      <Card>
        {/*---------------- color bar ----------------------*/}
        <CardContent sx={{ width: '94rem', height: '25rem', backgroundColor: '#2173E3', zIndex: '1' }}>
          <h2 style={{ color: 'rgb(255, 255, 255)', fontSize: '1.7rem', fontFamily: 'Rubik, sans-serif', position: 'relative', left: '55px', top: '7px' }}>
            Review your booking
          </h2>
        </CardContent>


        {/*---------------- top large bar MAIN ----------------------*/}
        <CardContent sx={{
          position: 'absolute', top: '12rem', height: '50rem', width: '56rem', left: '5rem',
          backgroundColor: 'white', boxShadow: '0.4px 1px 1px 0px', borderRadius: '7px'
        }}>

          <h3 style={{ fontSize: '23px', margin: '0px' }}> {SelectedTripDetails.selectedFormOption} -  {SelectedTripDetails.selectedToOption}<br />  </h3>
          <h4 style={{ margin: '3px', color: '#0000008a ' }}>1 Stop | All departure/arrival times are in local time</h4>

          {/*---------------- top large bar ----------------------*/}
          <CardContent sx={{
            position: 'absolute', top: '6rem', height: '42rem', width: '52rem', left: '2rem',
            backgroundColor: 'white', border: '1px solid #0000004a', borderRadius: '5px'
          }}>

            <p style={{fontSize:'20px'}}>Start On - {SelectedTripDetails.selectedDate}</p>
            <hr />
          </CardContent>
        </CardContent>

        {/*---------------- side small bar ----------------------*/}
        <CardContent sx={{
          position: 'absolute', top: '12rem', height: '22rem', width: '18rem', left: '67rem',
          backgroundColor: 'white', boxShadow: '1px 1px 0px 2px', borderRadius: '7px'
        }}>


        </CardContent>
      </Card>
    </div>
  )
}

export default TicketReview
