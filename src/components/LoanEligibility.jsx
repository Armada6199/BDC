import {
  Box,
  Divider,
  Grid,
  Typography,
  Button,
  Collapse,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import InfoIcon from "@mui/icons-material/Info";
import CustomChart from "./CustomChart";
import { glassmorphismStyle } from "../assets/styles";
import ElibiblityLayerTable from "./ElibiblityLayerTable";
import { CustomBarChat } from "./CustomBarChat";

function LoanEligibility({ currentLoan }) {
  // const [openStagesCollapse, setopenStagesCollapse] = useState({
  //   0: false,
  //   1: false,
  //   2: false,
  //   3: false,
  // });
  // useEffect(() => {
  //   console.log(currentLoan.totalAppliedLayers);
  //   setCurrentLoan((prev) => ({
  //     ...prev,
  //     totalAppliedLayers: [
  //       {
  //         totalApplied: 32500,
  //         interestRate: 0.0325,
  //         title: "First Layer",
  //         min: 5000,
  //         max: 40000,
  //       },
  //       {
  //         totalApplied: 160000,
  //         interestRate: 0.04,
  //         title: "Second Layer",
  //         min: 5000,
  //         max: 160000,
  //       },
  //       {
  //         totalApplied: 22500,
  //         interestRate: 0.06,
  //         title: "Third Layer",
  //         min: 5000,
  //         max: 15000,
  //       },
  //       {
  //         totalApplied: 498750,
  //         interestRate: 0.105,
  //         title: "Forth Layer",
  //         min: 5000,
  //         max: 190000,
  //       },
  //     ],
  //   }));
  // }, []);
  return (
    <Grid container alignItems={'flex-start'} gap={4}>
      <Grid container item gap={4} md={7}>
        <Grid container item gap={1} alignItems={"center"}>
          <Typography variant="h4">My loan</Typography>
          <InfoIcon sx={{ width: "31px", height: "41px", color: "#C4B28F" }} />
        </Grid>
        <Grid container item md={3} direction={"column"}>
            <Typography variant="h5">EVERY MONTH I PAY</Typography>
            <Typography variant="h4">
              {parseFloat(currentLoan.payPerMonth.toFixed(3))} JD
            </Typography>
          </Grid>
        <Grid
          container
          sx={{
            borderTop: "1px solid darkgray",
            borderBottom: "1px solid darkgray",
          }}
          alignItems={"center"}
          item
          md={11}
          gap={2}
        >
          <Grid item md={3}>
            <Typography variant="h6">Loan Type</Typography>
            <Box display={"flex"} gap={1} alignItems={"center"}>
              {currentLoan.loadIcon({
                width: "25px",
                height: "25px",
                color: "black",
              })}
              <Typography variant="h5">{currentLoan.title}</Typography>
            </Box>
          </Grid>
          <Divider
            sx={{ backgroundColor: "darkgray", width: "1px", height: "80%" }}
          />
          <Grid item md={3}>
            <Typography variant="h6">Loan Amount</Typography>
            <Typography variant="h5">{currentLoan.loanAmount}</Typography>
          </Grid>
          <Divider
            sx={{ backgroundColor: "darkgray", width: "1px", height: "80%" }}
          />

          <Grid container gap={2} item md={4}>
            <Grid item md={12}>
              <Typography variant="h6">Loan term (in months)</Typography>
              <Typography variant="h5">{currentLoan.numberOfMonths}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item gap={1} alignItems={"center"}>
          <Typography variant="h4">Loan Details</Typography>
          <InfoIcon sx={{ width: "31px", height: "41px", color: "#C4B28F" }} />
        </Grid>
        {currentLoan.totalAppliedLayers.map((layer, index) => (
          <Grid container item gap={4}>
            <Grid item md={12}>
          <Typography variant="h6">{layer.title}</Typography>
            </Grid>
            <Grid item md={12}>
            <ElibiblityLayerTable layer={layer} title={currentLoan.title}/>
              </Grid>
          </Grid>
        ))}
      </Grid>
      <Grid
        p={4}
        container
        item
        justifyContent={'flex-start'}
        md={4}
        gap={12}
      >
          <Grid container sx={glassmorphismStyle} justifyContent={'center'} alignItems={'center'} minHeight={'45%'}  gap={4} item md={12}  p={4}>
            <Grid item md={12}>
          <CustomChart totalAppliedLayers={currentLoan.totalAppliedLayers} />
            </Grid>
            <Grid container justifyContent={"center"} item gap={1} md={12}>
            <Grid item md={5}>
              <Typography variant="h6">EMI Amount</Typography>
              <Typography variant="body1">Principal + Interest </Typography>
              <Typography variant="h5">{currentLoan.EMI}</Typography>
            </Grid>
            <Grid item md={5}>
              <Typography variant="h6">Interest Payable</Typography>
              <Typography variant="h5">
                {currentLoan.interestPayable}
              </Typography>
            </Grid>
          </Grid>
          </Grid>
          <Grid container sx={glassmorphismStyle} justifyContent={'center'} alignItems={'center'}  minHeight={'45%'} gap={4} item md={12} p={4}>
          <CustomBarChat totalAppliedLayers={currentLoan.totalAppliedLayers} maxAmount={currentLoan.maxAmount(currentLoan.intrestRates)}/>
          </Grid> 
        </Grid>
    </Grid>
  );
}

export default LoanEligibility;
{/* <>
<Grid
  container
  alignItems={"center"}
  item
  md={11}
  gap={2}
>
  <Grid item md={3}>
    <Box display={"flex"} gap={1} alignItems={"center"}>
      <Typography variant="h5">{layer.title}</Typography>
    </Box>
  </Grid>
  <Divider
    sx={{
      backgroundColor: "darkgray",
      width: "1px",
      height: "80%",
    }}
  />
  <Grid item md={3}>
    <Typography variant="h6">Interest Rate</Typography>
    <Typography color={'secondary'} fontWeight={'500'} variant="h5">
      {layer.interestRate * 100} %
    </Typography>
  </Grid>
  <Divider
    sx={{
      backgroundColor: "darkgray",
      width: "1px",
      height: "80%",
    }}
  />

  <Grid container gap={2} item md={4}>
    <Grid item md={12}>
      <Typography variant="h6">Appplied Amount</Typography>
      <Typography color={'secondary'} fontWeight={'500'} variant="h5">
        {layer.totalApplied.toFixed(1)}
      </Typography>
    </Grid>
  </Grid>
</Grid>
</> */}

      // <Grid container item >
      //     <Grid container item md={3} direction={"column"}>
      //       <Typography variant="h5">EVERY MONTH I PAY</Typography>
      //       <Typography variant="h4">
      //         {parseFloat(currentLoan.payPerMonth.toFixed(3))} JD
      //       </Typography>
      //     </Grid>
      //     <Grid container item md={3} direction={"column"}>
      //       <Typography variant="h5">EMI</Typography>
      //       <Typography variant="h4">
      //         {parseFloat(currentLoan.EMI.toFixed(3))} JD
      //       </Typography>
      //     </Grid>
      //     <Grid container item md={3} direction={"column"}>
      //       <Typography variant="h5">Interest Payable</Typography>
      //       <Typography variant="h4">
      //         {parseFloat(currentLoan.interestPayable.toFixed(3))} JD
      //       </Typography>
      //     </Grid>
      //     </Grid>
        {/* loan type an amount */}