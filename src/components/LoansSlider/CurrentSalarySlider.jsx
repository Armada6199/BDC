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

function CurrentSalarySlider({
  register,
  currentLoan,
  handleSliderChange,
  handleInputFieldChange,
  validateGreaterThanSalary,
  errors,
}) {
  return (
    <>
      <Grid container justifyContent={"space-between"} item md={12}>
        <Grid item md={6}>
          <Typography variant="h5" fontWeight={"600"}>
            Current Salary:
          </Typography>
        </Grid>
        <Grid item md={4}>
          <TextField
            sx={loanInfoInputStyle}
            id="currentSalary_Input"
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                  <EditIcon sx={{ color: "#C4B28F" }} />
                </InputAdornment>
              ),
            }}
            {...register("currentSalary_Input", {
                onChange: (e) => handleInputFieldChange(e),
            })}
            type="number"
            step={50}
            inputProps={{
                min: 250,
                max: 100_00,
            }}
            value={currentLoan.currentSalary}
            variant="outlined"
            />
        </Grid>
        <Grid item md={12}>
          <Slider
            min={250}
            max={100_00}
            valueLabelDisplay="auto"
            color="secondary"
            size="medium"
            step={50}
            {...register("currentSalary_Slider", {
                required: "Kindly choose your current salary",
                onChange: (e) => handleSliderChange(e),
            })}
            value={
                currentLoan.currentSalary ? currentLoan.currentSalary : 10000 / 2
            }
            />
        </Grid>
        <Grid container item justifyContent={"space-between"}>
          <Grid item>
            <Typography variant="body1" fontWeight={"bold"} color={"darkgray"}>
              250 JD
            </Typography>
          </Grid>
          {errors.currentSalary?.message && (
              <Grid item md={5}>
              <Typography variant="body2" color="error">
                {errors.currentSalary.message}
              </Typography>
            </Grid>
          )}
          <Grid item>
            <Typography variant="body1" fontWeight={"bold"} color={"darkgray"}>
              100000 JD
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      </>
  );
}

export default CurrentSalarySlider;
