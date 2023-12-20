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
  register,
  errors,
  setValue,
  handleSetEMI
}) {
  switch (activeStep) {
    case 0:
      return (
        <LoanInformation
          currentLoan={currentLoan}
          loans={loans}
          setCurrentLoan={setCurrentLoan}
          register={register}
          errors={errors}
          setValue={setValue}
          handleSetEMI={handleSetEMI}
        />
      );
    case 1:
      return (
        <LoanEligibility
          currentLoan={currentLoan}
          setCurrentLoan={setCurrentLoan}
          register={register}
        />
      );
    case 2:
      return (
        <PersonalInformation
          currentLoan={currentLoan}
          setCurrentLoan={setCurrentLoan}
          register={register}
          errors={errors}
        />
      );
    case 3:
      return (
        <Documents
          currentLoan={currentLoan}
          setCurrentLoan={setCurrentLoan}
          register={register}
          errors={errors}
        />
      );
  }
}

export default StepperComponentsHOC;
