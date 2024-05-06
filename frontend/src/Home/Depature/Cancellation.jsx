import { Button, Card, CardContent } from '@mui/material'
import React, { useState } from 'react';
import Indigo from '../../Assets/indico-img.png'
import { useSelector } from 'react-redux';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Cancellation = () => {

  const SelectedTripDetails = useSelector((state) => state.SelectedTripDetails)
  const [showUpArrow, setShowUpArrow] = useState(false);
  const [showDownArrow, setShowDownArrow] = useState(true);
  console.log("-->", SelectedTripDetails)

  const handleDownArrow = () => {
    setShowUpArrow(true);
    setShowDownArrow(false);
  };

  const handleUpArrow = () => {
    setShowUpArrow(false);
    setShowDownArrow(true);
  };
  return (
    <div>
      <Card>
        <CardContent sx={{
          marginTop: '40px', position: 'relative', top: '12rem', height: '34rem', width: '56rem', left: '4rem',
          backgroundColor: 'white', boxShadow: '0.4px 1px 1px 0px', borderRadius: '7px', zIndex: '1', marginTop: '30px'
        }}>
          <p style={{ fontFamily: 'Rubik', fontSize: '1.4rem', margin: '8px', fontWeight: '500' }}> CANCELLATION & DATE CHANGE POLICY</p>


        </CardContent>
        <CardContent>

          <span style={{
            display: 'flex', justifyContent: 'left', position: 'absolute', marginTop: '80px', position: 'relative', top: '-19rem', height: '3.2rem', width: '56rem', left: '4rem',
            backgroundColor: 'white', boxShadow: '-1px 0px 3px 0.5px', borderRadius: '7px', zIndex: '1', margin: '0px'
          }}>
            <img style={{ position: 'relative', top: '2px', left: '12px', width: '40px', height: '40px' }} src={Indigo} alt="Plan-Image" />
            <p style={{ margin: '16px 420px 0px 25px', fontFamily: 'Rubik', fontWeight: '500' }}> {SelectedTripDetails.selectedFormOption}-{SelectedTripDetails.selectedToOption}</p>
           
            <button style={{ color: 'rgb(24, 161, 96)', backgroundColor: "rgb(233, 252, 243", borderRadius: '20px', border: '1px solid black' }}>  Partially Refundable  </button>
            {/* upicon */}
            {!showDownArrow && <button style={{ border: 'none ', backgroundColor: "rgb(233, 252, 243", marginLeft: '20px', borderRadius: '25px' }} onClick={handleUpArrow}><KeyboardArrowUpIcon /></button>}
            {/* down icon */}
            {!showUpArrow && <button style={{ border: 'none ', backgroundColor: "rgb(233, 252, 243", marginLeft: '20px', borderRadius: '25px' }} onClick={handleDownArrow}><KeyboardArrowDownIcon /></button>}
          </span>
        </CardContent>
      </Card>
    </div>
  )
}

export default Cancellation
