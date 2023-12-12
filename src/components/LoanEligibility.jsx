import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
function LoanEligibility() {
  return (
    <Grid container justifyContent={'space-around'}  bgcolor={'#fff'}>
       <Grid container item md={12} >
        <Grid md={8}>
      <Typography variant='h6'>My Loan</Typography>
        </Grid>
        <Grid item md={2} >
        <InfoIcon  sx={{ width: "31px", height: "41px", color: "#fff" }}/>
        </Grid>
       </Grid>
    </Grid>
  )
}

export default LoanEligibility