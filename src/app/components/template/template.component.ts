import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import{ jsPDF } from 'jspdf';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  profile_photo:string = "../../../assets/images/Arsad - My Profile Photo2.1.0.png";

  constructor() { }

  ngOnInit(): void {
  }


   // jsPDF.......
  // @ViewChild('cvtemplate', {static: false}) el!: ElementRef;

  // public downloadAsPDF() {

  //   // const pdf = new jsPDF();
  //   const pdf = new jsPDF('p', 'pt', 'a4');

  //   pdf.html(this.el.nativeElement, {
  //       callback: (pdf) => {
  //           pdf.save("My Resume.pdf");
  //       }
  //   })

  // }


  @ViewChild('cvtemplate', {static: false}) el!: ElementRef;

  public downloadAsPDF() {
    // const doc = new jsPDF(orientation, unit, format, compress);
    const pdf = new jsPDF('p', 'px', [945, 1337]);
    // const pdf = new jsPDF('p', 'pt', 'a4');

    // pdf.setFont("Ubuntu");
    // pdf.addPage([945,945]);
    // pdf.setPage(1);

    // Optional - set properties on the document
    pdf.setProperties({
      title: 'Title',
      subject: 'This is the subject',
      author: 'Author Name',
      keywords: 'generated, javascript, web 2.0, ajax',
      creator: 'Creator Name'
    });

    // img.src='../../../assets/images/Arsad - My Profile Photo2.1.0.png';

    pdf.html(this.el.nativeElement, {
      callback: (pdf) => {
        pdf.save("My Resume.pdf");
      }
    });
  }

}
