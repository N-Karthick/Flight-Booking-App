import React from 'react'
import Navbar from '../Home/Navbar/Navbar';
import { useSelector } from 'react-redux';
import { Card, CardContent } from '@mui/material';
import indigo from '../Assets/indico-img.png'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import MaximizeIcon from '@mui/icons-material/Maximize';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import RemoveIcon from '@mui/icons-material/Remove';

const TicketReview = () => {
  const SelectedTripDetails = useSelector((state) => state.SelectedTripDetails);
  const formatDate = (dateString) => {
    const options = {month: 'short', day: '2-digit',weekday: 'short',year: 'numeric'};
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
};

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
           <span>
           <span style={{display:'flex'}}>
              <img src={indigo} alt="Plan-Image" /> 
              <p style={{margin:'23px 16px 0px 20px',fontSize:'1.3rem',color:' rgb(113, 113, 113)'}}>IndiGo | 6E 7253</p>
            </span>
           </span>
          <span style={{display:'flex',justifyContent:'space-between'}}>
          <h4 style={{fontSize:'20px',backgroundColor:'rgb(229, 243, 255)',borderRadius:'10px'}}>Start On -  {formatDate(SelectedTripDetails.selectedDate)}</h4>
            <h4 style={{fontSize:'20px',backgroundColor:'rgb(229, 243, 255)',borderRadius:'10px'}}>Arrive on -  {formatDate(SelectedTripDetails.selectedDate)}</h4>
          </span> 
          
          <span style={{display:'flex',justifyContent:'space-between'}}>
            <h1 style={{margin:'0px'}}>20:45</h1>
            <h1 style={{margin:'0px',color:'#00000061'}}> <PlayArrowIcon/><HorizontalRuleIcon/><RemoveIcon/><HorizontalRuleIcon/><RemoveIcon/><HorizontalRuleIcon/><RemoveIcon/><HorizontalRuleIcon/><RemoveIcon/><HorizontalRuleIcon/><RemoveIcon/><HorizontalRuleIcon/><RemoveIcon/><HorizontalRuleIcon/><RemoveIcon/><HorizontalRuleIcon/><RemoveIcon/><HorizontalRuleIcon/><RemoveIcon/><HorizontalRuleIcon/><RemoveIcon/><HorizontalRuleIcon/><RemoveIcon/><HorizontalRuleIcon/><RemoveIcon/><PlayArrowIcon/>
            </h1>
            <h1 style={{margin:'0px'}}>22:15</h1>
          </span>
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
