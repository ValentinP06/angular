import { state } from '@angular/animations';
import { Directive, HostBinding, Input } from '@angular/core';
import { bufferToggle } from 'rxjs';

@Directive({
  selector: '[appState]'

})
export class StateDirective {

  //CREER LA PROPRIETE ETAT

  @Input() etat!:any
// acceder a l'attribut voulu dans l'ement html
  @HostBinding('class') tdClassName!:string;


  constructor() {
   console.log('depuis directive appstate')
  }

//declencher une seule fois
  ngOnInit(){
 console.log(this.etat, 'etat de ngoninit');
  }

//ngOnChanges()
//on utilise ngonchanges car est execute a chaque modifications
 ngOnChanges(){
  console.log(this.etat,'etat de ngonchanges')
  this.tdClassName = `state-${this.etat.toLowerCase()}`

}


}
