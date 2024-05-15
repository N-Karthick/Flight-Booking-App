import { Card } from '@mui/material'
import React, { useState } from 'react'

const TravellerDetails = () => {
    // const [selectPersonDetails, setSelectPersonalDetails] = useState('false');
    const [selectPersonalDetails, setSelectPersonalDetails] = useState('true');
    const [selectBusinessDetails, setSelectBusinessDetails] = useState('false');

    const handleSelectPersonDetails = (select) => {
        setSelectBusinessDetails(false);
        setSelectPersonalDetails(true);
        console.log("person selecteddd........")
    }
    const handleSelectBusinessDetails = (select) => {
        setSelectPersonalDetails(false);
        setSelectBusinessDetails(true);
        console.log("handleSelectBusinessDetails selecteddd........")
    }
    return (
        <div>
            <Card sx={{ width: '58rem', height: 'auto', backgroundColor: 'white', position: 'relative', left: '4rem', marginTop: '20px' }}>

                <h2 style={{ fontFamily: 'Rubik', fontWeight: '450', margin: '27px' }}>TRAVELLER DETAILS</h2>
                <hr />

                <div style={{position:'relative',left:"22rem",display:'flex',backgroundColor:'rgb(0, 119, 239',alignItems:'center',justifyContent:'center', backgroundColor: 'rgb(0, 119, 239)', border: '2px solid white', borderRadius: '20px ', width: '200px', height: '30px', fontFamily: 'Rubik' }}>
                    <span style={{ fontWeight: '500' , cursor: 'pointer', backgroundColor:selectPersonalDetails ? 'white': 'rgb(0, 119, 239' }} onClick={() => handleSelectPersonDetails('Personal')}> Personal {' '}</span>
                    <span style={{ fontWeight: '500',marginLeft:'20px ',backgroundColor: selectBusinessDetails  ? 'white': 'rgb(0, 119, 239' , cursor: 'pointer' }} onClick={() => handleSelectBusinessDetails('Business')}> Business {' '} </span>
                </div>

            </Card>
        </div>
    )
}

export default TravellerDetails
