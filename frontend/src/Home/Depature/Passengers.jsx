import { Button, Card, CardActions, CardContent, CardMedia, TextField, Typography } from '@mui/material'
import React from 'react'
import RemoveIcon from '@mui/icons-material/Remove';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { setPassengerCount } from '../../redux/action';

const Passengers = ({ handlePassengersChange }) => {
  const dispatch = useDispatch();
  const { adults, children, infants } = useSelector((state) => state.passengers);
  
  const handleAdultsChange = (value) => {
    dispatch(setPassengerCount({ adults: value, children, infants }));
  };
  
  const handleChildrenChange = (value) => {
    dispatch(setPassengerCount({ adults, children: value, infants }));
  };

  const handleInfantsChange = (value) => {
    dispatch(setPassengerCount({ adults, children, infants: value }));
  };
  
  return (
    <div style={{ position: 'relative', right: '50px' }}>
      <Card sx={{ maxWidth: 745, position: 'relative', left: '90px', boxShadow: '1px 3px 8px 2px', zIndex: 3 }}>
        <TextField sx={{ position: 'relative', left: '30px', top: '20px', width: '300px' }}
          label="Travellers & Class"
          variant="outlined"
          value={`${adults} Adults • ${children} Children • ${infants} Infants`}
          InputProps={{ readOnly: true }}
        ></TextField>
        <br /> <br />
        <hr />
        <CardContent>
          <div style={{ display: 'flex' }}>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '1.5rem', fontWeight: 'bold', marginRight: '3em' }}>
              Adults
            </Typography>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '1.5rem', fontWeight: 'bold', marginRight: '2.6em' }}>
              Children
            </Typography>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '1.5rem', fontWeight: 'bold', marginRight: '1em' }}>
              Infants
            </Typography>
          </div>
        </CardContent>
        <CardActions>
          <div style={{ border: '2px solid ', borderRadius: '10px', color: 'lightgrey' }}>
            <Button size="small" onClick={() => handleAdultsChange(adults - 1)} disabled={adults === 1}>
              <RemoveIcon />
            </Button>
            <Button size="small" onClick={() => handleAdultsChange(adults + 1)}>
              <AddOutlinedIcon />
            </Button>
          </div>
          <div style={{ border: '2px solid ', borderRadius: '10px', color: 'lightgrey' }}>
            <Button size="small" onClick={() => handleChildrenChange(children - 1)} disabled={children === 0}>
              <RemoveIcon />
            </Button>
            <Button size="small" onClick={() => handleChildrenChange(children + 1)}>
              <AddOutlinedIcon />
            </Button>       </div>
          <div style={{ border: '2px solid ', borderRadius: '10px', color: 'lightgrey' }}>
            <Button size="small" onClick={() => handleInfantsChange(infants - 1)} disabled={infants === 0}>
              <RemoveIcon />
            </Button>
            <Button size="small" onClick={() => handleInfantsChange(infants + 1)}>
              <AddOutlinedIcon />
            </Button>         </div>
        </CardActions>
      </Card>
    </div>
  )
}

export default Passengers

