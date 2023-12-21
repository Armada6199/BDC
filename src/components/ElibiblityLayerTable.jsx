import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
function ElibiblityLayerTable({ layer, title, activeLoansDeductions }) {
  const layerDeductionSum={"First Layer":0,"Second Layer":0,"Third Layer":0,"Forth Layer":0}
  activeLoansDeductions.forEach(e=>{
   layerDeductionSum[e.deductionLayer]=+ e.totalDeductedAmount;
  });
  // function createLayerData(
  //   title,
  //   totalInterestApplied,
  //   interestRate,
  //   min,
  //   max,
  //   deductedAmount
  // ) {
  //   return {
  //     title,
  //     totalInterestApplied,
  //     interestRate,
  //     min,
  //     max,
  //     deductedAmount,
  //   };
  // }

  // function createActiveLoansData() {
  //   return {
  //     title,
  //     totalInterestApplied,
  //     interestRate,
  //     min,
  //     max,
  //     deductedAmount,
  //   };
  // }
  // const layerData = [
  //   createLayerData(
  //     title,
  //     layer.totalInterestApplied,
  //     layer.interestRate,
  //     layer.min,
  //     layer.max,
  //     layer.deductedAmount
  //   ),

  // ];
  // const activeLoansData = [createActiveLoansData()];
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
  <TableHead>
    <TableRow>
      <TableCell sx={{fontWeight:'700'}} align="left" >Loan Status</TableCell>
      <TableCell sx={{fontWeight:'700'}} align="left" >Loan Type</TableCell>
      <TableCell sx={{fontWeight:'700'}} align="left"> Applied Amount</TableCell>
      <TableCell sx={{fontWeight:'700'}} align="left"> Applied Interest</TableCell>
      <TableCell sx={{fontWeight:'700'}} rowSpan={2} align="left">Layer Interest Rate</TableCell>
      <TableCell sx={{fontWeight:'700'}} align="left">Range</TableCell>
      <TableCell sx={{fontWeight:'700'}} align="left">Previous Loans Deductions</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
      <TableRow
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell sx={{fontWeight:'600'}} component="th" scope="row">
          Requested 
        </TableCell>
        <TableCell sx={{fontWeight:'600',}} align="left">{title}</TableCell>
        <TableCell sx={{fontWeight:'600'}} align="left">{layer.deductedAmount}</TableCell>
        <TableCell sx={{fontWeight:'600',border:'1px solid lightgray'}} rowSpan={2} align="center">{layer.totalInterestApplied.toFixed(3)}</TableCell>
        <TableCell sx={{fontWeight:'600',border:'1px solid lightgray'}} rowSpan={2} align="center"> {layer.interestRate*100} %</TableCell>
        <TableCell sx={{fontWeight:'600',border:'1px solid lightgray'}} rowSpan={2} align="center">{layer.min+" "} - {" "+layer.max}</TableCell>
        <TableCell sx={{fontWeight:'600',color:'red'}} rowSpan={2} align="center" >{layerDeductionSum[layer.title]}</TableCell>
        {/* <TableCell sx={{fontWeight:'600'}} align="left">{activeLoansDeductions[title]&&activeLoansDeductions[layer.title]===layer.title?`${activeLoansDeductions[title]} JD`:'0 JD'}</TableCell> */}
      </TableRow>
      {activeLoansDeductions.map(activeDeduction=>(
     activeDeduction.deductionLayer===layer.title?  
   <TableRow
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell sx={{fontWeight:'600'}} component="th" scope="row">
          Active
        </TableCell>
        <TableCell sx={{fontWeight:'600'}} align="left">{activeDeduction.deductionType}</TableCell>
       <TableCell sx={{fontWeight:'600'}} align="left">{activeDeduction.totalDeductedAmount}</TableCell>
      </TableRow>
  :null))}
  </TableBody>
    </Table>
  </TableContainer>
  );
}

export default ElibiblityLayerTable;

// {/* <Grid container item gap={4}>
//  <TableContainer component={Paper}>
//   <Table sx={{ minWidth: 650 }} aria-label="simple table">
// <TableHead>
//   <TableRow>
//     <TableCell sx={{fontWeight:'700'}} align="left" >Loan Type</TableCell>
//     <TableCell sx={{fontWeight:'700'}} align="left">Total Applied Amount</TableCell>
//     <TableCell sx={{fontWeight:'700'}} align="left">Total Applied Interest</TableCell>
//     <TableCell sx={{fontWeight:'700'}} align="left">Layer Interest Rate</TableCell>
//     <TableCell sx={{fontWeight:'700'}} align="left">Range</TableCell>
//   </TableRow>
// </TableHead>
// <TableBody>
//   {rows.map((row) => (
//     <TableRow
//       key={row.title}
//       sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//     >
//       <TableCell sx={{fontWeight:'600'}} component="th" scope="row">
//         {row.title}
//       </TableCell>
//       <TableCell sx={{fontWeight:'600'}} align="left">{row.deductedAmount.toFixed(3)} JD</TableCell>
//       <TableCell sx={{fontWeight:'600'}} align="left">{row.totalInterestApplied.toFixed(3)} JD</TableCell>
//       <TableCell sx={{fontWeight:'600'}} align="left">{row.interestRate*100} %</TableCell>
//       <TableCell sx={{fontWeight:'600'}} align="left">{row.min} JD - {row.max} JD</TableCell>
//       {/* <TableCell sx={{fontWeight:'600'}} align="left">{activeLoansDeductions[title]&&activeLoansDeductions[layer.title]===layer.title?`${activeLoansDeductions[title]} JD`:'0 JD'}</TableCell> */}
//     </TableRow>
//   ))}
// </TableBody>
//   </Table>
// </TableContainer>
// {activeLoansDeductions.map(activeDeduction=>(
//   activeDeduction.deductionLayer===layer.title?  <>
//   <Typography variant='body1' fontWeight={'500'}>Layer Active Loans</Typography>
//     <TableContainer component={Paper}>
//     <Table sx={{ minWidth: 650 }} aria-label="simple table">
//       <TableHead>
//         <TableRow>
//           <TableCell sx={{fontWeight:'700'}} align="left" >Active Loan Type</TableCell>
//           <TableCell sx={{fontWeight:'700'}} align="left">Active Loan Layer</TableCell>
//           <TableCell sx={{fontWeight:'700'}}   align="left">Loan Left Amount</TableCell>
//           <TableCell sx={{fontWeight:'700'}}   align="left">Layer Deductions</TableCell>
//         </TableRow>
//       </TableHead>
//       <TableBody>
//         {rows.map((row) => (
//           <TableRow
//             key={activeDeduction.deductionLayer}
//             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//           >
//             <TableCell sx={{fontWeight:'600'}} component="th" scope="row">
//             {activeDeduction.deductionType}
//             </TableCell>
//             <TableCell sx={{fontWeight:'600'}} align="left">{activeDeduction.deductionLayer}</TableCell>
//             <TableCell sx={{fontWeight:'600'}}  align="left">{activeDeduction.totalDeductedAmount} JD</TableCell>
//             <TableCell sx={{fontWeight:'600',color:'red'}}  align="left">{activeDeduction.totalDeductedAmount} JD</TableCell>
//           </TableRow>
//         ))}
//       </TableBody>
//     </Table>
//   </TableContainer>
//   </>:null
// ))
// }
// <Divider sx={{width:'100%',height:'1px', backgroundColor:'lightgray'}}/>
// </Grid> */} */}
