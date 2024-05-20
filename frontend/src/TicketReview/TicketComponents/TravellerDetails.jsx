    import { Alert, Button, Card, FormControl, IconButton, InputAdornment, InputLabel, MenuItem, Select, TextField } from '@mui/material'
    import React, { useState } from 'react'
    import { useDispatch, useSelector } from 'react-redux';
    import Person3SharpIcon from '@mui/icons-material/Person3Sharp';
    import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
    import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
    import PersonIcon from '@mui/icons-material/Person';
    import Face6Icon from '@mui/icons-material/Face6';
    import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import { travellerDetail } from '../../redux/action';
import { Link } from 'react-router-dom';

    const TravellerDetails = () => {
        const dispatch = useDispatch();

        const SelectedTripDetails = useSelector((state) => state.SelectedTripDetails);
        const PinAndStateDetails = useSelector((state) => state.PinAndStateDetails);
        const error = useSelector((state) => state.error);
        console.log('--------------> ERROR', error);
        const [selectPersonalDetails, setSelectPersonalDetails] = useState('true');
        const [selectBusinessDetails, setSelectBusinessDetails] = useState('false');
        const [extendedDetailsVisible, setExtendedDetailsVisible] = useState(false);
        const [extendedChildDetailsVisible, setExtendedChildDetailsVisible] = useState(false);
        const [extendedInfantdDetailsVisible, setExtendedInfantDetailsVisible] = useState(false);
        const [openAdultDownArrow, setOpenAdultDownArrow] = useState('true');
        const [openAdultUpArrow, setOpenAdultUpArrow] = useState('false');
        const [openChildDownArrow, setOpenChildDownArrow] = useState('true');
        const [openChildUpArrow, setOpenChildUpArrow] = useState('false');
        const [openInfantDownArrow, setOpenInfantDownArrow] = useState('true');
        const [openInfantUpArrow, setOpenInfantUpArrow] = useState('false');
       
        const Adults = SelectedTripDetails.passengersData.adults;
        const Children = SelectedTripDetails.passengersData.children;
        const Infant = SelectedTripDetails.passengersData.infants;

        const [email, setEmail] = useState('');
        const [mobile, setMobile] = useState('');

        const [travellerDetails, setTravellerDetails] = useState({
            adults: Array(Adults).fill({ gender: '', firstName: '', lastName: '' }),
            children: Array(Children).fill({ gender: '', firstName: '', lastName: '' }),
            infants: Array(Infant).fill({ gender: '', firstName: '', lastName: '' }),
        });

        const handleInputChange = (type, index, field, value) => {
            setTravellerDetails(prev => {
                const newState = { ...prev };
                newState[type][index] = { ...newState[type][index], [field]: value };
                return newState;
            });
        };
        const popupStyles = {
            position: 'fixed',
            top: '20%',
            left: '20%',
            width: '60%',
            height: '60%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100,
            backgroundColor: '#000000a8',
            transition: 'opacity 0.5s ease',
            opacity: 1,
          };
                    
        console.log('--------------SelectedTripDetails', Adults, Children, Infant)
        console.log('---------------PinAndStateDetails', PinAndStateDetails)

        const handleSelectPersonDetails = (select) => {
            setSelectBusinessDetails(false);
            setSelectPersonalDetails(true);
        }
        const handleSelectBusinessDetails = (select) => {
            setSelectPersonalDetails(false);
            setSelectBusinessDetails(true);
        }
        const handleEnterPersonDetails = () => {
            setOpenAdultDownArrow(false);
            setOpenAdultUpArrow(true);
            setExtendedDetailsVisible(true);
        }

        const handleClosePersonDetails = () => {
            setOpenAdultUpArrow(false);
            setOpenAdultDownArrow(true);
            setExtendedDetailsVisible(false);
        }
        const handleEnterChildDetails = () => {
            setOpenChildDownArrow(false);
            setOpenChildUpArrow(true);
            setExtendedChildDetailsVisible(true);
        }

        const handleCloseChildDetails = () => {
            setOpenChildUpArrow(false);
            setOpenChildDownArrow(true);
            setExtendedChildDetailsVisible(false);
        }
        const handleEnterInfantDetails = () => {
            setOpenInfantDownArrow(false);
            setOpenInfantUpArrow(true);
            setExtendedInfantDetailsVisible(true);
        }

        const handleCloseInfantDetails = () => {
            setOpenInfantUpArrow(false);
            setOpenInfantDownArrow(true);
            setExtendedInfantDetailsVisible(false);
        }
        
    //    const handleToggleDetailsVisibility = (type, index) => {
    //     if (type === 'adults') {
    //         setExtendedDetailsVisible(prev => {
    //             const newState = [...prev];
    //             newState[index] = !newState[index];
    //             return newState;
    //         });
    //     } else if (type === 'children') {
    //         setExtendedChildDetailsVisible(prev => {
    //             const newState = [...prev];
    //             newState[index] = !newState[index];
    //             return newState;
    //         });
    //     } else if (type === 'infants') {
    //         setExtendedInfantDetailsVisible(prev => {
    //             const newState = [...prev];
    //             newState[index] = !newState[index];
    //             return newState;
    //         });
    //     }
    // };
    

        const handleProceed = () => {
            const TravellerDetails = {
                SelectedTripDetails,
                PinAndStateDetails,
                email,
                mobile,
                travellerDetails
            }
            dispatch(travellerDetail(TravellerDetails));
            console.log('================>handleProceed', TravellerDetails)
        }
        return (
            <div>
                <Card sx={{ width: '58rem', height: 'auto', backgroundColor: 'white', position: 'relative', left: '4rem', marginTop: '20px' }}>

                    <h2 style={{ fontFamily: 'Rubik', fontWeight: '450', margin: '27px' }}>TRAVELLER DETAILS</h2>
                    <hr />

                    <div style={{ position: 'relative', left: "22rem", display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', borderRadius: '20px ', border: '2px solid white', width: '197px', height: '30px', fontFamily: 'Rubik' }}>
                        <span style={{
                            fontWeight: '800', cursor: 'pointer',
                            backgroundColor: selectPersonalDetails ? 'white' : 'rgb(0, 119, 239', width: '120px', color: selectPersonalDetails ? 'black' : 'white', borderRadius: '30px 0px 0px 30px', height: '30px', padding: '12px 33px 3px 16px'
                        }}
                            onClick={() => handleSelectPersonDetails('Personal')}> Personal {' '}</span>
                        <span style={{
                            fontWeight: '800', marginLeft: '0px ',
                            backgroundColor: !selectPersonalDetails ? 'white' : 'rgb(0, 119, 239', color: selectBusinessDetails ? 'black' : 'white', width: '120px', borderRadius: '0px 30px 30px 0px', height: '30px', cursor: 'pointer', padding: '12px 33px 3px 16px'
                        }}
                            onClick={() => handleSelectBusinessDetails('Business')}> Business {' '} </span>
                    </div>
                    <div>
                        <div>
                            {(selectBusinessDetails && !selectPersonalDetails) && <div style={{ backgroundColor: '#9cf1d169', width: '54rem ', height: 'auto', margin: '1.2rem ' }}>
                                <Card sx={{ backgroundColor: 'whitesmoke', height: '7rem ' }}>
                                    <h5 style={{ fontFamily: 'Rubik', fontSize: '17px', margin: '0.4rem' }}>GST Details</h5>
                                    <TextField sx={{ width: '400px', height: '52px', backgroundColor: 'white' }}
                                        id="Company Name"
                                        label="Company Name"
                                        variant="outlined"
                                        style={{ marginRight: '1rem' }}
                                    />
                                    <TextField sx={{ width: '400px', height: '52px ', backgroundColor: 'white' }}
                                        id="Registration No"
                                        label="Registration No"
                                        variant="outlined"
                                        style={{ marginRight: '1rem' }}
                                    />
                                </Card>

                            </div>}
                            <div style={{ backgroundColor: '#00ffd952', margin: '1rem', width: '54rem', height: '1.7rem' }}> <span style={{ fontFamily: 'Rubik', fontSize: '13.5px ' }} >
                                <span style={{ backgroundColor: '#3fd386eb', fontFamily: 'Rubik' }}>NOTE : </span>
                                --Please make sure you enter the Name as per your govt. photo id.
                            </span></div>
                            <div>
                                {[...Array(Adults)].map((_, index) => (
                                    <div key={index}>
                                        <Card sx={{ width: '54rem', height: 'auto', backgroundColor: '#f5f5f5bf', margin: '1.4rem' }}>
                                            <span>
                                                <Person3SharpIcon sx={{ fontSize: '2.5rem' }} /></span>
                                            <span style={{ fontFamily: 'Rubik', fontSize: '17px' }}> Adult {index + 1}</span>
                                            {openAdultDownArrow && (<KeyboardArrowDownSharpIcon sx={{ fontSize: '2rem', color: '#00000078', marginLeft: '3.4rem ' }} onClick={handleEnterPersonDetails} />)}
                                            {(!openAdultDownArrow && openAdultUpArrow) && (<KeyboardArrowUpIcon sx={{ fontSize: '2rem', color: '#00000078', marginLeft: '3.4rem ' }} onClick={handleClosePersonDetails} />)}
                                            {extendedDetailsVisible && (
                                                <div style={{ display: 'flex', margin: '1rem' }}>
                                                    <div style={{ margin: '1rem' }}>
                                                        <FormControl sx={{ width: '10rem' }} >
                                                            <InputLabel id="gender-label">Gender</InputLabel>
                                                            <Select
                                                                labelId="gender-label"
                                                                id="gender"
                                                                label="Gender"
                                                                defaultValue=""
                                                                value={travellerDetails.adults[index].gender}
                                                                onChange={(e) => handleInputChange("adults", index, "gender", e.target.value)}
                                                            >
                                                                <MenuItem value="male">Male</MenuItem>
                                                                <MenuItem value="female">Female</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </div>
                                                    <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', marginTop: '1rem' }}>
                                                        <TextField
                                                            id={`child-firstname-${index}`}
                                                            label="First Name"
                                                            variant="outlined"
                                                            style={{ marginRight: '1rem' }}
                                                            value={travellerDetails.adults[index].firstName}
                                                            onChange={(e) => handleInputChange("adults", index, "firstName", e.target.value)}
                                                        />
                                                        <TextField
                                                            id="lastname"
                                                            label="Last Name"
                                                            variant="outlined"
                                                            value={travellerDetails.adults[index].lastName}
                                                            onChange={(e) => handleInputChange("adults", index, "lastName", e.target.value)}
                                                        />
                                                    </div>
                                                </div>

                                            )}
                                        </Card>
                                    </div>
                                ))}
                            </div>
                            <div style={{ marginBottom: '1rem ' }}>

                                {[...Array(Children)].map((_, index) => (
                                    <div key={index} style={{ marginBottom: '1.5rem' }}>
                                        <Card sx={{ width: '54rem', height: 'auto', backgroundColor: '#f5f5f5bf', margin: '1.4rem' }}>
                                            <span>
                                                <PersonIcon sx={{ fontSize: '2.5rem' }} /></span>
                                            <span style={{ fontFamily: 'Rubik', fontSize: '17px' }}> Children {index + 1}</span>
                                            {openChildDownArrow && (<KeyboardArrowDownSharpIcon sx={{ fontSize: '2rem', color: '#00000078', marginLeft: '3.4rem ' }} onClick={handleEnterChildDetails} />)}
                                            {(!openChildDownArrow && openChildUpArrow) && (<KeyboardArrowUpIcon sx={{ fontSize: '2rem', color: '#00000078', marginLeft: '3.4rem ' }} onClick={handleCloseChildDetails} />)}
                                            {extendedChildDetailsVisible && (
                                                <div style={{ display: 'flex', margin: '1rem' }}>
                                                    <div style={{ margin: '1rem' }}>
                                                        <FormControl sx={{ width: '10rem' }} >
                                                            <InputLabel id="gender-label">Gender</InputLabel>
                                                            <Select
                                                                labelId="gender-label"
                                                                id="gender"
                                                                label="Gender"
                                                                defaultValue=""
                                                                value={travellerDetails.children[index].gender}
                                                                onChange={(e) => handleInputChange("children", index, "gender", e.target.value)}
                                                            >
                                                                <MenuItem value="male">Male</MenuItem>
                                                                <MenuItem value="female">Female</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </div>
                                                    <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', marginTop: '1rem' }}>
                                                        <TextField
                                                            id={`child-firstname-${index}`}
                                                            label="First Name"
                                                            variant="outlined"
                                                            style={{ marginRight: '1rem' }}
                                                            value={travellerDetails.children[index].firstName}
                                                            onChange={(e) =>handleInputChange ("children", index, "firstName", e.target.value)}
                                                        />
                                                        <TextField
                                                            id="lastname"
                                                            label="Last Name"
                                                            variant="outlined"
                                                            value={travellerDetails.children[index].lastName}
                                                            onChange={(e) => handleInputChange("children", index, "lastName", e.target.value)}
                                                        />
                                                    </div>
                                                </div>

                                            )}
                                        </Card>
                                    </div>
                                ))}
                            </div>
                            {[...Array(Infant)].map((_, index) => (
                                <div key={index}>
                                    <Card sx={{ width: '54rem', height: 'auto', backgroundColor: '#f5f5f5bf', margin: '1.4rem' }}>
                                        <span>
                                            <Face6Icon sx={{ fontSize: '2.5rem' }} /></span>
                                        <span style={{ fontFamily: 'Rubik', fontSize: '17px' }}> Infant {index + 1}</span>
                                        {openInfantDownArrow && (<KeyboardArrowDownSharpIcon sx={{ fontSize: '2rem', color: '#00000078', marginLeft: '4.6rem ' }} onClick={handleEnterInfantDetails} />)}
                                        {(!openInfantDownArrow && openInfantUpArrow) && (<KeyboardArrowUpIcon sx={{ fontSize: '2rem', color: '#00000078', marginLeft: '3.4rem ' }} onClick={handleCloseInfantDetails} />)}
                                        {extendedInfantdDetailsVisible && (
                                            <div style={{ display: 'flex', margin: '1rem' }}>
                                                <div style={{ margin: '1rem' }}>
                                                    <FormControl sx={{ width: '10rem' }} >
                                                        <InputLabel id="gender-label">Gender</InputLabel>
                                                        <Select
                                                            labelId="gender-label"
                                                            id="gender"
                                                            label="Gender"
                                                            defaultValue=""
                                                            value={travellerDetails.infants[index].gender}
                                                            onChange={(e) => handleInputChange("infants", index, "gender", e.target.value)}
                                                        >
                                                            <MenuItem value="male">Male</MenuItem>
                                                            <MenuItem value="female">Female</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </div>
                                                <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', marginTop: '1rem' }}>
                                                    <TextField
                                                        id={`infant-firstname-${index}`}
                                                        label="First Name"
                                                        variant="outlined"
                                                        style={{ marginRight: '1rem' }}
                                                        value={travellerDetails.infants[index].firstName}
                                                        onChange={(e) => handleInputChange("infants", index, "firstName", e.target.value)}
                                                    />
                                                    <TextField
                                                        id="lastname"
                                                        label="Last Name"
                                                        variant="outlined"
                                                        value={travellerDetails.infants[index].lastName}
                                                        onChange={(e) => handleInputChange("infants", index, "lastName", e.target.value)}
                                                    />
                                                </div>
                                            </div>

                                        )}
                                    </Card>
                                </div>
                            ))}
                            <div style={{ fontFamily: 'Rubik', margin: '2.5rem ' }}>
                                Email Address
                                <TextField
                                    sx={{ margin: '0rem 0rem 0rem 4rem', width: '400px' }}
                                    id="address"
                                    label="Enter Billing Address"
                                    variant="outlined"
                                    required
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <IconButton>
                                                    <MailOutlineOutlinedIcon />
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />  Your ticket will be sent to this email
                            </div>
                            <div style={{ fontFamily: 'Rubik', margin: '-0.9rem 0rem 2rem 2rem' }}>
                                Mobile Number
                                <TextField
                                    sx={{ margin: '0rem 0rem 0rem 4rem', width: '380px' }}
                                    id="Mobile"
                                    label="Enter Mobile Number"
                                    variant="outlined"
                                    required
                                    value={mobile}
                                    onChange={(e) => setMobile(e.target.value)}
                                />
                            </div>
                            <hr />
                            <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '0.5rem' }}><Button sx={{ border: '2px solid white', backgroundColor: '#f37638', color: 'white', width: '200px' }} onClick={handleProceed}> Proceed</Button>
                            </div>
                        </div>

                    </div>
                   
                    {error && (
          <div style={popupStyles}>
            <Alert
              sx={{ zIndex: 10 ,color:'red',fontFamily:'Rubik',fontSize:"18px"}}
              severity="warning"
            >
              {error.message}
            </Alert>
            
            <Button variant="outline"  sx={{ backgroundColor: 'white', color: 'black','&:hover': 
            {backgroundColor: '#007bffba',},position:'relative',top:'15%',left:'15%' }}
    >
      <Link to="/login" style={{ color: 'inherit', textDecoration: 'none' }}>
        Login here
      </Link>
    </Button>
  
          </div>
        )}
                </Card>
              
            </div>
        )
    }

    export default TravellerDetails

