export default function calculateEMI(loanAmount, rates, numberOfMonths,currentLoanTitle,activeLoans=[]) {
  let totalInterests = 0;
  let totalAmount = loanAmount;
  const totalInterestLayers = [];
  let payPerMonth=0;
  let activeLoansDeductions=[];
  for (let i = 0; i < rates.length; i++) {
    let layerInterest=0;
    let maxTemp=rates[i].max;
    if(activeLoans.length>0){
      const {newMax,newDeductions}=handleCalculateActiveLoans(rates[i],activeLoans,currentLoanTitle,activeLoansDeductions);
      maxTemp=newMax;
      activeLoansDeductions=newDeductions;
      }
    // check if there is an active loan
      if (loanAmount > 0) {
      //loan amount is more than the layer max amount 
      if (loanAmount > maxTemp) {
        if (loanAmount - maxTemp > rates[i].min) {
           layerInterest=calculateLayerInterest(maxTemp,rates[i].interestRate,numberOfMonths)
          totalInterests += layerInterest;
          totalInterestLayers.push({
            totalInterestApplied: layerInterest,
            interestRate: rates[i].interestRate,
            title: rates[i].title,
            min:rates[i].min,
            max:maxTemp,
            deductedAmount:maxTemp,
          });
          loanAmount -= maxTemp;
        } 
        //loan amount minus the max is less than the next layer minium amount
        else {
           layerInterest =calculateLayerInterest((loanAmount - rates[i].min),rates[i].interestRate,numberOfMonths)
          totalInterests += layerInterest;
          totalInterestLayers.push({
            totalInterestApplied: layerInterest,
            interestRate: rates[i].interestRate,
            title: rates[i].title,
            min:rates[i].min,
            max:maxTemp,
            deductedAmount:loanAmount - rates[i].min,
          });
          loanAmount = rates[i].min;
        }
      }
      //loan amount is less than the layer max amount 
      else {
         layerInterest =calculateLayerInterest(loanAmount,rates[i].interestRate,numberOfMonths)
        totalInterests += layerInterest;
        totalInterestLayers.push({
          totalInterestApplied: layerInterest,
          interestRate: rates[i].interestRate,
          title: rates[i].title,
          min:rates[i].min,
          max:maxTemp,
          deductedAmount:loanAmount,
        });
        loanAmount -= maxTemp;
      }
    } 
  }
  totalAmount += totalInterests;
  payPerMonth=totalAmount/numberOfMonths;
  return { totalAmount, totalInterests, totalInterestLayers,activeLoansDeductions,payPerMonth };
}
function calculateLayerInterest(amount,rate,numberOfMonths){
  return ((amount * rate) / 12) * numberOfMonths;
};
function handleCalculateActiveLoans(layer,activeLoans,currentLoanTitle,activeLoansDeductions){
  try {
    const  matchLoan= activeLoans.find(ele=>ele.activeLoanType===currentLoanTitle&&layer.title==ele.activeLoanLayer)
    if(matchLoan){
      const newDeductions=activeLoansDeductions;
      newDeductions.push({totalDeductedAmount:matchLoan.activeLoanAmount,deductionLayer:matchLoan.activeLoanLayer,deductionType:matchLoan.activeLoanType});
      return {newMax:layer.max-matchLoan.activeLoanAmount,newDeductions};
    }else return {newMax:layer.max,newDeductions:activeLoansDeductions}
}
  catch (error) {
    throw new Error(error)
  }
}