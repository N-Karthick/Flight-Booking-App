import { Card, FormControl, InputLabel, MenuItem,Checkbox, Select, TextField } from '@mui/material'
import React from 'react'

const PinAndState = ({handleSubmit}) => {
    return (
        <div>
            <Card sx={{ width: '58rem', height: 'auto', backgroundColor: 'white', position: 'relative', left: '4rem', marginTop: '20px' }}>

                <h2 style={{ margin: '15px 25px 2px', fontFamily: 'Rubik' }}>YOUR PINCODE AND STATE</h2>
                <p style={{ margin: '0px 20px', fontFamily: 'Rubik', fontSize: '15px' }}>(Required for GST purpose on your tax invoice. You can edit this anytime later in your profile section. )</p>

        {/* <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}> */}
        <form onSubmit={handleSubmit}  style={{ margin: '20px',display:'flex',alignItems:'center',justifyContent:'space-around' }}>
          <TextField
          id="address"
          label=" Enter Billing Address"
          fullWidth
          margin="normal"
          variant="outlined"
          required
        />
         <TextField
          id="pincode"
          label="Enter Pincode"
          fullWidth
          margin="normal"
          variant="outlined"
          required
        />
         <FormControl fullWidth variant="outlined" margin="normal" required>
          <InputLabel id="state-label">State</InputLabel>
          <Select
            labelId="state-label"
            id=" state"
            label="Select State"
            defaultValue=""
          >

            <MenuItem value="Andaman and Nicobar">Andaman and Nicobar</MenuItem>
            <MenuItem value="Andhra Pradesh">Andhra Pradesh</MenuItem>
            <MenuItem value="Arunachal Pradesh">Arunachal Pradesh</MenuItem>
            <MenuItem value="Assam">Assam</MenuItem>
            <MenuItem value="Bihar">Bihar</MenuItem>
            <MenuItem value="Chandigarh">Chandigarh</MenuItem>
            <MenuItem value="Chhattisgarh">Chhattisgarh</MenuItem>
            <MenuItem value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</MenuItem>
            <MenuItem value="Daman and Diu">Daman and Diu</MenuItem>
            <MenuItem value="Delhi">Delhi</MenuItem>
            <MenuItem value="Goa">Goa</MenuItem>
            <MenuItem value="Gujarat">Gujarat</MenuItem>
            <MenuItem value="Haryana">Haryana</MenuItem>
            <MenuItem value="Himachal Pradesh">Himachal Pradesh</MenuItem>
            <MenuItem value="Jammu and Kashmir">Jammu and Kashmir</MenuItem>
            <MenuItem value="Jharkhand">Jharkhand</MenuItem>
            <MenuItem value="Karnataka">Karnataka</MenuItem>
            <MenuItem value="Kerala"> Kerala</MenuItem>
            <MenuItem value="Ladakh">Ladakh </MenuItem>
            <MenuItem value="Lakshadweep">Lakshadweep </MenuItem>
            <MenuItem value="Madhya Pradesh"> Madhya Pradesh</MenuItem>
            <MenuItem value="Maharashtra"> Maharashtra</MenuItem>
            <MenuItem value="Manipur">Manipur </MenuItem>
            <MenuItem value="Meghalaya">Meghalaya</MenuItem>
            <MenuItem value="Mizoram">Mizoram</MenuItem>
            <MenuItem value="Nagaland">Nagaland </MenuItem>
            <MenuItem value="Odisha">Odisha </MenuItem>
            <MenuItem value="Puducherry">Puducherry </MenuItem>
            <MenuItem value="Punjab"> Punjab</MenuItem>
            <MenuItem value="Sikkim"> Sikkim</MenuItem>
            <MenuItem value="Tamil Nadu">Tamil Nadu </MenuItem>
            <MenuItem value="Telangana">Telangana </MenuItem>
            <MenuItem value="Tripura">Tripura </MenuItem>
            <MenuItem value="Uttar Pradesh">Uttar Pradesh </MenuItem>
            <MenuItem value=" Uttarakhand"> Uttarakhand</MenuItem>
            <MenuItem value="West Bengal "> West Bengal</MenuItem>
            <MenuItem value=" OutSide India">OutSide India </MenuItem>
          </Select>
        </FormControl>
            
          </form>
 <p style={{fontFamily:'Rubik'}}> <Checkbox/> Confirm and save billing details to your profile</p>
        {/* </div> */}
            </Card>
        </div>
    )
}

export default PinAndState
