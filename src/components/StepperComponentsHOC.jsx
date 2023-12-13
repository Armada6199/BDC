import React from 'react'
import LoanInformation from './LoanInformation'
import LoanEligibility from './LoanEligibility'
import PersonalInformation from './PersonalInformation'
import Documents from './Documents'

function StepperComponentsHOC({activeStep,currentLoan,setCurrentLoan,loans,register }) {
    switch(activeStep){
        case 0:return <LoanInformation currentLoan={currentLoan} register={register} loans={loans} setCurrentLoan={setCurrentLoan}/>;
        case 1:return<LoanEligibility currentLoan={currentLoan}  setCurrentLoan={setCurrentLoan}/>
        case 2:return <PersonalInformation currentLoan={currentLoan} register={register}  setCurrentLoan={setCurrentLoan}/>
        case 3: return <Documents currentLoan={currentLoan}  setCurrentLoan={setCurrentLoan}/>
     }
}

export default StepperComponentsHOC