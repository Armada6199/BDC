import { Box, Grid, Slider, Typography } from "@mui/material";
import React from "react";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import LandscapeOutlinedIcon from "@mui/icons-material/LandscapeOutlined";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { glassmorphismStyle } from "../assets/styles";
const loanTypesBoxesStyle = {
  height: "139px",
  justifyContent: "center",
  alignItems: "center",
  padding: 1,
  gap: 1,
  ...glassmorphismStyle,
  borderRadius:'20px'
};
const  loanDetailsData={
  title:'Car Loans',
  description:'Own your dream car with a competitive interest rate and get the new additional privileges of our Auto Loan product.',
  privileges:['Financing up to 150,000 JOD','Financing up to 100% of the estimated car value.','Loan tenor up to 8 years including grace period','Grace period up to 3 months']
  ,termsAndConditions:[
    'Minimum loan amount is 3,000 JOD',
    'Minimum loan tenor is 12 months.',
    'Minimum income is 250 JOD',
    'Maximum DBR is up to 50% and for social security retirees up to 60%'
  ]
}
const loanIconContStyle = {
  display: "flex",
  borderRadius: "50%",
  height: "58px",
  bgcolor: "#C4B28F",
  width: "58px",
  justifyContent: "center",
  alignItems: "center",
};
const loanTypesData = [
  {
    title: "Personal Types",
    icon: (
      <Person2OutlinedIcon
        sx={{ width: "31px", height: "41px", color: "#fff" }}
      />
    ),
  },
  {
    title: "Home Loan",
    icon: (
      <HouseOutlinedIcon
        sx={{ width: "31px", height: "41px", color: "#fff" }}
      />
    ),
  },
  {
    title: "Car Loan",
    icon: (
      <DirectionsCarFilledOutlinedIcon
        sx={{ width: "31px", height: "41px", color: "#fff" }}
      />
    ),
  },
  {
    title: "Housing Loan with SLC",
    icon: (
      <HouseOutlinedIcon
        sx={{ width: "31px", height: "41px", color: "#fff" }}
      />
    ),
  },
  {
    title: "Land Loan",
    icon: (
      <LandscapeOutlinedIcon
        sx={{ width: "31px", height: "41px", color: "#fff" }}
      />
    ),
  },
];
function LoanInformation() {
  return (
    <Grid container justifyContent={'space-around'}  bgcolor={'#fff'}>
      <Grid container alignItems={"center"}  item md={8}>
        <Grid container item md={12} gap={4}>
        <Grid item md={6}>
          <Typography variant="h5">I want to apply</Typography>
        </Grid>
        <Grid container item md={12} gap={1}>
          {loanTypesData.map((loan) => (
            <Grid
              container
              sx={loanTypesBoxesStyle}
              item
              direction={"column"}
              md={3}
              lg={2}
              key={loan.title}
            >
              <Grid item md={4}>
                <Box sx={loanIconContStyle}>{loan.icon}</Box>
              </Grid>
              <Grid item md={4}>
                <Typography variant="body1" fontWeight={"bold"}>
                  {loan.title}
                </Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
        </Grid>
       
      
        <Grid container item md={8}>
          <Grid item md={12}>
          <Typography variant="h5">I want to borrow:</Typography>
          </Grid>
          <Grid item md={12}>
          <Grid container item md={10}>
          <Grid item md={12}>
          <Slider
            min={1000}
            max={300_00}
            defaultValue={15000}
            valueLabelDisplay="auto"
            color="secondary"
            size="medium"
            step={100}
          />
          </Grid>
          <Grid container item justifyContent={'space-between'}>
            <Grid item>
              <Typography variant="body1" fontWeight={'bold'} color={'darkgray'}>1000</Typography>
            </Grid>
            <Grid item>
            <Typography variant="body1" fontWeight={'bold'} color={'darkgray'}>30000</Typography>
            </Grid>
          </Grid>
        </Grid>
          </Grid>
        </Grid>
        <Grid container item md={10}>
          <Grid item md={8}>
          <Typography variant="h5">For so long:</Typography>
          </Grid>
          <Grid container item md={8}>
          <Grid item md={12}>
          <Slider
            min={12}
            max={90}
            defaultValue={45}
            valueLabelDisplay="auto"
            color="secondary"
            size="medium"
            step={6}
          />
          </Grid>
          <Grid container item justifyContent={'space-between'}>
            <Grid item>
              <Typography variant="body1" fontWeight={'bold'} color={'darkgray'}>12 Months</Typography>
            </Grid>
            <Grid item>
            <Typography variant="body1" fontWeight={'bold'} color={'darkgray'}>90 Months</Typography>
            </Grid>
          </Grid>
        </Grid>
        </Grid>
       
      </Grid>
      <Grid container sx={glassmorphismStyle} padding={4} direction={'column'} gap={2} item md={3}>
          <Typography variant="h6"  fontWeight={'bold'} color={'#215190'}>{loanDetailsData.title}</Typography>
          <Typography variant="body2" fontWeight={'500'} >{loanDetailsData.description}</Typography>
          <Typography variant="h6"  fontWeight={'bold'} color={'#215190'}>Privileges</Typography>
          {loanDetailsData.privileges.map(priv=>(
            <Box display={'flex'} gap={1}>
              <CheckCircleIcon color="secondary"/>
              <Typography>{priv}</Typography>
            </Box>
          ))}
          <Typography variant="h6"  fontWeight={'bold'} color={'#215190'}> Terms and Conditions</Typography>
        {loanDetailsData.termsAndConditions.map(term=>(
          <Box display={'flex'} gap={1}>
          <CheckCircleIcon color="secondary"/>
          <Typography>{term}</Typography>
        </Box>
        ))}
      </Grid>
    </Grid>
  );
}

export default LoanInformation;
