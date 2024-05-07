import React from 'react'
import { useSelector } from 'react-redux'

const CamcellationCharges = () => {
  const SelectedTripDetails = useSelector((state) => state.SelectedTripDetails);
  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: 'short' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  };
  return (
   <div>
      <hr style={{ position: 'absolute', top: '48px', width: '100%', borderBottom: '2px solid rgba(0, 0, 0, 0.38' }} />

      <span style={{
        position: 'absolute', width: '24rem', height: '10rem', top: '4.5rem', left: '2rem',
        borderRadius: '16px', backgroundColor: ' rgb(244, 244, 244)'
      }}>
        <h4 style={{ fontFamily: 'Rubik' }}>Cancellation Charges</h4> 
        <div style={{display:'flex',justifyContent:'space-around'}}><p style={{ margin:'0px',color: 'rgb(0 0 0 / 51%' }}>Cancel Between (IST)</p><p style={{ margin:'0px',color: 'rgb(0 0 0 / 51%' }}>Fee For All Passenger(s)</p>  </div>
        <hr style={{margin:'10px'}}/>
        <p style={{margin:'3px', fontFamily: 'Rubik' }} > Day - {formatDate(SelectedTripDetails.selectedDate)}</p>
        <p style={{margin:'3px', fontFamily: 'Rubik' }}>  {formatDate(SelectedTripDetails.selectedDate)} - {formatDate(SelectedTripDetails.selectedDate)}</p>

      </span>
      
      <span style={{
        position: 'absolute', width: '24rem', height: '10rem', top: '4.5rem',
        left: '30rem', borderRadius: '16px', backgroundColor: ' rgb(244, 244, 244)'
      }}>
        <h4 style={{ fontFamily: 'Rubik' }}>Reschedule Charges</h4>
        <div style={{display:'flex',justifyContent:'space-around'}}><p style={{ margin:'0px',color: 'rgb(0 0 0 / 51%' }}>Reschedule Between (IST)</p><p style={{ margin:'0px',color: 'rgb(0 0 0 / 51%' }}>Fee For All Passenger(s)</p>  </div>
       <hr style={{margin:'10px'}}/>
        <p style={{margin:'3px', fontFamily: 'Rubik' }} > Day - {formatDate(SelectedTripDetails.selectedDate)}</p>
        <p style={{margin:'3px', fontFamily: 'Rubik' }}>  {formatDate(SelectedTripDetails.selectedDate)} - {formatDate(SelectedTripDetails.selectedDate)}</p>
  </span>
  
    </div>

    
  )
}

export default CamcellationCharges
