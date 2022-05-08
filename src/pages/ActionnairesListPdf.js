import React from 'react';
import jsPDF from 'jspdf';
import Logo from '../../src/images/download.png'

const ActionnairesListPdf = () => {
    pdfGenerate = () => {
        var doc = new jsPDF('portrait','px','a4','false')
        doc.addImage(Logo,'PNG',62,20,500,400)
        doc.save(actionnaires.pdf)
    }
    return (
        <div>
            jspdf
        </div>
    );
};

export default ActionnairesListPdf;