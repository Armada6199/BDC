import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
function ElibiblityLayerTable({layer,title}) {
    function createData(title, totalApplied, interestRate,min, max) {
        return { title, totalApplied, interestRate, min, max };
      }
      const rows = [
        createData(title,layer.totalApplied, layer.interestRate,layer.min,layer.max),
      ];
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight:'700'}} align="left" >Loan Type</TableCell>
            <TableCell sx={{fontWeight:'700'}} align="left">Total Applied Amount</TableCell>
            <TableCell sx={{fontWeight:'700'}} align="left">Layer Interest Rate</TableCell>
            <TableCell sx={{fontWeight:'700'}} align="left">Minimum  Amount</TableCell>
            <TableCell sx={{fontWeight:'700'}} align="left">Maximum  Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx={{fontWeight:'600'}} component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell sx={{fontWeight:'600'}} align="left">{row.totalApplied} JD</TableCell>
              <TableCell sx={{fontWeight:'600'}} align="left">{row.interestRate*100} %</TableCell>
              <TableCell sx={{fontWeight:'600'}} align="left">{row.min} JD</TableCell>
              <TableCell sx={{fontWeight:'600'}} align="left">{row.max} JD</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ElibiblityLayerTable