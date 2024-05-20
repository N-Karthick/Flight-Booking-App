import { Card, FormControl, InputLabel, MenuItem, Checkbox, Select, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPinAndState } from '../../redux/action';

const PinAndState = () => {
  const dispatch = useDispatch();
  const PinAndStateDetails = useSelector((state) => state.PinAndStateDetails);
  const [isChecked, setIsChecked] = useState(false);
  const [billingAddress, setBillingAddress] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [state, setState] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isChecked) {
      dispatch(setPinAndState({ billingAddress, pinCode, state }));
    } 
   
  };
 
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
    if (e.target.checked) {
      dispatch(setPinAndState({ billingAddress, pinCode, state }));
    }
  };

  // console.log('================>>outside', PinAndStateDetails);

  return (
    <div>
      <Card sx={{ width: '58rem', height: 'auto', backgroundColor: 'white', position: 'relative', left: '4rem', marginTop: '20px' }}>
        <h2 style={{ margin: '15px 25px 2px', fontFamily: 'Rubik' }}>YOUR PINCODE AND STATE</h2>
        <p style={{ margin: '0px 20px', fontFamily: 'Rubik', fontSize: '15px' }}>(Required for GST purpose on your tax invoice. You can edit this anytime later in your profile section. )</p>
        <form onSubmit={handleSubmit} style={{ margin: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
          <TextField
            id="address"
            label="Enter Billing Address"
            fullWidth
            margin="normal"
            variant="outlined"
            required
            value={billingAddress}
            onChange={(e) => setBillingAddress(e.target.value)}
          />
          <TextField
            id="pincode"
            label="Enter Pincode"
            fullWidth
            margin="normal"
            variant="outlined"
            required
            value={pinCode}
            onChange={(e) => setPinCode(e.target.value)}
          />
          <FormControl fullWidth variant="outlined" margin="normal" required>
            <InputLabel id="state-label">State</InputLabel>
            <Select
              labelId="state-label"
              id="state"
              label="Select State"
              defaultValue=""
              value={state}
              onChange={(e) => setState(e.target.value)}
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
              <MenuItem value="Kerala">Kerala</MenuItem>
              <MenuItem value="Ladakh">Ladakh</MenuItem>
              <MenuItem value="Lakshadweep">Lakshadweep</MenuItem>
              <MenuItem value="Madhya Pradesh">Madhya Pradesh</MenuItem>
              <MenuItem value="Maharashtra">Maharashtra</MenuItem>
              <MenuItem value="Manipur">Manipur</MenuItem>
              <MenuItem value="Meghalaya">Meghalaya</MenuItem>
              <MenuItem value="Mizoram">Mizoram</MenuItem>
              <MenuItem value="Nagaland">Nagaland</MenuItem>
              <MenuItem value="Odisha">Odisha</MenuItem>
              <MenuItem value="Puducherry">Puducherry</MenuItem>
              <MenuItem value="Punjab">Punjab</MenuItem>
              <MenuItem value="Sikkim">Sikkim</MenuItem>
              <MenuItem value="Tamil Nadu">Tamil Nadu</MenuItem>
              <MenuItem value="Telangana">Telangana</MenuItem>
              <MenuItem value="Tripura">Tripura</MenuItem>
              <MenuItem value="Uttar Pradesh">Uttar Pradesh</MenuItem>
              <MenuItem value="Uttarakhand">Uttarakhand</MenuItem>
              <MenuItem value="West Bengal">West Bengal</MenuItem>
              <MenuItem value="OutSide India">OutSide India</MenuItem>
            </Select>
          </FormControl>
        </form>
        <p style={{ fontFamily: 'Rubik' }}>
          <Checkbox checked={isChecked} onChange={handleCheckboxChange} /> Confirm and save billing details to your profile
        </p>
      </Card>
    </div>
  );
};

export default PinAndState;
