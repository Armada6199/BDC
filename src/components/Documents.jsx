import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
function Documents({handleBack,handleNext}) {  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <form noValidate onSubmit={handleSubmit(handleNext)}>

    <Grid container height={'calc(100vh - 20vh)'} maxHeight={'1rem'} gap={2} >
      <Grid item md={12}> 
        <Typography variant="h5" fontWeight="700" color={"gray"}>
          Employee Information{" "}
        </Typography>
      </Grid>
      <Grid item md={7}>
        <Typography variant="body2" color={"gray"}>
          Please download the template related to each file, via clicking on the
          download template button, then upload it after filling it via the
          upload template button
        </Typography>
      </Grid>
      <Grid item md={12}>
        <Grid item md={4}>
          <Paper
            variant="outlined"
            style={{
              border: true ? "2px dashed #C4B28F" : "2px dashed #C4B28F",
              padding: 20,
              textAlign: "center",
              cursor: "pointer",
              background: true ? "#fff" : "#fafafa",
              borderRadius: "20px",
            }}
          >
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="raised-button-file"
              multiple
              type="file"
            />
            <label htmlFor="raised-button-file">
              <Box display="flex" flexDirection="column" alignItems="center">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <CloudUploadIcon style={{ fontSize: 60, color: "#BE9952" }} />
                </IconButton>
                <Typography>Upload Bulk of Beneficiaries</Typography>
                <Typography>Use a csv file</Typography>
              </Box>
            </label>
          </Paper>
        </Grid>
      </Grid>
      <Grid item md={12}>
        <FormControlLabel
          control={<Checkbox  {...register('iScoreApproval',{required:'Kindly approve this field'})} />}
          label="I approve and authorize BDC to perform I-Score investigation and all required investigations to proceed the loan request"
        />
        {errors.iScoreApproval?.message&&<Typography variant='body2' color={'error'}>{errors.iScoreApproval?.message}</Typography>}
      </Grid>
      <Grid container item  md={12}>
          <Grid item md={4}>
            <Button
              sx={{ width: "100%" }}
              onClick={handleBack}
              variant="outlined"
            >
              Cancel
            </Button>
          </Grid>
          <Grid container  item md={8} justifyContent={'flex-end'} gap={2} >
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
    </form>
  );
}

export default Documents;
