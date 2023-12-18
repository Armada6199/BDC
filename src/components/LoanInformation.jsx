import {
  Box,
  FormControl,
  FormControlLabel,
  Button,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Slider,
  Typography,
  FormHelperText,
  TextField,
  InputAdornment,
} from "@mui/material";
import React from "react";
import {
  loanInfoInputStyle,
  loansIconStyle,
  loanIconContStyle,
  loanTypesBoxesStyle,
  glassmorphismStyle,
} from "../assets/styles";
import EditIcon from "@mui/icons-material/Edit";
import ActiveLoanForm from "./ActiveLoanForm";
import LoanDetails from "./LoanDetails";
function LoanInformation({
  currentLoan,
  setCurrentLoan,
  loans,
  register,
  errors,
  setValue,
}) {
  function handleChangeCurrentLoan(title) {
    const targetLoan = loans.find((e) => e.title === title);
    setCurrentLoan(targetLoan);
  }
  const handleSliderChange = (e) => {
    let { name, value } = e.target;
    setValue(name, value);
    name = name.split("_")[0];
    setCurrentLoan((prev) => ({ ...prev, [name]: value }));
  };
  const handleInputFieldChange = (e) => {
    let { name, value } = e.target;
    setValue(name, value);
    name = name.split("_")[0];
    setCurrentLoan((prev) => ({ ...prev, [name]: value }));
  };
  const validateGreaterThanSalary = () => {
    if (currentLoan.payPerMonth > currentLoan.currentSalary / 2) {
      return "Monthly payment can't be more than half of your salary";
    } else return true;
  };
  return (
    <Grid container  spacing={4}>
      <Grid container alignItems={"center"} item md={8} gap={4}>
        <Grid container item md={12} gap={4}>
          <Grid item md={6}>
            <Typography variant="h5" fontWeight={"600"}>
              I want to apply
            </Typography>
          </Grid>
          <Grid container item md={12} gap={1}>
            {loans.map((loan) => (
              <Grid
                container
                sx={{
                  ...loanTypesBoxesStyle,
                  backgroundColor:
                    currentLoan.title === loan.title ? "#E8E8E8" : "#fff",
                  cursor: "pointer",
                }}
                item
                direction={"column"}
                md={3}
                lg={2}
                key={loan.title}
                onClick={() => handleChangeCurrentLoan(loan.title)}
              >
                <Grid item md={4}>
                  <Box sx={loanIconContStyle}>
                    {loan.loadIcon(loansIconStyle)}
                  </Box>
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
          <Grid container item md={12}>
            <Grid container justifyContent={"space-between"} item md={10}>
            <Grid item md={6}>
            <Typography fontWeight={'600'}  variant="h5">I want to borrow:</Typography>
          </Grid>
              <Grid item md={4}>
                <TextField
                  sx={loanInfoInputStyle}
                  id="loanAmountInput"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EditIcon sx={{ color: "#C4B28F" }} />
                      </InputAdornment>
                    ),

                    value: currentLoan.loanAmount,
                  }}
                  {...register("loanAmount_Input")}
                  onChange={(e) => handleInputFieldChange(e)}
                  type="number"
                  variant="outlined"
                />
              </Grid>
              <Grid item md={12}>
                <Slider
                  min={5000}
                  max={210000}
                  valueLabelDisplay="auto"
                  color="secondary"
                  size="medium"
                  name="loanAmount"
                  step={1000}
                  {...register("loanAmount_Slider", {
                    required: "Kindly Choose loan amount",
                    onChange: (e) => handleSliderChange(e),
                  })}
                  value={
                    currentLoan.loanAmount ? currentLoan.loanAmount : 210000 / 2
                  }
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
        <Grid container item md={8}>
          <Grid container item md={10}>
            <Grid container item gap={1} justifyContent={"space-between"} md={12}>
            <Grid item md={6}>
            <Typography variant="h5" fontWeight={'600'}>For so long:</Typography>
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
                    required: "Kindly Choose How many months",
                    onChange: (e) => handleInputFieldChange(e),
                    validate: validateGreaterThanSalary,
                    maxAmount: 300,
                  })}
                  type="number"
                  inputProps={{
                    min: currentLoan.minMonths,
                    max: currentLoan.maxMonths,
                  }}
                  value={currentLoan.numberOfMonths}
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
                  value={
                    currentLoan.numberOfMonths
                      ? currentLoan.numberOfMonths
                      : 150
                  }
                  {...register("numberOfMonths_Slider", {
                    required: "Kindly Choose How many months",
                    onChange: (e) => handleSliderChange(e),
                    validate: validateGreaterThanSalary,
                  })}
                />
              </Grid>
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
              {errors.numberOfMonths?.message && (
                <Grid item md={5}>
                  <Typography variant="body2" color="error">
                    {errors.numberOfMonths.message}
                  </Typography>
                </Grid>
              )}
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
        <Grid container item md={8}>
          <Grid container justifyContent={"space-between"} item md={10}>
          <Grid item md={6}>
            <Typography variant="h5" fontWeight={'600'}>Current Salary:</Typography>
          </Grid>
            <Grid item md={4}>
              <TextField
                sx={loanInfoInputStyle}
                id="currentSalaryInput"
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
                  currentLoan.currentSalary
                    ? currentLoan.currentSalary
                    : 10000 / 2
                }
              />
            </Grid>
            <Grid container item justifyContent={"space-between"}>
              <Grid item>
                <Typography
                  variant="body1"
                  fontWeight={"bold"}
                  color={"darkgray"}
                >
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
                <Typography
                  variant="body1"
                  fontWeight={"bold"}
                  color={"darkgray"}
                >
                  100000 JD
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item md={8}>
          <FormControl error={errors.isCurrentLoan?.message ? true : false}>
            <FormLabel id="demo-radio-buttons-group-label">
              Do You have an active current Loan from BDC{" "}
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue={"1"}
              name="currentLoan"
              row
              onChange={(e) =>
                setCurrentLoan({
                  ...currentLoan,
                  hasPrevLoan: e.target.value == "yes" ? true : false,
                })
              }
            >
              <FormControlLabel
                value={"yes"}
                control={
                  <Radio
                    {...register("isCurrentLoan", {
                      required: "current Loan amount",
                    })}
                    sx={{
                      color: "#215190",
                      "&.Mui-checked": {
                        color: "#C4B28F",
                      },
                    }}
                  />
                }
                label="Yes"
              />
              <FormControlLabel
                value={"no"}
                control={
                  <Radio
                    {...register("isCurrentLoan", {
                      required: "This field is required",
                    })}
                    sx={{
                      color: "#215190",
                      "&.Mui-checked": {
                        color: "#C4B28F",
                      },
                    }}
                  />
                }
                label="No"
              />
            </RadioGroup>
            <FormHelperText>{errors.isCurrentLoan?.message}</FormHelperText>
          </FormControl>
        </Grid>
        {currentLoan.hasPrevLoan && (
          <Grid container minHeight={"150px"} gap={4} item md={12}>
            {currentLoan.activeLoans.map((activeLoan,index) => (
              <ActiveLoanForm
              key={index}
              index={index}
              activeLoan={activeLoan}
                register={register}
                currentLoan={currentLoan}
                setCurrentLoan={setCurrentLoan}
              />
            ))}
          </Grid>
        )}
      </Grid>
      <Grid container alignItems={"center"}  item md={3} gap={4}>
      <LoanDetails currentLoan={currentLoan}/>
      </Grid>
    </Grid>
  );
}

export default LoanInformation;
