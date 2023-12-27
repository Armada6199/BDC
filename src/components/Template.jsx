import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import React, { FC, useEffect, useState } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import "../assets/styles.css";
import { Box } from "@mui/material";
import {glassmorphismStyle} from '../assets/styles'
const Template = ({ pdfString,documentWidth,documentHeight }) => {
  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  });
  return (
    <Box >
    <Document
      file={`data:application/pdf;base64,${pdfString}`}
    >
        <Page  pageNumber={1}  width={documentWidth?documentWidth:500}  />
    </Document>
    </Box>
  );
};
export default Template;
