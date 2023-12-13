import { Box, Grid, Slider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { glassmorphismStyle } from "../assets/styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const loanTypesBoxesStyle = {
  height: "139px",
  justifyContent: "center",
  alignItems: "center",
  padding: 1,
  gap: 1,
  ...glassmorphismStyle,
  borderRadius: "20px",
};
const loanIconContStyle = {
  display: "flex",
  borderRadius: "50%",
  height: "58px",
  bgcolor: "#C4B28F",
  width: "58px",
  justifyContent: "center",
  alignItems: "center",
};
const loansIconStyle={
  width:'31px',
  height:'41px',
  color:'#fff'
}
function LoanInformation({currentLoan,setCurrentLoan,loans,register}) {
  function handleChangeCurrentLoan(title){
    const targetLoan=loans.find(e=>e.title===title);
    setCurrentLoan(targetLoan);
  }
  return (
    <Grid container height={'600px'}>
      <Grid container alignItems={"center"} item md={8}>
        <Grid container item md={12} gap={4}>
          <Grid item md={6}>
            <Typography variant="h5" fontWeight={'600'}>I want to apply</Typography>
          </Grid>
          <Grid container item md={12} gap={1}>
            {loans.map((loan) => (  
              <Grid
                container
                sx={{...loanTypesBoxesStyle,backgroundColor:currentLoan.title===loan.title?'#E8E8E8':'#fff',cursor:'pointer'}}
                item
                direction={"column"}
                md={3}
                lg={2}
                key={loan.title}
                onClick={()=>handleChangeCurrentLoan(loan.title)}
              >
                <Grid item md={4}>
                  <Box sx={loanIconContStyle}>{loan.loadIcon(loansIconStyle)}</Box>
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
                  min={currentLoan.minAmount}
                  max={currentLoan.maxAmount}
                  defaultValue={currentLoan.maxAmount/2}
                  valueLabelDisplay="auto"
                  color="secondary"
                  size="medium"
                  step={currentLoan.maxAmount/100}
                  {...register("loanAmount")}
                />
              </Grid>
              <Grid container item justifyContent={"space-between"}>
                <Grid item>
                  <Typography
                    variant="body1"
                    fontWeight={"bold"}
                    color={"darkgray"}
                  >
                    {currentLoan.minAmount}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="body1"
                    fontWeight={"bold"}
                    color={"darkgray"}
                  >
                     {currentLoan.maxAmount}
                  </Typography>
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
                min={currentLoan.minMonths}
                max={currentLoan.maxMonths}
                defaultValue={currentLoan.maxMonths/2}
                valueLabelDisplay="auto"
                color="secondary"
                size="medium"
                step={6}
                {...register("months")}
              />
            </Grid>
            <Grid container item justifyContent={"space-between"}>
              <Grid item>
                <Typography
                  variant="body1"
                  fontWeight={"bold"}
                  color={"darkgray"}
                >
                 {currentLoan.minMonths}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  fontWeight={"bold"}
                  color={"darkgray"}
                >
                  {currentLoan.maxMonths}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        sx={glassmorphismStyle}
        padding={4}
        direction={"column"}
        gap={2}
        item
        md={3}
      >
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
    </Grid>
  );
}

export default LoanInformation;
