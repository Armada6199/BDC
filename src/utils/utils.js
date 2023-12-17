export default function calculateEMI(loanAmount, rates, numberOfMonths) {
  let totalInterests = 0;
  let totalAmount = loanAmount;
  const totalInterestLayers = [];
  for (let i = 0; i < rates.length; i++) {
    if (loanAmount > 0) {
      if (loanAmount > rates[i].max) {
        if (loanAmount - rates[i].max > rates[i].min) {
          const layerInterest=(( rates[i].max * rates[i].rate)/12)*numberOfMonths;
          totalInterests += layerInterest;
          totalInterestLayers.push({
            totalApplied: layerInterest,
          });
          loanAmount -= rates[i].max;
        } else {
          const layerInterest=(((loanAmount - rates[i].min) * rates[i].rate)/12)*numberOfMonths
          totalInterests += layerInterest;
          totalInterestLayers.push({
            totalApplied: layerInterest,
          });
          loanAmount = rates[i].min;
        }
      } else {
        const layerInterest=((loanAmount * rates[i].rate)/12)*numberOfMonths;
        totalInterests +=  layerInterest;
        totalInterestLayers.push({ totalApplied: layerInterest });
        loanAmount -= rates[i].max;
      }
    }
  }

  totalAmount += totalInterests;
  return { totalAmount, totalInterests, totalInterestLayers };
}
