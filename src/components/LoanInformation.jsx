import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
  FormHelperText,
} from "@mui/material";
import React from "react";
import ActiveLoanForm from "./ActiveLoanForm";
import LoanDetails from "./LoanDetails";
import LoanTypes from "./LoanTypes";
import CurrentSalarySlider from "./LoansSlider/CurrentSalarySlider";
import MonthsSlider from "./LoansSlider/MonthsSlider";
import AmountSlider from "./LoansSlider/AmountSlider";
function LoanInformation({
  currentLoan,
  setCurrentLoan,
  loans,
  register,
  errors,
  setValue,
  handleSetEMI,
}) {
  const handleSliderChange = (e) => {
    let { name, value } = e.target;
    setValue(name, value);
    name = name.split("_")[0];
    setCurrentLoan((prev) => ({ ...prev, [name]: value }));
  };
  const validateGreaterThanSalary = () => {
    handleSetEMI();
    if (currentLoan.payPerMonth > currentLoan.currentSalary / 2) {
      return "Monthly payment can't be more than half of your salary";
    } else return true;
  };
  return (
    <Grid container alignItems={"flex-start"} spacing={10}>
      <Grid container alignItems={"center"} item md={6} gap={4}>
        <Grid container item md={12} gap={4}>
          <Grid item md={12}>
            <Typography variant="h5" fontWeight={"600"}>
              I want to apply
            </Typography>
          </Grid>
          <Grid container item justifyContent={"space-between"} md={10} lg={12}>
            <LoanTypes
              currentLoan={currentLoan}
              setCurrentLoan={setCurrentLoan}
              loans={loans}
            />
          </Grid>
        </Grid>
        <Grid container item md={10} lg={12} gap={4}>
          <Grid container item>
            <AmountSlider
              currentLoan={currentLoan}
              handleSliderChange={handleSliderChange}
              validateGreaterThanSalary={validateGreaterThanSalary}
              register={register}
              errors={errors}
            />
          </Grid>
          <Grid container item>
            <MonthsSlider
              currentLoan={currentLoan}
              handleSliderChange={handleSliderChange}
              validateGreaterThanSalary={validateGreaterThanSalary}
              register={register}
              errors={errors}
            />
          </Grid>
          <Grid container item>
            <CurrentSalarySlider
              currentLoan={currentLoan}
              handleSliderChange={handleSliderChange}
              validateGreaterThanSalary={validateGreaterThanSalary}
              register={register}
              errors={errors}
            />
          </Grid>
        </Grid>
        <Grid container  item md={10} lg={12}>
          <FormControl
            fullWidth
            error={errors.isCurrentLoan?.message ? true : false}
            
          >
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
              <Grid
                item
                md={2}
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
                          transition: "all 0.3s ease",
                        },
                      }}
                    />
                  }
                  label="Yes"
                />
              </Grid>
              <Grid
                item
                md={2}
              >
                <FormControlLabel
                  value={"no"}
                  control={
                    <Radio
                    size="small"
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
              </Grid>
            </RadioGroup>
            <FormHelperText>{errors.isCurrentLoan?.message}</FormHelperText>
          </FormControl>
        </Grid>
        {currentLoan.hasPrevLoan && (
          <Grid container item minHeight={"120px"} gap={4} md={10} lg={12}>
            {currentLoan.activeLoans.map((activeLoan, index) => (
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
      <Grid container alignItems={"center"} item md={6}>
        <LoanDetails currentLoan={currentLoan} />
      </Grid>
    </Grid>
  );
}

export default LoanInformation;
