import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { glassmorphismStyle } from '../assets/styles';

function LoanDetails({currentLoan}) {
  return (
<Grid container item p={4} gap={4} sx={glassmorphismStyle}>
        <Typography variant="h6" fontWeight={"bold"} color={"#215190"}>
          {currentLoan.title}
        </Typography>
        <Typography variant="body2" fontWeight={"500"}>
          {currentLoan.description}
        </Typography>
        <Typography variant="h6" fontWeight={"bold"} color={"#215190"}>
          Privileges
        </Typography>
        {currentLoan.privileges.map((priv) => (
          <Box key={priv} display={"flex"} gap={1}>
            <CheckCircleIcon color="secondary" />
            <Typography>{priv}</Typography>
          </Box>
        ))}
        <Typography variant="h6" fontWeight={"bold"} color={"#215190"}>
          {" "}
          Terms and Conditions
        </Typography>
        {currentLoan.termsAndConditions.map((term) => (
          <Box display={"flex"} key={term} gap={1}>
            <CheckCircleIcon color="secondary" />
            <Typography>{term}</Typography>
          </Box>
        ))}
    </Grid>
  )
}

export default LoanDetails