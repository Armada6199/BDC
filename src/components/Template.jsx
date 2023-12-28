import { useCallback, useEffect, useState } from 'react';
import { useResizeObserver } from '@wojtekmaj/react-hooks';
import { pdfjs, Document, Page } from 'react-pdf';
import { Grid, Typography } from '@mui/material';
import Loader from './Loader';
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
// import 'react-pdf/dist/esm/Page/TextLayer.css';

// import './Sample.css';

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/build/pdf.worker.min.js',
//   import.meta.url,
// ).toString();



const resizeObserverOptions = {};

const maxWidth = 950;


export default function Template({pdfString}) {

  useEffect(() => {
    console.log(pdfString)
    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  });
  const [numPages, setNumPages] = useState();
  const [containerRef, setContainerRef] = useState(null);
  const [containerWidth, setContainerWidth] = useState();

  const onResize = useCallback((entries) => {
    const [entry] = entries;

    if (entry) {
      setContainerWidth(entry.contentRect.width);
    }
  }, []);

  useResizeObserver(containerRef, resizeObserverOptions, onResize);

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  return (
    <Grid ref={setContainerRef} container item md={12} justifyContent={'center'}>
          <Document  file={`data:application/pdf;base64,${pdfString}`} onLoadSuccess={onDocumentLoadSuccess} >
              <Page
                pageNumber={ 1}
                width={containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth}
              />

          </Document>
          
    </Grid>
  );
}