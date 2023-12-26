import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import React,{FC, useState} from "react";
import {pdfjs, Document, Page} from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();
const App = () => {
  const [numPages, setNumPages] = useState(null);
  return (
    <Document file="https://test.com/sample.pdf" onLoadSuccess={(e) => setNumPages(e.numPages)}>
      {Array.from(new Array(numPages), (_el, index) => <Page key={`page_${index + 1}`} pageNumber={index + 1} width={980}/>)}
    </Document>
  )
}
export default App;