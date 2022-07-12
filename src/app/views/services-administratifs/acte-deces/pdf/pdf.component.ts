import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss']
})
export class PdfComponent implements OnInit {

  constructor() { }

  captureScreen(){
    let data =document.querySelector('.container')
    html2canvas(data as any).then(canvas =>{
      var imgWidth = 210
      var pageHeight =295
      var imgHeight = canvas.height * imgWidth / canvas.width
      var height = imgHeight
      const contentDataURL = canvas.toDataURL('image/png')
      let pdfData = new jsPDF('p','mm','a4')
      var position = 0
      pdfData.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      window.open(URL.createObjectURL(pdfData.output("blob")))

    })
  }
  ngOnInit(): void {
  }
}
