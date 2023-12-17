import { Box, Divider, Grid, Typography, Button } from "@mui/material";
import React, { useEffect } from "react";
import InfoIcon from "@mui/icons-material/Info";
import CustomChart from "./CustomChart";
import { glassmorphismStyle } from "../assets/styles";
import { Popper } from "@mui/base";
import { Collapse } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
function LoanEligibility({ currentLoan, handleNext, handleBack }) {
  const layers = [
    { title: "First Layer", range: "5k - 40k", interstRate: "3.25%" },
    { title: "Second Layer ", range: "40k - 160k", interstRate: "4.0%" },
    { title: "Third Layer ", range: "5k - 10k", interstRate: "6.0%" },
    { title: "Forth  Layer", range: "5k - 190k", interstRate: "10.5%" },
  ];
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const [popperData, setPopperData] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const handleOpenPopper = (event, layer) => {
    setPopperData(layer);
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  return (
    <Grid container minHeight={"70vh"} gap={4}>
      <Grid container item gap={4} md={8}>
        <Grid container item md={3} gap={1} alignItems={"center"}>
          <Typography variant="h4">My loan</Typography>
          <InfoIcon sx={{ width: "31px", height: "41px", color: "#C4B28F" }} />
        </Grid>
        <Grid container alignItems={"center"} item md={12}>
          <Grid
            container
            item
            md={3}
            direction={"column"}
            justifyContent={"center"}
          >
            <Typography variant="h5">EVERY MONTH I PAY</Typography>
            <Typography variant="h4">
              {parseFloat(currentLoan.payPerMonth.toFixed(3))} JD
            </Typography>
          </Grid>
          <Grid
            container
            item
            md={3}
            direction={"column"}
            justifyContent={"center"}
          >
            <Typography variant="h5">EMI Amount</Typography>
            <Typography variant="h4">
              {parseFloat(currentLoan.EMI.toFixed(3))} JD
            </Typography>
          </Grid>
          <Grid
            container
            item
            md={3}
            direction={"column"}
            justifyContent={"center"}
          >
            <Typography variant="h5">Total Interest</Typography>
            <Typography variant="h4">
              {parseFloat(currentLoan.interestPayable.toFixed(3))} JD
            </Typography>
          </Grid>
        </Grid>
        {/* loan type an amount */}
        <Grid
          container
          sx={{
            borderTop: "1px solid darkgray",
            borderBottom: "1px solid darkgray",
          }}
          alignItems={"center"}
          item
          md={11}
          gap={2}
        >
          <Grid item md={3}>
            <Typography variant="h6">Loan Type</Typography>
            <Box display={"flex"} gap={1} alignItems={"center"}>
              {currentLoan.loadIcon({
                width: "25px",
                height: "25px",
                color: "black",
              })}
              <Typography variant="h5">{currentLoan.title}</Typography>
            </Box>
          </Grid>
          <Divider
            sx={{ backgroundColor: "darkgray", width: "1px", height: "80%" }}
          />
          <Grid item md={3}>
            <Typography variant="h6">Loan Amount</Typography>
            <Typography variant="h5">{currentLoan.loanAmount}</Typography>
          </Grid>
          <Divider
            sx={{ backgroundColor: "darkgray", width: "1px", height: "80%" }}
          />

          <Grid container gap={2} item md={4}>
            <Grid item md={12}>
              <Typography variant="h6">Loan term (in months)</Typography>
              <Typography variant="h5">{currentLoan.numberOfMonths}</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid container item md={12}>
          {currentLoan.intrestRates.map(
            (layer, index) =>
              index < currentLoan.totalAppliedLayers.length && (
                <Grid container item md={12}>
                  <Grid item md={12} onClick={()=>setOpen(prev=>!prev)}>
                    <Box>
                    <Typography>{layer.title}</Typography>
                    {open ? <ExpandLess />  :<ExpandMore />}
                    </Box>
                  </Grid>
                  <Collapse sx={{width:'100%'}} in={open} timeout="auto" unmountOnExit>
                    <Grid container item spacing={1} md={12}>
                    <Grid item md={5}>
                      <Typography variant="body1">Layer Applied Iterest</Typography>
                      <Typography variant="caption" fontWeight={'600'}>{currentLoan.totalAppliedLayers[index].totalApplied}</Typography>
                    </Grid> 
                    <Grid item md={5}>
                      <Typography variant="body1">Interest Rate</Typography>
                      <Typography variant="caption" fontWeight={'600'}>{layer.rate}</Typography>
                    </Grid> 
                    </Grid>
                 <Grid container spacing={1} item md={12}>
                 <Grid item md={4}>
                      <Typography variant="body1">Layer Minimum Amount</Typography>
                      <Typography variant="caption" fontWeight={'600'}>{layer.min}</Typography>
                    </Grid> 
                    <Grid item md={4}>
                      <Typography variant="body1">Layer Maximum Amount</Typography>
                      <Typography variant="caption" fontWeight={'600'}>{layer.max}</Typography>
                    </Grid> 
                 </Grid>
                  </Collapse>
                </Grid>
              )
              //   <Grid
              //   container
              //   sx={{
              //     borderTop: "1px solid #C4B28F",
              //     borderBottom: "1px solid #C4B28F",
              //   }}
              //   alignItems={"center"}
              //   item
              //   md={11}
              //   gap={2}
              // >
              //   <Grid item md={3}>
              //     <Typography variant="h6">Loan Type</Typography>
              //     <Box display={"flex"} gap={1} alignItems={"center"}>
              //       {currentLoan.loadIcon({
              //         width: "25px",
              //         height: "25px",
              //         color: "black",
              //       })}
              //       <Typography variant="h5">{currentLoan.title} ({index})</Typography>
              //     </Box>
              //   </Grid>
              //   <Divider
              //     sx={{ backgroundColor: "darkgray", width: "1px", height: "80%" }}
              //   />
              //   <Grid item md={3}>
              //     <Typography variant="h6">Total Applied</Typography>
              //     <Typography variant="h5">{currentLoan.totalAppliedLayers[index].totalApplied}</Typography>
              //   </Grid>
              //   <Divider
              //     sx={{ backgroundColor: "darkgray", width: "1px", height: "80%" }}
              //   />
              //   <Grid container gap={2} item md={4}>
              //     <Grid item md={12}>
              //       <Typography variant="h6">Stage Term (In months)</Typography>
              //       <Typography variant="h5">{currentLoan.numberOfMonths}</Typography>
              //     </Grid>
              //   </Grid>
              // </Grid>
          )}
          {/* <Popper  open={open} anchorEl={anchorEl}>
                <Box sx={{ display:'flex',flexDirection:'column',gap:2,border:'1px solid  #C4B28F',borderRadius:'10px', p: 1, bgcolor: "background.paper" }}>
                  <Typography variant="body1" fontWeight={'600'}>{popperData.title}</Typography>
                  <Typography variant="body2" >Range: {popperData.range}</Typography>
                  <Typography variant="subtitle1">Interest Rate: {popperData.interstRate}</Typography>
                </Box>
              </Popper> */}
        </Grid>
      </Grid>
      <Grid
        sx={glassmorphismStyle}
        p={2}
        container
        item
        justifyContent={"center"}
        alignItems={"center"}
        bgcolor={"red"}
        md={3}
      >
        <Box
          display={"flex"}
          width={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={4}
          flexDirection={"column"}
        >
          <Box>
            <CustomChart
              layers={layers}
              totalAppliedLayers={currentLoan.totalAppliedLayers}
            />
          </Box>
          <Grid container justifyContent={"center"} item gap={1} md={12}>
            <Grid item md={5}>
              <Typography variant="h6">EMI Amount</Typography>
              <Typography variant="body1">Principal + Interest </Typography>
              <Typography variant="h5">{currentLoan.EMI}</Typography>
            </Grid>
            <Grid item md={5}>
              <Typography variant="h6">Interest Payable</Typography>
              <Typography variant="h5">
                {currentLoan.interestPayable}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid container item md={12}>
        <Grid item md={4}>
          <Button
            sx={{ width: "100%" }}
            onClick={handleBack}
            variant="outlined"
          >
            Cancel
          </Button>
        </Grid>
        <Grid container item md={8} justifyContent={"flex-end"} gap={2}>
          <Grid item md={4}>
            <Button
              sx={{ width: "100%" }}
              onClick={handleBack}
              variant="outlined"
            >
              Back
            </Button>
          </Grid>
          <Grid item md={4}>
            <Button
              variant="contained"
              type="submit"
              sx={{ backgroundColor: "#215190", width: "100%" }}
            >
              Next
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default LoanEligibility;
