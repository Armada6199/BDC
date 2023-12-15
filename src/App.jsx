import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid,TextField } from "@mui/material";
import StepperComponentsHOC from "./components/StepperComponentsHOC.jsx";
import { loanDetailsData } from "./assets/loans.jsx";
import { useForm } from "react-hook-form";
const steps = [
  "1. Load information",
  "2. Loan Eligibility ",
  "3. Personal Information",
  "4. Documents",
];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [loans, setLoans] = React.useState(loanDetailsData);
  const [currentLoan, setCurrentLoan] = React.useState(loans[1]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm(); 

  // const isStepSkipped = (step) => {
  //   return skipped.has(step);
  // };

  const handleNext = (data) => {
    let newSkipped = skipped;
      if(activeStep!==steps.length-1){
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
        console.log(data)

      }else {
        console.log(data)
      }


  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Grid container gap={2} bgcolor={"#F1F3F4"}>
      <Grid container item md={12} p={4} gap={4}>
        <Typography variant="h4">Apply Loan</Typography>
        <Grid item md={12} sx={{ width: "100%" }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              return (
                <Box
                  width={"100%"}
                  mr={"2px"}
                  display={"flex"}
                  flexDirection={"column"}
                  gap={2}
                  key={label}
                >
                  <Typography
                    variant="body1"
                    color={
                      activeStep == index
                        ? "#C4B28F"
                        : activeStep > index
                        ? "#215190"
                        : "darkgray"
                    }
                  >
                    {label}
                  </Typography>
                  <Box
                    width={"100%"}
                    height={"5px"}
                    backgroundColor={
                      activeStep == index
                        ? "#C4B28F"
                        : activeStep > index
                        ? "#215190"
                        : "darkgray"
                    }
                  ></Box>
                </Box>
              );
            })}
          </Stepper>
        </Grid>
      </Grid>
        <Grid container item p={4} gap={4} bgcolor={"#fff"}>
          <StepperComponentsHOC
            currentLoan={currentLoan}
            loans={loans}
            setCurrentLoan={setCurrentLoan}
            activeStep={activeStep}
            register={register}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        
        </Grid>
        </Grid>
  );
}
