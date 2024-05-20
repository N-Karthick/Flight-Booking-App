import React, { useState } from 'react';
import { Card, Button, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import Face6Icon from '@mui/icons-material/Face6';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const TravellerDetails = ({ Adults, Children, Infants }) => {
    const [travellerDetails, setTravellerDetails] = useState({
        adults: Array(Adults).fill({ gender: '', firstName: '', lastName: '' }),
        children: Array(Children).fill({ gender: '', firstName: '', lastName: '' }),
        infants: Array(Infants).fill({ gender: '', firstName: '', lastName: '' }),
    });
    const [extendedAdultDetailsVisible, setExtendedAdultDetailsVisible] = useState(Array(Adults).fill(false));
    const [extendedChildDetailsVisible, setExtendedChildDetailsVisible] = useState(Array(Children).fill(false));
    const [extendedInfantDetailsVisible, setExtendedInfantDetailsVisible] = useState(Array(Infants).fill(false));
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');

    const handleToggleDetailsVisibility = (type, index) => {
        if (type === 'adults') {
            setExtendedAdultDetailsVisible(prev => {
                const newState = [...prev];
                newState[index] = !newState[index];
                return newState;
            });
        } else if (type === 'children') {
            setExtendedChildDetailsVisible(prev => {
                const newState = [...prev];
                newState[index] = !newState[index];
                return newState;
            });
        } else if (type === 'infants') {
            setExtendedInfantDetailsVisible(prev => {
                const newState = [...prev];
                newState[index] = !newState[index];
                return newState;
            });
        }
    };

    const handleInputChange = (type, index, field, value) => {
        setTravellerDetails(prev => {
            const newState = { ...prev };
            newState[type][index] = { ...newState[type][index], [field]: value };
            return newState;
        });
    };

    const handleProceed = () => {
        const payload = {
            travellerDetails,
            email,
            mobile
        };
        // Handle form submission logic here
        console.log('Form Submitted', payload);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Card sx={{ width: '60rem', height: 'auto', backgroundColor: '#f5f5f5bf', margin: '1.4rem' }}>
                <h3 style={{ fontFamily: 'Rubik', fontWeight: '450', textAlign: 'center' }}>Traveller Details</h3>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            {[...Array(Adults)].map((_, index) => (
                                <div key={index}>
                                    <Card sx={{ width: '54rem', height: 'auto', backgroundColor: '#f5f5f5bf', margin: '1.4rem' }}>
                                        <span>
                                            <PersonIcon sx={{ fontSize: '2.5rem' }} /></span>
                                        <span style={{ fontFamily: 'Rubik', fontSize: '17px' }}> Adult {index + 1}</span>
                                        {extendedAdultDetailsVisible[index] ? (
                                            <KeyboardArrowUpIcon sx={{ fontSize: '2rem', color: '#00000078', marginLeft: '3.4rem ' }} onClick={() => handleToggleDetailsVisibility('adults', index)} />
                                        ) : (
                                            <KeyboardArrowDownSharpIcon sx={{ fontSize: '2rem', color: '#00000078', marginLeft: '5rem ' }} onClick={() => handleToggleDetailsVisibility('adults', index)} />
                                        )}
                                        {extendedAdultDetailsVisible[index] && (
                                            <div style={{ display: 'flex', margin: '1rem' }}>
                                                <div style={{ margin: '1rem' }}>
                                                    <FormControl sx={{ width: '10rem' }} >
                                                        <InputLabel id="gender-label">Gender</InputLabel>
                                                        <Select
                                                            labelId="gender-label"
                                                            id="gender"
                                                            label="Gender"
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
                                                        id={`adult-firstname-${index}`}
                                                        label="First Name"
                                                        variant="outlined"
                                                        style={{ marginRight: '1rem' }}
                                                        value={travellerDetails.adults[index].firstName}
                                                        onChange={(e) => handleInputChange("adults", index, "firstName", e.target.value)}
                                                    />
                                                    <TextField
                                                        id={`adult-lastname-${index}`}
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
                            {[...Array(Children)].map((_, index) => (
                                <div key={index}>
                                    <Card sx={{ width: '54rem', height: 'auto', backgroundColor: '#f5f5f5bf', margin: '1.4rem' }}>
                                        <span>
                                            <Face6Icon sx={{ fontSize: '2.5rem' }} /></span>
                                        <span style={{ fontFamily: 'Rubik', fontSize: '17px' }}> Child {index + 1}</span>
                                        {extendedChildDetailsVisible[index] ? (
                                            <KeyboardArrowUpIcon sx={{ fontSize: '2rem', color: '#00000078', marginLeft: '3.4rem ' }} onClick={() => handleToggleDetailsVisibility('children', index)} />
                                        ) : (
                                            <KeyboardArrowDownSharpIcon sx={{ fontSize: '2rem', color: '#00000078', marginLeft: '5rem ' }} onClick={() => handleToggleDetailsVisibility('children', index)} />
                                        )}
                                        {extendedChildDetailsVisible[index] && (
                                            <div style={{ display: 'flex', margin: '1rem' }}>
                                                <div style={{ margin: '1rem' }}>
                                                    <FormControl sx={{ width: '10rem' }} >
                                                        <InputLabel id="gender-label">Gender</InputLabel>
                                                        <Select
                                                            labelId="gender-label"
                                                            id="gender"
                                                            label="Gender"
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
                                                        onChange={(e) => handleInputChange("children", index, "firstName", e.target.value)}
                                                    />
                                                    <TextField
                                                        id={`child-lastname-${index}`}
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
                            {[...Array(Infants)].map((_, index) => (
                                <div key={index}>
                                    <Card sx={{ width: '54rem', height: 'auto', backgroundColor: '#f5f5f5bf', margin: '1.4rem' }}>
                                        <span>
                                            <PersonIcon sx={{ fontSize: '2.5rem' }} /></span>
                                        <span style={{ fontFamily: 'Rubik', fontSize: '17px' }}> Infant {index + 1}</span>
                                        {extendedInfantDetailsVisible[index] ? (
                                            <KeyboardArrowUpIcon sx={{ fontSize: '2rem', color: '#00000078', marginLeft: '3.4rem ' }} onClick={() => handleToggleDetailsVisibility('infants', index)} />
                                        ) : (
                                            <KeyboardArrowDownSharpIcon sx={{ fontSize: '2rem', color: '#00000078', marginLeft: '5rem ' }} onClick={() => handleToggleDetailsVisibility('infants', index)} />
                                        )}
                                        {extendedInfantDetailsVisible[index] && (
                                            <div style={{ display: 'flex', margin: '1rem' }}>
                                                <div style={{ margin: '1rem' }}>
                                                    <FormControl sx={{ width: '10rem' }} >
                                                        <InputLabel id="gender-label">Gender</InputLabel>
                                                        <Select
                                                            labelId="gender-label"
                                                            id="gender"
                                                            label="Gender"
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
                                                        id={`infant-lastname-${index}`}
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
                        </div>
                    </div>
                    <div>
                        <TextField
                            id="email"
                            label="Email"
                            variant="outlined"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <TextField
                            id="mobile"
                            label="Mobile"
                            variant="outlined"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                        />
                    </div>
                    <Button variant="contained" onClick={handleProceed}>Proceed</Button>
                </div>
            </Card>
        </div>
    );
};

export default TravellerDetails;
