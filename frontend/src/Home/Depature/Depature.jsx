import React, { useState, useRef, useEffect } from 'react';
import { TextField, Button, Card, CardContent, Typography, RadioGroup, FormControlLabel, Radio, Checkbox } from '@mui/material';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
// import '../Depature/Depature.css';
import Passengers from './Passengers';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useDispatch, useSelector } from 'react-redux';
import { userTripDetails } from '../../redux/action';
import backgroundImage from '../../Assets/background-image.png';


const DepartureForm = () => {
    const dispatch = useDispatch();
    const passengersData = useSelector((state) => state.passengers);
    // console.log("=========>", passengersData)

    const [showFormOptions, setshowFormOptions] = useState(false);
    const [showFormCards, setshowFormCards] = useState(false);
    const [showToOptions, setshowToOptions] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');
    const formOptions = ["Chennai", "Madurai", "Palani"];
    const [selectedFormOption, setselectedFormOption] = useState('');
    const [selectedToOption, setselectedToOption] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [showPassengers, setShowPassengers] = useState(false);
    const passengersRef = useRef(null);

    const handleFromClick = () => {
        setshowFormOptions(!showFormOptions);
        setshowFormCards(!showFormCards);
    };

    const handleToClick = () => {
        setshowToOptions(!showToOptions);
    };

    const handleFormOptionSelect = (option) => {
        setselectedFormOption(option);
        setshowFormOptions(false);
    };

    const handleToOptionSelect = (option) => {
        setselectedToOption(option);
        setshowToOptions(false);
    };

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleAddPassengers = () => {
        setShowPassengers(true);
    };

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    const handlePassengersChange = (event) => {
        const selectedValue = event.target.value;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
            selectedFormOption,
            selectedToOption,
            selectedDate,
            passengersData
        };
        console.log("Form submitted with data:", formData);
        dispatch(userTripDetails(formData));
    };

    const handleClickOutside = (event) => {
        if (passengersRef.current && !passengersRef.current.contains(event.target)) {
            setShowPassengers(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const filteredOptions = formOptions.filter(option =>
        option.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
        <div className='Depature-head' style={{   backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',  position: 'relative',
        top: "0px" }}>
            <Typography variant="h5" style={{ maxWidth: '70%', margin: '13px auto 25px', fontFamily: 'monospace', textAlign: 'center' }}>
                Book Domestic and International Flight Tickets
            </Typography>

            <Card style={{
                maxWidth: '83%', margin: 'auto', marginTop: '10px', borderRadius: '10px',
                padding: '40px 60px 70px 44px', position: 'relative', boxSizing: 'border-box', zIndex: 1,
            }}>
                <RadioGroup style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="One-way"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="One-way" control={<Radio />} label="One-way" />
                    <FormControlLabel value="Round-trip" control={<Radio />} label="Round-trip" />
                    <FormControlLabel value="Multi-city" control={<Radio />} label="Multi-city" />
                </RadioGroup>
                <CardContent>
                    <form style={{ display: 'flex', flexDirection: 'row', gap: '30px', height: '100px' }} onSubmit={handleSubmit}>
                        <div style={{ position: 'relative' }}>
                            <TextField
                                label="From"
                                variant="outlined"
                                onFocus={handleFromClick}
                                onBlur={() => setTimeout(() => setshowFormOptions(false), 200)}
                                value={selectedFormOption}
                                onChange={handleSearchChange}
                            />
                            <SwapHorizIcon style={{ position: 'absolute', right: '-37px', cursor: 'pointer', fontSize: '2.8rem', color: '#aab' }} />
                            {showFormOptions && (
                                <div style={{ position: 'absolute', top: '100%', left: 0, width: '10rem', zIndex: 1, backgroundColor: '#aaa', border: '3px solid #ccc', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                                    {filteredOptions.map(option => (
                                        <div key={option} onClick={() => handleFormOptionSelect(option)} style={{ padding: '8px', cursor: 'pointer', borderBottom: '1px solid #ccc' }}>
                                            {option}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div style={{ position: 'relative' }}>
                            <TextField label="To" variant="outlined"
                                onFocus={handleToClick}
                                onBlur={() => setTimeout(() => setshowToOptions(false), 200)}
                                value={selectedToOption}
                                onChange={handleSearchChange}
                            />
                            {showToOptions && (
                                <div style={{ position: 'absolute', top: '100%', left: 0, width: '100%', zIndex: 1, backgroundColor: '#aaa', border: '2px solid #ccc', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                                    {filteredOptions.map(option => (
                                        <div key={option} onClick={() => handleToOptionSelect(option)} style={{ padding: '8px', cursor: 'pointer', borderBottom: '1px solid #ccc' }}>
                                            {option}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <TextField
                            label="Departure Time"
                            type="date"
                            InputLabelProps={{ shrink: true }}
                            variant="outlined"
                            value={selectedDate}
                            onChange={handleDateChange}
                        />
                        {showPassengers ? (
                            <div ref={passengersRef}>
                                <Passengers handlePassengersChange={handlePassengersChange} />
                            </div>
                        ) : (
                            <Button variant="outlined" color="primary" onClick={handleAddPassengers} >
                                {`${passengersData.adults} Adults • ${passengersData.children} Children • ${passengersData.infants} Infants`}
                            </Button>
                        )}

                       
                    </form>
                </CardContent>
                <CardContent style={{
                    display: 'flex', flexDirection: 'row', width: '100%', backgroundColor: 'rgb(189 239 182 / 49%', height: '75px'
                }}>
                    <div className="persons" style={{ width: '100%', border: '0px solid ', height: '105px' }}>
                        <div style={{
                            border: '2px solid #342bcf', backgroundColor: '#342bcf', borderRadius: '20px', height: '23px', width: '150px',
                            color: 'white', position: 'relative', top: '20px', left: '37px', textAlign: 'center', fontWeight: 'bold'
                        }}>MORE BENEFITS </div>
                        <div style={{
                            position: 'relative', top: '20px', left: '0px', textAlign: 'center',
                            fontSize: '25px', fontWeight: 'bold'
                        }}>Special Fares </div>

                    </div>
                    <div className="persons" style={{
                        width: '100%', backgroundColor: 'white',
                        border: '1px solid rgb(120 120 120 / 19%) ', height: '81px',cursor:'pointer'
                    }}>
                        <Checkbox sx={{ width: '20px', height: '40px', position: 'relative', top: '18px', left: '20px','& .MuiSvgIcon-root': { fontSize: 32,color:'blue' } }} />
                       <span style={{position:'relative',top:'20px',left:'24px', fontSize: '22px'}}>
                         Student</span>
                         <p style={{position:'relative',left:'47px',bottom:'13px',fontSize:'17px',color:'#00000063'}}>
                            Extra Baggage</p>
                        </div>
                    <div className="persons" style={{
                        width: '100%', backgroundColor: 'white',
                        border: '1px solid rgb(120 120 120 / 19%)', height: '81px',cursor:'pointer'
                    }}>
                        <Checkbox sx={{ width: '20px', height: '40px', position: 'relative', top: '18px', left: '20px' ,'& .MuiSvgIcon-root': { fontSize: 32,color:'blue' }}} />
                        <span style={{position:'relative',top:'20px',left:'24px', fontSize: '22px'}}>
                        Senior Citizen</span>
                         <p style={{position:'relative',left:'47px',bottom:'13px',fontSize:'17px',color:'#00000063'}}>
                         Exclusive Discounts</p>
                        </div>
                    <div className="persons" style={{
                        width: '100%', backgroundColor: 'white',
                        border: '1px solid rgb(120 120 120 / 19%)', height: '81px',cursor:'pointer'
                    }}>
                        <Checkbox sx={{ width: '20px', height: '40px', position: 'relative', top: '18px', left: '20px' ,'& .MuiSvgIcon-root': { fontSize: 32,color:'blue' }}} />
                        <span style={{position:'relative',top:'20px',left:'24px', fontSize: '22px'}}>
                        Armed Forces</span>
                         <p style={{position:'relative',left:'47px',bottom:'13px',fontSize:'17px',color:'#00000063'}}>
                         Exclusive Discounts</p> </div>
                    <div className="persons" 
                    style={{ width: '100%', backgroundColor: 'white', 
                    border: '1px solid rgb(120 120 120 / 19%)', height: '81px',cursor:'pointer' }}>
                        <Checkbox sx={{ width: '20px', height: '40px', position: 'relative', top: '18px', left: '20px','& .MuiSvgIcon-root': { fontSize: 32,color:'blue' } }} />
                        <span style={{position:'relative',top:'20px',left:'24px', fontSize: '22px'}}>
                        Doctors & Nurses</span>
                         <p style={{position:'relative',left:'47px',bottom:'13px',fontSize:'17px',color:'#00000063'}}>
                         Exclusive Discounts</p> </div>
                </CardContent>
            </Card>

            <Button variant="contained" type="submit" sx={{backgroundColor:'#e2662e',width:'200px',
             position: 'absolute', left: '640px', bottom: '-10px',zIndex:'10' ,borderRadius:'23px'}}>
                            SEARCH FLIGHTS
                        </Button>
        </div>
    );
};

export default DepartureForm;
