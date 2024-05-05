import { Card, CardContent } from '@mui/material'
import React from 'react'

const Cancellation = () => {
  return (
    <div>
        <Card>
        <CardContent sx={{position:'absolute', marginTop:'40px', position: 'relative', top: '12rem', height: '34rem', width: '56rem', left: '4rem',
          backgroundColor: 'whitesmoke', boxShadow: '0.4px 1px 1px 0px', borderRadius: '7px',zIndex:'1'
        }}>
           <p style={{fontFamily:'fantasy'}}> CANCELLATION & DATE CHANGE POLICY</p>
            </CardContent>
        </Card>
    </div>
  )
}

export default Cancellation
