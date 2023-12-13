import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import {loanDetailsData} from '../assets/loans'
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CustomChart from "./CustomChart";
import { glassmorphismStyle } from "../assets/styles";
function LoanEligibility({currentLoan}) {
  return (
    <Grid container height={'600px'}>
      <Grid container item gap={4} md={7}>
        <Grid container item gap={1} alignItems={"center"}>
          <Typography variant="h4">My loan</Typography>
          <InfoIcon sx={{ width: "31px", height: "41px", color: "#C4B28F" }} />
        </Grid>
        <Grid container item direction={"column"}>
          <Typography variant="h5">EVERY MONTH I PAY</Typography>
          <Typography variant="h4">699 JD</Typography>
        </Grid>

        {/* loan type an amount */}
        <Grid container item md={12} gap={1}>
          <Grid
            container
            gap={2}
            item
            md={8}
            sx={{
              borderTop: "1px solid lightgray",
              borderBottom: "1px solid lightgray",
            }}
          >
            <Grid item md={5}>
              <Typography variant="h6">Loan Type</Typography>
              <Box display={'flex'} gap={1} alignItems={'center'}>
              {currentLoan.loadIcon({width:'25px',height:'25px',color:"black"})}
              <Typography variant="h5">{currentLoan.title}</Typography>
              </Box>
            </Grid>
            <Divider
              sx={{
                width: "1px",
                height: "80%",
                backgroundColor: "lightgray",
                alignSelf: "center",
              }}
            />

            <Grid item md={5}>
              <Typography variant="h6">Loan Amount</Typography>
              <Typography variant="h5">{currentLoan.amount}</Typography>
            </Grid>
          </Grid>
          <Grid
            container
            gap={2}
            item
            md={8}
            sx={{ borderBottom: "1px solid lightgray" }}
          >
            <Grid item md={5}>
              <Typography variant="h6">Loan term (in months)</Typography>
              <Typography variant="h5">{currentLoan.numberOfMonths}</Typography>
            </Grid>
            <Divider
              sx={{ width: "1px", height: "80%", backgroundColor: "lightgray" }}
            />
            <Grid item md={5}>
              <Typography variant="h6">INTEREST RATE </Typography>
              <Typography variant="h5">6.7%</Typography>
            </Grid>
          </Grid>
        </Grid>
        {/* privileges and terms  */}
        <Grid container item md={12}>
          <Grid container gap={2} item md={5}>
            {currentLoan.privileges.map((priv) => (
              <Grid
                item
                key={priv}
                md={12}
                display={"flex"}
                alignItems={"center"}
                gap={1}
              >
                <CheckCircleIcon
                  sx={{ width: "31px", height: "41px", color: "#C4B28F" }}
                />
                <Typography variant="subtitle1">{priv}</Typography>
              </Grid>
            ))}
          </Grid>
          <Grid container item md={5}>
            {currentLoan.termsAndConditions.map((term) => (
              <Grid
                item
                key={term}
                display={"flex"}
                alignItems={"center"}
                md={12}
                gap={1}
              >
                <CheckCircleIcon
                  sx={{ width: "31px", height: "41px", color: "#C4B28F" }}
                />
                <Typography variant="subtitle1">{term}</Typography>
              </Grid>
            ))}
          </Grid>
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
        md={4}
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
            <CustomChart />
          </Box>
          <Grid container justifyContent={"center"} item gap={1} md={12}>
            <Grid item md={5}>
              <Typography variant="h6">EMI Amount</Typography>
              <Typography variant="body1">Principal + Interest </Typography>
              <Typography variant="h5">40,00 JD</Typography>
            </Grid>
            <Grid item md={5}>
              <Typography variant="h6">Interest Payable</Typography>
              <Typography variant="h5">10,00 JD</Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}

export default LoanEligibility;
