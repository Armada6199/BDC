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
import Modal from '@mui/material/Modal';
import React, { useEffect, useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import axios from "axios";
import Template from "../Template";
function Documents({  register, errors,currentLoan }) {
  const [pdfString,setPdfString]=useState('');
  // const [openModal, setOpenModal] = React.useState(false);
  // const handleOpen = () => setOpenModal(true);
  // const handleClose = () => setOpenModal(false);
 useEffect(()=>{
  const postData=async()=>{
    const documentPost=await axios.post('http://localhost:5000/loan',currentLoan);
    setPdfString(documentPost.data)
  }
  postData()
 },[])
  return (
    <Grid container minHeight={"70vh"} maxHeight={"1rem"} gap={2}>
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
        {/* <Grid item md={4}>
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
        </Grid> */}
        {pdfString.length>0&&
  <Template pdfString={pdfString}/>}
      </Grid>
      <Grid item md={12}>
        <FormControlLabel
          control={
            <Checkbox
              {...register("iScoreApproval", {
                required: "Kindly approve this field",
              })}
            />
          }
          label="I approve and authorize BDC to perform I-Score investigation and all required investigations to proceed the loan request"
        />
        {errors.iScoreApproval?.message && (
          <Typography variant="body2" color={"error"}>
            {errors.iScoreApproval?.message}
          </Typography>
        )}
      </Grid>
    </Grid>
  );
}

export default Documents;
