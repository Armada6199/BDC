export default function calculateEMI(loanAmount, rates, numberOfMonths, currentLoanTitle, activeLoans = []) {
  let totalInterests = 0;
  let totalAmount = loanAmount;
  let activeLoansDeductions = [];
  const totalInterestLayers = [];
  for (const rate of rates) {
    let totalMaxAfterDeduction=rate.max;
    let layerInterest = 0;
    if (loanAmount > 0) {
      if (activeLoans.length > 0) {
        const {newMax,newDeductions} = handleCalculateActiveLoans(rate, activeLoans, currentLoanTitle, activeLoansDeductions);
        activeLoansDeductions=newDeductions;
        totalMaxAfterDeduction=newMax;
      }

      if (loanAmount > totalMaxAfterDeduction) {
        if (loanAmount - totalMaxAfterDeduction > rate.min) {
          layerInterest = calculateLayerInterest(totalMaxAfterDeduction, rate.interestRate, numberOfMonths);
          totalInterests += layerInterest;
          totalInterestLayers.push({
            totalInterestApplied: layerInterest,
            interestRate: rate.interestRate,
            title: rate.title,
            min: rate.min,
            max: totalMaxAfterDeduction,
            deductedAmount: totalMaxAfterDeduction,
          });
          loanAmount -= totalMaxAfterDeduction;
        } else {
          layerInterest = calculateLayerInterest((loanAmount - rate.min), rate.interestRate, numberOfMonths);
          totalInterests += layerInterest;
          totalInterestLayers.push({
            totalInterestApplied: layerInterest,
            interestRate: rate.interestRate,
            title: rate.title,
            min: rate.min,
            max: totalMaxAfterDeduction,
            deductedAmount: loanAmount - rate.min,
          });
          loanAmount = rate.min;
        }
      } else {
        layerInterest = calculateLayerInterest(loanAmount, rate.interestRate, numberOfMonths);
        totalInterests += layerInterest;
        totalInterestLayers.push({
          totalInterestApplied: layerInterest,
          interestRate: rate.interestRate,
          title: rate.title,
          min: rate.min,
          max: totalMaxAfterDeduction,
          deductedAmount: loanAmount,
        });
        loanAmount -= totalMaxAfterDeduction;
      }
    }
  }

  totalAmount += totalInterests;
  const payPerMonth = totalAmount / numberOfMonths;

  return { totalAmount, totalInterests, totalInterestLayers, activeLoansDeductions, payPerMonth };
}

function calculateLayerInterest(amount, rate, numberOfMonths) {
  return ((amount * rate) / 12) * numberOfMonths;
}

function handleCalculateActiveLoans(layer, activeLoans, currentLoanTitle, activeLoansDeductions) {
  const newDeductions = [...activeLoansDeductions];
  
  for (const activeLoan of activeLoans) {
    if (activeLoan.activeLoanType === currentLoanTitle && layer.title === activeLoan.activeLoanLayer) {
      newDeductions.push({
        activeDeductedType: currentLoanTitle,
        activeDeductedAmount: activeLoan.activeLoanAmount,
        activeDeductedLayer: layer.title,
      });
      return  {newMax:layer.max-activeLoan.activeLoanAmount,newDeductions} ;
    }
  }
  return {newMax:layer.max,newDeductions} ;
}
