const activeLoansDeductions=[];
export default function calculateEMI(loanAmount, rates, numberOfMonths,currentLoanTitle,activeLoans=[]) {
  let totalInterests = 0;
  let totalAmount = loanAmount;
  const totalInterestLayers = [];
  for (let i = 0; i < rates.length; i++) {
    let layerInterest=0;
    // check if there is an active loan
    if(activeLoans.length>0){
      loanAmount=handleCalculateActiveLoans(rates[i],loanAmount,activeLoans,currentLoanTitle);
      }
      if (loanAmount > 0) {
      //loan amount is more than the layer max amount 
      if (loanAmount > rates[i].max) {
        if (loanAmount - rates[i].max > rates[i].min) {
           layerInterest=calculateLayerInterest(rates[i].max,rates[i].interestRate,numberOfMonths)
          totalInterests += layerInterest;
          totalInterestLayers.push({
            totalInterestApplied: layerInterest,
            interestRate: rates[i].interestRate,
            title: rates[i].title,
            min:rates[i].min,
            max:rates[i].max,
            deductedAmount:rates[i].max,
          });
          loanAmount -= rates[i].max;
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
            max:rates[i].max,
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
          max:rates[i].max,
          deductedAmount:loanAmount,
        });
        loanAmount -= rates[i].max;
      }
    } 
  }
  totalAmount += totalInterests;
  return { totalAmount, totalInterests, totalInterestLayers,activeLoansDeductions };
}
function calculateLayerInterest(amount,rate,numberOfMonths){
  return ((amount * rate) / 12) * numberOfMonths;
};
function handleCalculateActiveLoans(layer,loanAmount,activeLoans,currentLoanTitle){
  for(let i =0;i<activeLoans.length;i++){
    if(activeLoans[i].activeLoanType===currentLoanTitle&&layer.title==activeLoans[i].activeLoanLayer){
      const totalDeduction=Number(activeLoans[i].activeLoanAmount);
      loanAmount+=Number(activeLoans[i].activeLoanAmount);
      activeLoansDeductions[activeLoans[i].activeLoanType]=totalDeduction;
      activeLoansDeductions[activeLoans[i].activeLoanLayer]=layer.title;
    }
  };
  return loanAmount;
}