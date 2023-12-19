export default function calculateEMI(loanAmount, rates, numberOfMonths) {
  let totalInterests = 0;
  let totalAmount = loanAmount;
  const totalInterestLayers = [];
  for (let i = 0; i < rates.length; i++) {
    let layerInterest=0;
    if (loanAmount > 0) {
      //loan amount is more than the layer max amount 
      if (loanAmount > rates[i].max) {
        if (loanAmount - rates[i].max > rates[i].min) {
           layerInterest=calculateLayerInterest(rates[i].max,rates[i].interestRate,numberOfMonths)
          totalInterests += layerInterest;
        
          loanAmount -= rates[i].max;
        } 
        //loan amount minus the max is less than the next layer minium amount
        else {
           layerInterest =calculateLayerInterest((loanAmount - rates[i].min),rates[i].interestRate,numberOfMonths)
          totalInterests += layerInterest;
          loanAmount = rates[i].min;
        }
      }
      //loan layer is less than the layer max amount 
      else {
         layerInterest =calculateLayerInterest(loanAmount,rates[i].interestRate,numberOfMonths)
        totalInterests += layerInterest;
        loanAmount -= rates[i].max;
      }
      totalInterestLayers.push({
        totalApplied: layerInterest,
        interestRate: rates[i].interestRate,
        title: rates[i].title,
        min:rates[i].min,
        max:rates[i].max
      });
    }
  }
  totalAmount += totalInterests;
  return { totalAmount, totalInterests, totalInterestLayers };
}
function calculateLayerInterest(amount,rate,numberOfMonths){
  return ((amount * rate) / 12) * numberOfMonths;
}