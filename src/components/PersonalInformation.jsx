import { Grid, TextField, Typography, Button } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

function PersonalInformation({ handleNext, handleBack, register, errors }) {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();
  const personalInformationInputStyle = {
    width: "100%",
  };
  return (
    <Grid container minHeight={"70vh"} gap={4}>
      <Grid container justifyContent={"space-between"} item spacing={4}>
        <Grid item md={12}>
          <Typography variant="h5" fontWeight="">
            Employee Information{" "}
          </Typography>
        </Grid>
        <Grid item md={6}>
          <Typography variant="body1" fontWeight={"600"}>
            Employee Name
          </Typography>
          <TextField
            sx={personalInformationInputStyle}
            error={!!errors.employeeName}
            helperText={errors.employeeName?.message}
            {...register("employeeName", {
              required: "This field is required",
            })}
          />
        </Grid>
        <Grid item md={6}>
          <Typography variant="body1" fontWeight={"600"}>
            File Number
          </Typography>
          <TextField
            sx={personalInformationInputStyle}
            error={!!errors.fileNumber}
            helperText={errors.fileNumber?.message}
            {...register("fileNumber", {
              required: "This field is required",
            })}
          />
        </Grid>
        <Grid item md={6}>
          <Typography variant="body1" fontWeight={"600"}>
            Job Title
          </Typography>
          <TextField
            sx={personalInformationInputStyle}
            error={!!errors.jobTitle}
            helperText={errors.jobTitle?.message}
            {...register("jobTitle", {
              required: "This field is required",
            })}
          />
        </Grid>
        <Grid item md={6}>
          <Typography variant="body1" fontWeight={"600"}>
            Joining Date
          </Typography>
          <TextField
            sx={personalInformationInputStyle}
            error={!!errors.joiningDate}
            joiningDate={errors.joiningDate?.message}
            {...register("joiningDate", {
              required: "This field is required",
            })}
          />
        </Grid>
        <Grid item md={6}>
          <Typography variant="body1" fontWeight={"600"}>
            Employee Level
          </Typography>
          <TextField
            sx={personalInformationInputStyle}
            error={!!errors.employeeLevel}
            helperText={errors.employeeLevel?.message}
            {...register("employeeLevel", {
              required: "This field is required",
            })}
          />
        </Grid>
        <Grid item md={6}>
          <Typography variant="body1" fontWeight={"600"}>
            Job Level
          </Typography>
          <TextField
            sx={personalInformationInputStyle}
            error={!!errors.jobLevel}
            helperText={errors.jobLevel?.message}
            {...register("jobLevel", {
              required: "This field is required",
            })}
          />
        </Grid>
        <Grid item md={6}>
          <Typography variant="body1" fontWeight={"600"}>
            Employee Number
          </Typography>
          <TextField
            sx={personalInformationInputStyle}
            error={!!errors.employeeNumber}
            helperText={errors.employeeNumber?.message}
            {...register("employeeNumber", {
              required: "This field is required",
            })}
          />
        </Grid>
        <Grid item md={6}>
          <Typography variant="body1" fontWeight={"600"}>
            Work Place
          </Typography>
          <TextField
            sx={personalInformationInputStyle}
            error={!!errors.workPlace}
            helperText={errors.workPlace?.message}
            {...register("workPlace", {
              required: "This field is required",
            })}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default PersonalInformation;
