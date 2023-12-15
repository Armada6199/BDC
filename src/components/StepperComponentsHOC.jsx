import React from "react";
import LoanInformation from "./LoanInformation";
import LoanEligibility from "./LoanEligibility";
import PersonalInformation from "./PersonalInformation";
import Documents from "./Documents";

function StepperComponentsHOC({
  activeStep,
  currentLoan,
  setCurrentLoan,
  loans,
  handleNext,
  handleBack,
}) {
  switch (activeStep) {
    case 0:
      return (
        <LoanInformation
          currentLoan={currentLoan}
          handleNext={handleNext}
          loans={loans}
          setCurrentLoan={setCurrentLoan}
          handleBack={handleBack}
        />
      );
    case 1:
      return (
        <LoanEligibility
          currentLoan={currentLoan}
          handleNext={handleNext}
          setCurrentLoan={setCurrentLoan}
          handleBack={handleBack}
        />
      );
    case 2:
      return (
        <PersonalInformation
          currentLoan={currentLoan}
          handleNext={handleNext}
          setCurrentLoan={setCurrentLoan}
          handleBack={handleBack}
        />
      );
    case 3:
      return (
        <Documents
          currentLoan={currentLoan}
          handleNext={handleNext}
          setCurrentLoan={setCurrentLoan}
          handleBack={handleBack}
        />
      );
  }
}

export default StepperComponentsHOC;
