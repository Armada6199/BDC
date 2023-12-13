import { Grid, TextField, Typography } from "@mui/material";
import React from "react";
const personalInformationInputStyle = {
  width: "100%",
};
function PersonalInformation({register}) {
  return (
    <Grid container height={'600px'} gap={2} >
      <Grid container item gap={4}  md={12}>
        <Grid item md={12}>
          <Typography variant="h5" fontWeight="">
            Employee Information{" "}
          </Typography>
        </Grid>
        <Grid item md={5}>
          <Typography variant="body1" fontWeight={"600"}>
            Employee Name
          </Typography>
          <TextField sx={personalInformationInputStyle} {...register('employeeName')}/>
        </Grid>
        <Grid item md={5}>
          <Typography variant="body1" fontWeight={"600"}>
            File Number
          </Typography>
          <TextField sx={personalInformationInputStyle}  {...register('fileNumber')}/>
        </Grid>
        <Grid item md={5}>
          <Typography variant="body1" fontWeight={"600"}>
            Job Title
          </Typography>
          <TextField sx={personalInformationInputStyle} {...register('jobTitle')} />
        </Grid>
        <Grid item md={5}>
          <Typography variant="body1" fontWeight={"600"}>
            Joining Date
          </Typography>
          <TextField sx={personalInformationInputStyle} {...register('joiningDate')}/>
        </Grid>
        <Grid item md={5}>
          <Typography variant="body1" fontWeight={"600"}>
            Employee Level
          </Typography>
          <TextField sx={personalInformationInputStyle} {...register('employeeLevel')} />
        </Grid>
        <Grid item md={5}>
          <Typography variant="body1" fontWeight={"600"}>
            Job Level
          </Typography>
          <TextField sx={personalInformationInputStyle} {...register('jobLevel')} />
        </Grid>
        <Grid item md={5}>
          <Typography variant="body1" fontWeight={"600"}>
            Employee Number
          </Typography>
          <TextField sx={personalInformationInputStyle} {...register('employeeNumber')}/>
        </Grid>
        <Grid item md={5}>
          <Typography variant="body1" fontWeight={"600"}>
            Work Place
          </Typography>
          <TextField sx={personalInformationInputStyle} {...register('workPlace')} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default PersonalInformation;
