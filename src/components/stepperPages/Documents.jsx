import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  IconButton,
  Modal,
  Paper,
  Typography,
  
} from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Template from "../Template";
import '../../assets/styles.css';
import SignatureCanvas from 'react-signature-canvas'

function Documents({ register, errors, currentLoan }) {
  const [pdfString, setPdfString] = useState("");
  const [openModal, setOpenModal] = React.useState(false);
  const [signatureState,setSignatureState]=useState(null);
  let sigPad={};
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  const clear=()=>sigPad.clear();
  // const save=()=>setSignatureState(sigPad.getTrimmedCanvas().toBase64())
  useEffect(() => {
    const postData = async () => {
      const documentPost = await axios.post(
        `${process.env.REACT_APP_API_URL}/loan`,
        currentLoan
      );
      setPdfString(documentPost.data);
    };
    postData();
  }, []);
  async function handleAddSignature(){
    setSignatureState(sigPad.getTrimmedCanvas().toDataURL());
    try {
      const response=await axios.post(`${process.env.REACT_APP_API_URL}/signature`,{...currentLoan,signatureBase64:sigPad.getTrimmedCanvas().toDataURL()});
      if(response.status===200){
        console.log(response.data)
        setPdfString(response.data)
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Grid container item minHeight={"70vh"} spacing={12}>
      <Grid container item md={6} spacing={4}>
        <Grid item md={12}>
          <Typography variant="h5" fontWeight="700" color={"gray"}>
            Attatchments
          </Typography>
        </Grid>
        <Grid item md={12}>
          <Typography variant="body2" color={'darkgray'}>Please download the template related to each file, via clicking on the download template button, then upload it after filling it via the upload template button</Typography>
        </Grid>
        <Grid item md={12}>
          {pdfString.length > 0 && (
            <Grid container item md={12}>
              <Template  pdfString={pdfString} documentWidth={400} />
              <Grid container item md={8} spacing={4}>
            <Grid item md={6}>
              <Button fullWidth variant="contained">Download</Button>
            </Grid>
            <Grid item md={6}>
              <Button fullWidth onClick={handleOpen} variant="contained">
                Preview
              </Button>
            </Grid>
          </Grid>
          <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box display={'flex'} width={'50vw'}  height={'100vh'} margin={'auto'}  justifyContent={'center'} alignItems={'center'}>
        <Template pdfString={pdfString} />
        </Box>
      </Modal>
            </Grid>
          )}
        </Grid>
      </Grid>
      <Grid container item md={6} spacing={4}>
        <Grid  item md={12} >
        <SignatureCanvas   penColor='green'
        ref={(ref) => { sigPad = ref }}
    canvasProps={{className: 'sigPad'}} />
        </Grid>
        <Grid container item md={12} spacing={4}>
          <Grid  item md={6}>
          <Button onClick={clear} fullWidth variant="contained">Clear</Button>
          </Grid>
          <Grid item md={6}>
          <Button onClick={()=>handleAddSignature()} fullWidth variant="contained">Save</Button>
          </Grid>
        </Grid>
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
{
  /* <Grid item md={4}>
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
        </Grid> */
}
