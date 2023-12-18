import { Grid,Button } from '@mui/material'
import React from 'react'

function StepperNavigationButtons({handleRest,handleBack}) {
  return (
    <Grid container item md={12}>
    <Grid item md={4}>
      <Button
        sx={{ width: "100%" }}
        onClick={handleRest}
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
  )
}

export default StepperNavigationButtons