
import { Table, TableCell, TableContainer, TableHead, TableRow,TableBody, Paper, Card } from '@mui/material';
import React from 'react';

const BaggageDetails = () => {
  return (
    <Card sx={{ position: 'absolute', top: '140%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '5', width: '80%', maxWidth: '600px' }}>
    <h2 style={{marginLeft:'40px'}}> Baggage Details</h2>
   {/* <h2 style={{margin:'0px',position:'relative',top:'-36px',left:'48rem',cursor:'pointer'}}><CloseIcon/></h2> */}
    <TableContainer component={Paper} style={{backgroundColor:'tomato'}}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Flight</TableCell>
            <TableCell>Baggage Type</TableCell>
            <TableCell>Check-In</TableCell>
            <TableCell>Cabin</TableCell>
            <TableCell>Weight</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>IXM-MAA (6E 72531)</TableCell>
            <TableCell>Check-In</TableCell>
            <TableCell>Cabin</TableCell>
            <TableCell>15 Kgs (1 piece only)</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>MAA-CJB (6E 479)</TableCell>
            <TableCell>Check-In</TableCell>
            <TableCell>Cabin</TableCell>
            <TableCell>15 Kgs (1 piece only)</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </Card>
  );
};

export default BaggageDetails;