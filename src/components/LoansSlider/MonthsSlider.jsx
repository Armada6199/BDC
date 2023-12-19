import React from "react";
import {
  Grid,
  InputAdornment,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { loanInfoInputStyle } from "../../assets/styles";

function MonthsSlider({
  register,
  errors,
  currentLoan,
  handleSliderChange,
  handleInputFieldChange,
  validateGreaterThanSalary,
}) {
  return (
<>
<Grid container item md={12} >
        <Grid container item gap={1} justifyContent={"space-between"} md={12}>
          <Grid item md={6}>
            <Typography variant="h5" fontWeight={"600"}>
              For so long:
            </Typography>
          </Grid>
          <Grid item md={4}>
            <TextField
              sx={loanInfoInputStyle}
              fullWidth
              id="numberOfMonthsInput"
              InputProps={{
                  startAdornment: (
                      <InputAdornment position="start">
                    <EditIcon sx={{ color: "#C4B28F" }} />
                  </InputAdornment>
                ),
            }}
            {...register("numberOfMonths_Input", {
                required: currentLoan.numberOfMonths>0?"Kindly Choose How many months":false,
                onChange: (e) => handleInputFieldChange(e),
                validate: validateGreaterThanSalary,
                maxAmount: 300,
            })}
            type="number"
            inputProps={{
                min: currentLoan.minMonths,
                max: currentLoan.maxMonths,
            }}
            value={currentLoan.numberOfMonths?currentLoan.numberOfMonths:currentLoan.maxMonths/2}
            variant="outlined"
            />
          </Grid>
          <Grid item md={12}>
            <Slider
              min={currentLoan.minMonths}
              max={currentLoan.maxMonths}
              valueLabelDisplay="auto"
              color="secondary"
              size="medium"
              step={6}
              defaultValue={150}
              value={
                currentLoan.numberOfMonths ? currentLoan.numberOfMonths : currentLoan.maxMonths/2
              }
                {...register("numberOfMonths_Slider", {
                    required: currentLoan.numberOfMonths>0?false:"Kindly Choose How many months",
                    onChange: (e) => handleSliderChange(e),
                    validate: validateGreaterThanSalary,
                })}
                />
          </Grid>
        </Grid>
        <Grid container item justifyContent={"space-between"}>
          <Grid item>
            <Typography variant="body1" fontWeight={"bold"} color={"darkgray"}>
              {currentLoan.minMonths}
            </Typography>
          </Grid>
          {errors.numberOfMonths_Input?.message ||
              errors.numberOfMonths_Slider?.message && 
                <Grid item md={5}>
                  <Typography variant="body1" color="red">
                   {errors.numberOfMonths_Input?.message ||errors.numberOfMonths_Slider?.message}
                  </Typography>
                </Grid>
              }
          <Grid item>
            <Typography variant="body1" fontWeight={"bold"} color={"darkgray"}>
              {currentLoan.maxMonths}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
  </>
  );
}

export default MonthsSlider;
