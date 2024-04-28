import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import '../Navbar/Navbar.css';
import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined';
import AddHomeWorkOutlinedIcon from '@mui/icons-material/AddHomeWorkOutlined';
import TrainIcon from '@mui/icons-material/Train';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';

const Navbar = () => {
  const [showContent, setShowContent] = useState(false);

  const handleMouseEnter = () => {
    setShowContent(true);
  };

  const handleMouseLeave = () => {
    setShowContent(false);
  };

  return (
    <>
      <nav className="navbar">
        <ul>
          <li><NavLink exact to="/" className="activeHead">goibibo</NavLink></li>
          <li><NavLink to="/flights" className="active flight"><FlightTakeoffOutlinedIcon />Flights</NavLink></li>
          <li><NavLink to="/hotels" className="active flight"><AddHomeWorkOutlinedIcon />Hotels</NavLink></li>
          <li><NavLink to="/trains" className="active flight"><TrainIcon />Trains</NavLink></li>
          <li><NavLink to="/cabs" className="active flight"><LocalTaxiIcon />Cabs</NavLink></li>
          <li><NavLink to="/bus" className="active flight"><AirportShuttleIcon />Bus</NavLink></li>
          <li><NavLink to="/holidays" className="active flight">Holidays</NavLink></li>
          {/* <li><NavLink to="/forex" className="active flight">Forex</NavLink></li> */}
          <li><NavLink to="/manage-booking" className="active flight">Manage Booking</NavLink></li>
          
          <div className='Login-bar' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Card className="Card" style={{ display: showContent ? 'block' : 'none' }}>
              <CardContent>
                <Typography variant="h5" component="div">
                Hey Traveller 
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Login or Signup to access your account.
                </Typography>
                <Button variant="contained" color="primary">
                  Login / Signup
                </Button><br/>
                <Typography variant="h6" component="div">
                Offers
                </Typography>
              </CardContent>
            </Card>
            <li><NavLink to="/LoginSignUp" className="Login-btn"><AccountCircleTwoToneIcon className="Icon" /> LOGIN / SIGNUP</NavLink></li>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
