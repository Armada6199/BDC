import {
  Box,
  Divider,
  Grid,
  Typography,
  Button,
  Collapse,
} from "@mui/material";
import React, {  useState } from "react";
import InfoIcon from "@mui/icons-material/Info";
import CustomChart from "./CustomChart";
import { glassmorphismStyle } from "../assets/styles";
import { useForm } from "react-hook-form";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

function LoanEligibility({
  currentLoan,
  setCurrentLoan,
  handleNext,
  handleBack,
}) {

  const [openStagesCollapse, setopenStagesCollapse] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
  });
  return (
      <Grid container gap={4}>
        <Grid container item gap={4} md={7}>
          <Grid container item gap={1} alignItems={"center"}>
            <Typography variant="h4">My loan</Typography>
            <InfoIcon
              sx={{ width: "31px", height: "41px", color: "#C4B28F" }}
            />
          </Grid>
          <Grid container item >
          <Grid container item md={3} direction={"column"}>
            <Typography variant="h5">EVERY MONTH I PAY</Typography>
            <Typography variant="h4">
              {parseFloat(currentLoan.payPerMonth.toFixed(3))} JD
            </Typography>
          </Grid>
          <Grid container item md={3} direction={"column"}>
            <Typography variant="h5">EMI</Typography>
            <Typography variant="h4">
              {parseFloat(currentLoan.EMI.toFixed(3))} JD
            </Typography>
          </Grid>
          <Grid container item md={3} direction={"column"}>
            <Typography variant="h5">Interest Payable</Typography>
            <Typography variant="h4">
              {parseFloat(currentLoan.interestPayable.toFixed(3))} JD
            </Typography>
          </Grid>
          </Grid>
          {/* loan type an amount */}
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
                <Typography variant="h5">
                  {currentLoan.numberOfMonths}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          {currentLoan.totalAppliedLayers.map((layer, index) => (
            <>
              <Grid
                container
                item
                md={12}
                key={layer.title}
                alignItems={'center'}
                justifyContent={'flex-start'}
                gap={1}
                onClick={() =>
                  setopenStagesCollapse((prev) => ({
                    ...prev,
                    [index]: !prev[index],
                  }))
                }
              >
                <Grid item md={1}>
                {openStagesCollapse[index] ? <ExpandLess /> : <ExpandMore />}
                </Grid>
                <Grid item md={4} >
                <Typography variant="h5" fontWeight={'500'}>{layer.title}</Typography>
                </Grid>
              </Grid>
              <Collapse
                in={openStagesCollapse[index]}
                timeout="auto"
                unmountOnExit
              >
                <Grid container md={12} >
                  <Grid container item gap={4}>
                    <Grid item md={12}>
                      <Typography
                        variant="h6"
                        textAlign={"center"}
                        fontWeight={"500"}
                      >
                        Total Layer Applied Interests
                      </Typography>
                      <Typography
                        variant="h5"
                        fontWeight={"600"}
                        textAlign={"center"}
                        color={'secondary'}
                      >
                        {layer.totalApplied}
                      </Typography>
                    </Grid>
                    <Grid container alignItems={"center"} item md={12} gap={2}>
                      <Grid item md={4}>
                        <Typography variant="h6">Loan Type</Typography>
                        <Box display={"flex"} gap={1} alignItems={"center"}>
                          {currentLoan.loadIcon({
                            width: "25px",
                            height: "25px",
                            color: "black",
                          })}
                          <Typography variant="h5">
                            {currentLoan.title} ({index + 1})
                          </Typography>
                        </Box>
                      </Grid>
                      <Divider
                        sx={{
                          backgroundColor: "darkgray",
                          width: "1px",
                          height: "80%",
                        }}
                      />
                      <Grid item md={2}>
                        <Typography variant="h6"> Interest Rate</Typography>
                        <Typography variant="h5">
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
                          <Typography variant="h6">
                            Stage term (in months)
                          </Typography>
                          <Typography variant="h5">
                            {currentLoan.numberOfMonths}  
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Collapse>
            </>
          ))}
        </Grid>
        <Grid
          sx={glassmorphismStyle}
          p={2}
          container
          item
          justifyContent={"center"}
          alignItems={"center"}
          bgcolor={"red"}
          md={4}
        >
          <Box
            display={"flex"}
            width={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={4}
            flexDirection={"column"}
          >
            <Box>
              <CustomChart
                totalAppliedLayers={currentLoan.totalAppliedLayers}
              />
            </Box>
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
          </Box>
        </Grid>
      </Grid>
    
  );
}

export default LoanEligibility;
