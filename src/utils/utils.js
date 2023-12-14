export default function calculateEMI(loanAmount, rates) {
  let totalInterests = 0;
  let totalAmount = loanAmount;
  const totalInterestLayers = [];
  for (let i = 0; i < rates.length; i++) {
    if (loanAmount > 0) {
      if (loanAmount > rates[i].max) {
        if (loanAmount - rates[i].max > 5000) {
          totalInterests += rates[i].max * rates[i].rate;
          // totalInterestLayers.push({totalApplied:(rates[i].max * rates[i].rate)})
          loanAmount -= rates[i].max;
        } else {
          totalInterests += (loanAmount - 5000) * rates[i].rate;
          // totalInterestLayers.push({totalApplied:(loanAmount-5000)*rates[i].rate})
          loanAmount = 5000;
        }
      } else {
        totalInterests = totalInterests + (loanAmount * rates[i].rate);
        // totalInterestLayers.push({totalApplied:totalInterests + loanAmount * rates[i].rate})
        loanAmount -= rates[i].max;
      }
    }
  }

  totalAmount += totalInterests;
  return { totalAmount, totalInterests, totalInterestLayers };
}
// if (rates[i].max >= loanAmount) {

// } else {

// }
