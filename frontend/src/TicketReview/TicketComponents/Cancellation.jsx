import { Button, Card, CardContent } from '@mui/material'
import React, { useState } from 'react';
import Indigo from '../../Assets/indico-img.png'
import { useSelector } from 'react-redux';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CamcellationCharges from './CamcellationCharges';

const Cancellation = () => {

  const SelectedTripDetails = useSelector((state) => state.SelectedTripDetails)
  const [showUpArrow, setShowUpArrow] = useState(false);
  const [showDownArrow, setShowDownArrow] = useState(true);
  const [cardHeight, setCardHeight] = useState('3rem');
  const [cardParentHeight, setCardParentHeight] = useState('18rem');
  console.log("-->", SelectedTripDetails)

  const handleDownArrow = () => {
    setShowUpArrow(true);
    setShowDownArrow(false);
    setCardHeight('15.5rem');
    setCardParentHeight('30rem')
  };

  const handleUpArrow = () => {
    setShowUpArrow(false);
    setShowDownArrow(true);
    setCardHeight('3rem');
    setCardParentHeight('18rem')
  };
  return (
    <div>
      <Card>
        <CardContent sx={{
          marginTop: '40px', position: 'relative', top: '12rem', height: cardParentHeight, width: '56rem', left: '4rem',
          backgroundColor: 'white', boxShadow: '0.4px 1px 1px 0px', borderRadius: '7px', zIndex: '1', marginTop: '30px'
        }}>
          <p style={{ fontFamily: 'Rubik', fontSize: '1.4rem', margin: '8px', fontWeight: '500' }}> CANCELLATION & DATE CHANGE POLICY</p>


        </CardContent>
        <CardContent >
          <span style={{
            display: 'flex', justifyContent: 'left', position: 'absolute', marginTop: '80px', top: '50rem', height: cardHeight, width: '56rem', left: '6rem',
            backgroundColor: 'white', boxShadow: '-1px 0px 3px 0.5px', borderRadius: '7px', zIndex: '1', margin: '0px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'left', position: 'absolute', }}>
              <img style={{ position: 'relative', top: '2px', left: '12px', width: '40px', height: '40px' }} src={Indigo} alt="Plan-Image" />
              <p style={{ margin: '16px 420px 0px 25px', fontFamily: 'Rubik', fontWeight: '500' }}> {SelectedTripDetails.selectedFormOption}-{SelectedTripDetails.selectedToOption}</p>

              <button style={{ color: 'rgb(24, 161, 96)', backgroundColor: "rgb(205 253 230)", borderRadius: '15px', border: 'none' }}>  Partially Refundable  </button>
              {/* upicon */}
              {!showDownArrow && <button style={{ border: 'none ', backgroundColor: "rgb(205 253 230)", marginLeft: '20px', borderRadius: '40px' }} onClick={handleUpArrow}><KeyboardArrowUpIcon /></button>}
              {/* down icon */}
              {!showUpArrow && <button style={{ border: 'none ', backgroundColor: "rgb(205 253 230)", marginLeft: '20px', borderRadius: '25px' }} onClick={handleDownArrow}><KeyboardArrowDownIcon /></button>}

            </div>
            <span>
             { showUpArrow && <CamcellationCharges/>}
            </span>
          </span>

        </CardContent>
      </Card>
    </div>
  )
}

export default Cancellation
