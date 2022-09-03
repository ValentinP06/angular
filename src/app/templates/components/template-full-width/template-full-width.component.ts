import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-full-width',
  templateUrl: './template-full-width.component.html',
  styleUrls: ['./template-full-width.component.scss']
})
export class TemplateFullWidthComponent implements OnInit {

  @Input() titleEnfant :string = "page list orders";
  constructor() {

console.log(this.titleEnfant,'titlenenfant')

  }

  ngOnInit(): void {
      //on obtient bien le titre
    console.log(this.titleEnfant,'titlenenfant depuis ngoninit')


  }

}
