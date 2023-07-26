import React from 'react';

const PDFViewer = ({ pdfUrl }) => {
    const handleOpenPDF = () => {
      window.open(pdfUrl, '_blank');
    };
  
    return (
      <button onClick={handleOpenPDF}>Open PDF</button>
    );
  };
  
  export default PDFViewer;
  