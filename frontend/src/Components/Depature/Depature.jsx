import React, { useState } from 'react';
import { TextField, Button, Card, CardContent, Typography, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import '../Depature/Depature.css';
import Passengers from './Passengers'; 

const DepartureForm = () => {
    const [showFormOptions, setshowFormOptions] = useState(false);
    const [showFormCards, setshowFormCards] = useState(false);
    const [showToOptions, setshowToOptions] = useState(false);
    const formOptions = ["Chennai", "Madurai", "Palani"];
    const [selectedFormOption, setselectedFormOption] = useState('');
    const [selectedToOption, setselectedToOption] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [showPassengers, setShowPassengers] = useState(false);

    const handleFromClick = () => {
        setshowFormOptions(!showFormOptions);
        setshowFormCards(!showFormCards)
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

    const filteredOptions = formOptions.filter(option =>
        option.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
        <div className='Depature-head'>
            <Typography variant="h5" style={{ maxWidth: '70%', margin: '13px auto 25px', fontFamily: 'monospace', textAlign: 'center' }}>
                Book Domestic and International Flight Tickets
            </Typography>

            <Card style={{ maxWidth: '50%', margin: 'auto', marginTop: '10px', borderRadius: '10px', padding: '39px 242px 176px 46px', position: 'relative' }}>
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
                    <form style={{ display: 'flex', flexDirection: 'row', gap: '30px' }}>
                        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
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
                        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
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
                        />
                         <TextField
                        label="Travellers & Class"
                        variant="outlined"
                        onFocus={() => setShowPassengers(true)} // Show Passengers component on focus
                        onBlur={() => setShowPassengers(false)} // Hide Passengers component on blur
                    />
                    {showPassengers && <Passengers />}
                        {/* <Button variant="contained" color="primary" type="submit">
                            SEARCH FLIGHTS
                        </Button> */}
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default DepartureForm;
