import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss']
})
export class FormOrderComponent implements OnInit {

  public states = Object.values(StateOrder)

@Input()
init!:Order;

profileForm!:FormGroup;


@Output() submitted = new EventEmitter <Order>();

  constructor(private fb:FormBuilder) {
    console.log(this.init)
   }

  ngOnInit(): void {
    console.log(this.init)

    this.profileForm =this.fb.group({
      id:[this.init.id],
      typePresta:[this.init.typePresta, Validators.required],
      client:[this.init.client],
      nbJours:[this.init.nbJours],
      tjmHt:[this.init.tjmHt],
      tva:[this.init.tva],
      state:[this.init.state],
      comment:[this.init.comment],
     })
  }

  onSubmit(){
  //  console.log('validé')
    console.log(this.profileForm.value)
    //on ne faitpas d'appel au service directement
    // quelle methode tu vas appeler???
    this.submitted.emit(this.profileForm.value)
  }

}
