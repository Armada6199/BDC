import { Slider } from '@mui/base'
import { Grid, TextField, Typography,InputAdornment } from '@mui/material'
import React from 'react'
import { glassmorphismStyle } from "../assets/styles";
import EditIcon from "@mui/icons-material/Edit";

function CustomSlider({errors,register,currentLoan}) {
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(value);
        setCurrentLoan((prev) => ({ ...prev, [name]: value }));
      };
      const validateGreaterThanSalary = () => {
        if (currentLoan.payPerMonth > currentLoan.currentSalary / 2) {
          return "Monthly payment can't be more than half of your salary";
        } else return true;
      };
  return (
    <Grid container item md={8}>
          <Grid item md={12}>
            <Typography variant="h5">I want to borrow:</Typography>
          </Grid>
          <Grid item md={12}>
            <Grid container justifyContent={'flex-end'} item md={10}>
            <Grid item md={4}>
                <TextField
                  sx={{
                    alignSelf: "flex-end",
                    width: "100%",
                    ...glassmorphismStyle,
                    resize: { fontSize: 500 },
                  }}
                  id="loanAmountInput"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EditIcon sx={{ color: "#C4B28F" }} />
                      </InputAdornment>
                    ),
                  }}
                  {...register("loanAmount", {
                    onChange: (e) => handleInputChange(e),
                  })}
                  type="number"
                  variant="standard"
                  value={currentLoan.loanAmount}
                />
              </Grid>
              <Grid item md={12}>
                <Slider
                  min={5000}
                  max={210000}
                  valueLabelDisplay="auto"
                  defaultValue={210000/2}
                  color="secondary"
                  size="medium"
                  name="loanAmount"
                  step={currentLoan.maxAmount / 100}
                  {...register("loanAmount", {
                    required: "Kindly Choose loan amount",
                    onChange: (e) => handleInputChange(e),
                  })}
                />
              </Grid>
              <Grid container item justifyContent={"space-between"}>
                <Grid item>
                  <Typography
                    variant="body1"
                    fontWeight={"bold"}
                    color={"darkgray"}
                  >
                    {currentLoan.minAmount} JD
                  </Typography>
                </Grid>
                {errors.loanAmount?.message && (
                  <Grid item md={5}>
                    <Typography variant="body2" color="error">
                      {errors.loanAmount.message}
                    </Typography>
                  </Grid>
                )}
                <Grid item>
                  <Typography
                    variant="body1"
                    fontWeight={"bold"}
                    color={"darkgray"}
                  >
                    {currentLoan.maxAmount} JD
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
  )
}

export default CustomSlider