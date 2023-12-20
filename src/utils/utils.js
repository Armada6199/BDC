let activeLoansDeductions=[];
export default function calculateEMI(loanAmount, rates, numberOfMonths,currentLoanTitle,activeLoans=[]) {
  let totalInterests = 0;
  let totalAmount = loanAmount;
  const totalInterestLayers = [];
  for (let i = 0; i < rates.length; i++) {
    let layerInterest=0;
    // check if there is an active loan
      if (loanAmount > 0) {
      //loan amount is more than the layer max amount 
      if(activeLoans.length>0){
        rates[i].max=handleCalculateActiveLoans(rates[i],activeLoans,currentLoanTitle);
        console.log(i)
        }
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
function handleCalculateActiveLoans(layer,activeLoans,currentLoanTitle){
console.log(layer)
  try {
  for(let j =0;j<activeLoans.length;j++){
    let deductedAmount=0;
    if(activeLoans[j].activeLoanType===currentLoanTitle&&layer.title==activeLoans[j].activeLoanLayer){
      deductedAmount=layer.max-activeLoans[j].activeLoanAmount;
      activeLoansDeductions.push({activeDeductedType:currentLoanTitle,activeDeductedAmount:deductedAmount});
      return deductedAmount;
    }else return layer.max;
  };
  } catch (error) {
    throw new Error(error)
  }
}