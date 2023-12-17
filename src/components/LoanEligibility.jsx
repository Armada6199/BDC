import { Box, Divider, Grid, Typography,Button } from "@mui/material";
import React, { useEffect } from "react";
import InfoIcon from "@mui/icons-material/Info";
import CustomChart from "./CustomChart";
import { glassmorphismStyle } from "../assets/styles";
import  calculateEMI  from "../utils/utils";
import { useForm } from "react-hook-form";

function LoanEligibility({ currentLoan, setCurrentLoan,handleNext,handleBack }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const layers=['First Layer','Second Layer ','Third Layer ','Forth  Layer']
  return (
    <form noValidate onSubmit={handleSubmit(handleNext)}>
    <Grid container   gap={4}>
      <Grid container item gap={4} md={7}>
        <Grid container item gap={1} alignItems={"center"}>
          <Typography variant="h4">My loan</Typography>
          <InfoIcon sx={{ width: "31px", height: "41px", color: "#C4B28F" }} />
        </Grid>
        <Grid container item direction={"column"}>
          <Typography variant="h5">EVERY MONTH I PAY</Typography>
          <Typography variant="h4">{parseFloat(currentLoan.payPerMonth.toFixed(3))} JD</Typography>
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
              <Typography variant="h5">{currentLoan.numberOfMonths}</Typography>
            </Grid>
          </Grid>
        </Grid>
        {/* privileges and terms  */}
       
      <Grid container item md={11}>
      {layers.map((layer,index)=>(
          <Grid key={layer} container item md={3}>
          <Grid item>
          <Box display={'flex'} gap={1}>
          <Typography>{layer}</Typography>
          <InfoIcon sx={{color:"#C4B28F"}}/>
          </Box>
          </Grid>
            <Grid item>
            <Box display={'flex'} gap={1}>
          <Typography>Total Interests</Typography>
          <Typography>{currentLoan.totalAppliedLayers[index]?.totalApplied||'0'} JD</Typography>
          </Box>
            </Grid>
        </Grid>
          ))}
        </Grid>
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
            <CustomChart layers={layers} totalAppliedLayers={currentLoan.totalAppliedLayers} />
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
      <Grid container item md={12}>
          <Grid item md={4}>
            <Button
              sx={{ width: "100%" }}
              onClick={handleBack}
              variant="outlined"
            >
              Cancel
            </Button>
          </Grid>
          <Grid container item md={8} justifyContent={"flex-end"} gap={2}>
            <Grid item md={4}>
              <Button
                sx={{ width: "100%" }}
                onClick={handleBack}
                variant="outlined"
              >
                Back
              </Button>
            </Grid>
            <Grid item md={4}>
              <Button
                variant="contained"
                type="submit"
                sx={{ backgroundColor: "#215190", width: "100%" }}
              >
                Next
              </Button>
            </Grid>
          </Grid>
        </Grid>
    </Grid>
    </form>
  );
}

export default LoanEligibility;
