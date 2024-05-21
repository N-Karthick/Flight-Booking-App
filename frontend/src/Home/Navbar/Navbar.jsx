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
    setTimeout(() => {
      setShowContent(false);
    }, 2000);
  };

  return (
    <>
      <nav className="navbar">
        <ul>
          <li><NavLink exact to="/" className="activeHead">goibibo</NavLink></li>
          <li><NavLink to="/" className="active flight"><FlightTakeoffOutlinedIcon sx={{ fontSize:'35px',marginRight:'10px'}}/>Flights</NavLink></li>
          <li><NavLink to="/hotels" className="active flight"><AddHomeWorkOutlinedIcon sx={{ fontSize:'35px',marginRight:'10px'}}/>Hotels</NavLink></li>
          <li><NavLink to="/trains" className="active flight"><TrainIcon sx={{ fontSize:'35px',marginRight:'10px'}} /> Trains</NavLink></li>
          <li><NavLink to="/cabs" className="active flight"><LocalTaxiIcon sx={{ fontSize:'35px',marginRight:'10px'}} />Cabs</NavLink></li>
          <li><NavLink to="/bus" className="active flight"><AirportShuttleIcon sx={{ fontSize:'35px',marginRight:'10px'}} />Bus</NavLink></li>
          <li><NavLink to="/holidays" className="active flight">Holidays</NavLink></li>
          {/* <li><NavLink to="/forex" className="active flight">Forex</NavLink></li> */}
          {/* <li><NavLink to="/manage-booking" className="active flight">Manage Booking</NavLink></li> */}
          
          <div className='Login-bar' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >  {/*onMouseLeave={handleMouseLeave}*/}
            <Card className="Card" style={{ display: showContent ? 'block' : 'none',backgroundColor:'ghostwhite',zIndex:10 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                Hey Traveller 
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Login or Signup to access your account.
                </Typography>
                <Button sx={{border: '3px solid #e29c1a', backgroundColor: 'blue'}} >
                  <NavLink to="/Login" className="Loginlink">  Login </NavLink>
                </Button><br/><br/>
                <Button sx={{border: '3px solid #e29c1a' , backgroundColor: 'blue'}} >
                  <NavLink to="/Signup" className="Loginlink"> SignUp </NavLink>
                
                </Button><br/>
                <Typography variant="h6" component="div">
                Offers
                </Typography>
              </CardContent>
            </Card>
            <li className="Login-btn"><AccountCircleTwoToneIcon className="Icon" /> LOGIN / SIGNUP</li>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
