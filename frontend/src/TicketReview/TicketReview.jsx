import React, { useState } from 'react'
import Navbar from '../Home/Navbar/Navbar';
import { useSelector } from 'react-redux';
import { Button, Card, CardContent } from '@mui/material';
import indigo from '../Assets/indico-img.png'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import LuggageIcon from '@mui/icons-material/Luggage';
import RemoveCircleTwoToneIcon from '@mui/icons-material/RemoveCircleTwoTone';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import RemoveIcon from '@mui/icons-material/Remove';
import Person3SharpIcon from '@mui/icons-material/Person3Sharp';
import PersonIcon from '@mui/icons-material/Person';
import Face6Icon from '@mui/icons-material/Face6';
import BaggageDetails from './TicketComponents/BaggageDetails';
import CloseIcon from '@mui/icons-material/Close';
import CurrencyRupeeTwoToneIcon from '@mui/icons-material/CurrencyRupeeTwoTone';
import Cancellation from './TicketComponents/Cancellation';
import ImportantInfo from './TicketComponents/ImportantInfo';
import PinAndState from './TicketComponents/PinAndState';
import TravellerDetails from './TicketComponents/TravellerDetails';
import Prices from '../Assets/prices';

const TicketReview = () => {
  const SelectedTripDetails = useSelector((state) => state.SelectedTripDetails);
  const [openBaggage, setOpenBaggage] = useState(false);
  const [closeBaggage, setCloseBaggage] = useState(false);
  const formatDate = (dateString) => {
    const options = { month: 'short', day: '2-digit', weekday: 'short', year: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  };
  const handleBaggage = () => {
    setOpenBaggage(true);
    setCloseBaggage(true);
  }
  const handleClose = () => {
    setOpenBaggage(false);
    setCloseBaggage(false);
  };
  
  const { selectedFormOption, selectedToOption } = SelectedTripDetails;
  const routeKey = `${selectedFormOption}-${selectedToOption}`;
  const price = Prices[routeKey];

  const { adults, children, infants } = SelectedTripDetails.passengersData;
  const totalPrice = (adults * price) + (children * price) + (infants * (price / 2));

  console.log("-------------->routeKey", routeKey);
  console.log("-------------->prices",price)
  return (
    <div>
      <Navbar />
      <Card sx={{ backgroundColor: '#f1dada' }}>
        {/*---------------- color bar ----------------------*/}
        <CardContent sx={{ width: '94rem', height: '25rem', backgroundColor: '#2173E3', zIndex: '1' }}>
          <h2 style={{ color: 'rgb(255, 255, 255)', fontSize: '1.7rem', fontFamily: 'Rubik, sans-serif', position: 'relative', left: '55px', top: '7px' }}>
            Review your booking
          </h2>
        </CardContent>


        {/*---------------- top large bar MAIN ----------------------*/}
        <CardContent sx={{
          position: 'absolute', top: '12rem', height: '29rem', width: '56rem', left: '5rem',
          backgroundColor: 'white', boxShadow: '0.4px 1px 1px 0px', borderRadius: '7px'
        }}>

          <h3 style={{ fontSize: '23px', margin: '0px', fontFamily: 'Rubik' }}> {SelectedTripDetails.selectedFormOption} -  {SelectedTripDetails.selectedToOption}<br />  </h3>
          <h4 style={{ margin: '3px', color: '#0000008a ' }}>1 Stop | All departure/arrival times are in local time</h4>

          {/*---------------- top large bar ----------------------*/}
          <CardContent sx={{
            position: 'absolute', top: '6rem', height: '20rem', width: '52rem', left: '2rem',
            backgroundColor: 'white', border: '1px solid #0000004a', borderRadius: '5px'
          }}>
            <span>
              <span style={{ display: 'flex' }}>
                <img src={indigo} alt="Plan-Image" />
                <p style={{ margin: '23px 16px 0px 20px', fontSize: '1.3rem', color: ' rgb(113, 113, 113)' }}>IndiGo | 6E 7253</p>
              </span>
            </span>
            <span style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h4 style={{ fontSize: '20px', backgroundColor: 'rgb(229, 243, 255)', borderRadius: '10px' }}>Start On -  {formatDate(SelectedTripDetails.selectedDate)}</h4>
              <h4 style={{ fontSize: '20px', backgroundColor: 'rgb(229, 243, 255)', borderRadius: '10px' }}>Arrive on -  {formatDate(SelectedTripDetails.selectedDate)}</h4>
            </span>

            <span style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h1 style={{ margin: '0px' }}>20:45</h1>
              <h1 style={{ margin: '0px', color: '#00000061' }}> <PlayArrowIcon /><HorizontalRuleIcon /><RemoveIcon /><HorizontalRuleIcon /><RemoveIcon /> <HorizontalRuleIcon /><RemoveIcon /><HorizontalRuleIcon /><RemoveIcon /><HorizontalRuleIcon /><RemoveIcon /><HorizontalRuleIcon /><RemoveIcon /><HorizontalRuleIcon /><RemoveIcon /><HorizontalRuleIcon /><RemoveIcon /><HorizontalRuleIcon /><RemoveIcon /><HorizontalRuleIcon /><RemoveIcon /><HorizontalRuleIcon /><RemoveIcon /><HorizontalRuleIcon /><RemoveIcon /><PlayArrowIcon />
              </h1>
              <h1 style={{ margin: '0px' }}>22:15</h1>
            </span>

            <span style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <br /><p style={{ margin: '0px', fontFamily: 'cursive', fontWeight: 'bolder', fontSize: '1.3rem' }}>{SelectedTripDetails.selectedFormOption}</p>
                <p style={{ margin: '0px', fontSize: '1.2rem', color: '#717171' }}>{SelectedTripDetails.selectedFormOption} Airport, India</p>
                <p style={{ margin: '0px 0px 8px 0px', fontSize: '1.2rem', color: '#00A2AD' }}>Terminal T1</p>
              </div>
              <div>
                <br /><p style={{ margin: '0px', fontFamily: 'cursive', fontWeight: 'bolder', fontSize: '1.3rem' }}>{SelectedTripDetails.selectedToOption}</p>
                <p style={{ margin: '0px', fontSize: '1.2rem', color: '#717171' }}>{SelectedTripDetails.selectedToOption} Airport, India</p>
                <p style={{ margin: '0px 0px 8px 0px', fontSize: '1.2rem', color: '#00A2AD' }}>Terminal T1</p>
              </div>
            </span>

            <hr />

            <span>
              <p style={{ margin: '0px', fontSize: '1.1rem', color: '#717171' }} >Baggage - <LuggageIcon sx={{ position: 'absolute', height: '1.4rem', color: 'black' }} /></p>
              <p style={{
                margin: '0px', fontSize: '1.1rem', color: 'black',
                position: 'relative', top: '-18px', left: '100px'
              }}>7 Kgs (1 piece only)</p>
              {closeBaggage && <CloseIcon onClick={handleClose} sx={{ position: 'relative', bottom: '34px', left: '37rem' }} />}
              <button style={{
                margin: '0px', fontSize: '1.2rem', color: '#2276E3', border: 'none', backgroundColor: 'white', cursor: 'pointer',
                position: 'relative', bottom: '40px', left: '600px', fontWeight: 'bold'
              }} onClick={handleBaggage}>View Baggage Details</button>
            </span>

            {openBaggage && <BaggageDetails />}
          </CardContent>
        </CardContent>

        {/*---------------- side small bar ----------------------*/}
        <CardContent sx={{
          position: 'absolute', top: '12rem', height: '22rem', width: '18rem', left: '67rem',
          backgroundColor: 'white', boxShadow: '1px 1px 0px 2px', borderRadius: '7px'
        }}>
          <h2 style={{ margin: '-10px 0px', fontFamily: 'Rubik ' }}>FARE SUMMARY</h2>
          <p style={{ fontFamily: 'Rubik', fontSize: '14.5px' }}>{SelectedTripDetails.passengersData.adults} ADULTS || {SelectedTripDetails.passengersData.children} CHILDREN || {SelectedTripDetails.passengersData.infants} INFANTS   </p>
          <hr />
          <div style={{ display: 'flex', alignItems: 'center',margin:'-16px 0px', fontFamily: 'Rubik' }}>
            <RemoveCircleTwoToneIcon sx={{ margin: '0px' }} />
            <h3 style={{ display: 'inline', margin: '0px', fontWeight: 400 }}>Base fare</h3>
            <h3 style={{display:'flex',alignItems:'center'}}><CurrencyRupeeTwoToneIcon sx={{marginLeft:'5.2rem ',marginTop:'5px'}}/>{totalPrice}</h3> 
          </div>
          <div style={{height:'auto',color:'#0000008a'}}>
         <p style={{height:'auto',display:'flex',alignItems:'center'}}><Person3SharpIcon/> Adult ({SelectedTripDetails.passengersData.adults}* {price}) <span style={{marginLeft: '80px' }}><CurrencyRupeeTwoToneIcon sx={{fontSize:'16px'}}/>{(adults * price)}</span></p>
              {SelectedTripDetails.passengersData.children > 0 && <p style={{height:'auto',display:'flex',alignItems:'center'}}><PersonIcon /> Child ({SelectedTripDetails.passengersData.children}* {price}) <span style={{marginLeft: '80px' }}><CurrencyRupeeTwoToneIcon sx={{fontSize:'16px'}}/>{(children * price)}</span></p>}
              {SelectedTripDetails.passengersData.infants > 0 && <p style={{height:'auto',display:'flex',alignItems:'center'}}><Face6Icon />Infant ({SelectedTripDetails.passengersData.infants}* {price/2}) <span style={{marginLeft: '84px' }}><CurrencyRupeeTwoToneIcon sx={{fontSize:'16px'}}/>{(infants * price/2)}</span></p>}
                       </div>
                       <hr />
                       <span><p style={{fontFamily:'Rubik',fontSize:'18px', display:'flex',alignItems:'center'}}>Taxes and Surcharges <CurrencyRupeeTwoToneIcon sx={{margin:'0px 15px '}}/> {totalPrice/4}</p> </span>
                       <hr/>

        </CardContent>
        {/*---------------- cancel policy ----------------------*/}
        <Cancellation />

        <ImportantInfo />

        <PinAndState />

        <TravellerDetails />
      </Card>

    </div>

  )
}

export default TicketReview
