import {
  InputAdornment,
  InputLabel,
  TextField,
  MenuItem,
  FormControl,
  FormControlLabel,
  Select,
} from "@mui/material";
import { Box } from "@mui/system";
import Grid from "@mui/system/Unstable_Grid/Grid";
import React from "react";
import { loanInfoInputStyle } from "../assets/styles";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
function ActiveLoanForm({
  register,
  currentLoan,
  setCurrentLoan,
  index,
  activeLoan,
}) {
  function handleAddNewLoan() {
    const newActiveLoans = currentLoan.activeLoans;
    newActiveLoans.push({ activeLoanAmount: null, activeLoanLayer: null, activeLoanType: null });
    setCurrentLoan((prev) => ({ ...prev, activeLoans: newActiveLoans }));
  }
  function handleLoanInputChange(e) {
    let { name, value } = e.target;
    name=name.slice(0,name.length-1)
    const newActiveLoans = currentLoan.activeLoans;
    newActiveLoans[index] = { ...newActiveLoans[index], [name]: value };
    setCurrentLoan((prev) => ({ ...prev, activeLoans: newActiveLoans }));
  }
  function handleDeleteActiveLoan() {
    const newActiveLoans = currentLoan.activeLoans;
    newActiveLoans.splice(index,1);
    console.log(newActiveLoans)
    setCurrentLoan(prev=>({...prev,activeLoans:newActiveLoans}))
  }
  return (
    <Grid container gap={1} item md={12}>
      <Grid container item md={2}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Current Loan Type
          </InputLabel>
          <Select
            labelId="Maintenance-Schedule"
            id="Maintenance-Schedule"
            label="Maintenance Schedules"
            {...register(`activeLoanType${index}`)}
            onChange={(e) => handleLoanInputChange(e)}
            defaultValue={'none'}
            >
            <MenuItem value={"home"}>Home Loan</MenuItem>
            <MenuItem value={"land"}>Land Loan</MenuItem>
            <MenuItem value={"car"}>Car Loan</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      {activeLoan.activeLoanType && (
        <Grid item md={2}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Current Loan Layer
            </InputLabel>
            <Select
              labelId="Maintenance-Schedule"
              id="Maintenance-Schedule"
              label="Maintenance Schedules"
              {...register(`activeLoanLayer${index}`)}
              onChange={(e) => handleLoanInputChange(e)}
              defaultValue={'none'}
            >
              <MenuItem value={"first"}>First Layer</MenuItem>
              <MenuItem value={"second"}>Second Layer</MenuItem>
              <MenuItem value={"third"}>Third Layer</MenuItem>
              <MenuItem value={"forth"}>Forth Layer</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      )}
      {activeLoan.activeLoanLayer && (
        <Grid item md={2}>
          <TextField
            sx={loanInfoInputStyle}
            fullWidth
            id="activeLoanAmountInput"
            label={"Left Amount"}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EditIcon sx={{ color: "#C4B28F" }} />
                </InputAdornment>
              ),
            }}
            {...register(`activeLoanAmount${index}`)}
            onChange={(e) => handleLoanInputChange(e)}
            type="number"
            // inputProps={{
            //   min: ,
            //   max: currentLoan.maxMonths,
            //   defaultValue: currentLoan.maxMonths / 2,
            // }}
            value={activeLoan.activeLoanAmount}
            variant="outlined"
          />
        </Grid>
      )}
      {activeLoan.activeLoanLayer && (
        <Grid container item md={3} justifyContent={"flex-start"} gap={2}>
          <Grid item sx={{ cursor: "pointer" }} md={2}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "5px",
                width: 52,
                height: 54,
                backgroundColor: "#EAEAEA",
                cursor: "pointer",
              }}
              onClick={() => handleAddNewLoan()}
            >
              <AddIcon sx={{ fontSize: 48, color: "#C4B28F" }} />
            </Box>
          </Grid>
          {index > 0 && (
            <Grid item sx={{ cursor: "pointer" }} md={2}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "5px",
                  width: 52,
                  height: 54,
                  backgroundColor: "#EAEAEA",
                  cursor: "pointer",
                }}
                onClick={() => handleDeleteActiveLoan()}
              >
                <DeleteIcon sx={{ fontSize: 48, color: "#C4B28F" }} />
              </Box>
            </Grid>
          )}
        </Grid>
      )}
    </Grid>
  );
}

export default ActiveLoanForm;
