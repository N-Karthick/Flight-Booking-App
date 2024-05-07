import { Button, Card } from '@mui/material'
import React from 'react'
import PrivacyTipRoundedIcon from '@mui/icons-material/PrivacyTipRounded';
import FiberManualRecordSharpIcon from '@mui/icons-material/FiberManualRecordSharp';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';


const ImportantInfo = () => {
  return (
    <div>
      <Button variant="contained" color="error" sx={{ fontFamily: 'Rubik', position: 'relative', top: '1.3rem', left: '6rem', zIndex: '1' }}>
        IMPORTANT INFORMATION
      </Button>
      <Card sx={{ width: '58rem', height: '13rem', backgroundColor: 'white', position: 'relative', left: '4rem' }}>
        <span style={{ display: 'flex', justifyContent: 'left', position: 'relative', top: '17px', left: '20px', marginTop: '1rem' }}>
          <PrivacyTipRoundedIcon sx={{ color: 'blue', fontSize: '1.3rem' }} />
          <h4 style={{ fontFamily: 'Rubik', margin: '0px 15px' }}>Pre-Flight Checklist</h4>
        </span>
        <span style={{ display: 'flex', flexWrap: 'wrap' }}>
          <p style={{ margin: '31px 5px 0px 17px', color: 'rgb(0 0 0 / 57%)' }}>
            <FiberManualRecordSharpIcon sx={{ fontSize: '0.8rem' }} /> If you have arrived on any international flight and are taking a connecting domestic flight, please check the 'Travelling to India' tab HERE.</p>
          <div style={{ display: '-webkit-box', margin: '11px' }}>
            <h5 style={{ margin: '0px', fontWeight: 'revert-layer' }}>DISCLAIMER :</h5> <p style={{ margin: '0px', fontStyle: 'italic', fontWeight: '600' }}>We strongly recommend that you check the full text of the guidelines issued by the State Governments and Airlines before to  -ensure smooth travel. We accept no liability in this regard..</p>
          </div>
          <hr style={{ border: '2px solid rgb(0 0 0 / 26%) ', width: '100%' }} />
          <div>
            <h4 style={{ margin: ' 4px 5px 11px 34px' }}>Was the information helpful? <ThumbUpAltOutlinedIcon sx={{ margin: '4px 3px -4px 15px', color: 'blue' }} /> Yes <ThumbDownOffAltOutlinedIcon sx={{ margin: '4px 7px -6px 2px' }} /> No</h4>
          </div>
        </span>

      </Card>
    </div>
  )
}

export default ImportantInfo
