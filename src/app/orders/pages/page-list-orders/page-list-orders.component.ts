import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {

  // creer la variable titleParent
  titleParent :string = 'Liste des commandes'
  //collection!:Order;
  collection$!: Observable<Order[]>


//transformer enum en tableau
states = Object.values(StateOrder)

changeState(item:Order, event: Event){
console.log(item, event)
const target = event.target as HTMLSelectElement
const state = target.value as StateOrder
console.log(state,'new etat')

// declencher une methode du service pour update
this.ordersService.changeState(item, state).subscribe(res=> {
console.log(res,'mon nouvel objet')
//mettre a jour notre objet cote front
// item =  res

Object.assign(item,res)

})
}



  // en-têtes du tableau de type array
  //faire passer headers au composant enfant
  public headers = [
     ];

    constructor(private ordersService: OrdersService,
      private router : Router) {
      // ici on déclenche sumUp
      // console.log(this.ordersService.sumUp(1, 2), 'fonction sumUp');

      //forcerle refresh pour etre sur qu'on a la derniere version
      //situation avec plusieurs utilisateur

      //this.ordersService.refreshCollection()

      this.collection$ = this.ordersService.collection;

      //remplace par pipe async
      //this.ordersService
        //  .collection
          //.subscribe((data) => {
     //     this.collection = data;
       //   console.log(this.collection); // attention de ne écrire cette ligne en dehors des {}, sinon undefined
       // });
    }

    ngOnInit(): void {}

//Remplacer par le pipe total
       //   total(val: number, coef:number, tva?: number): number{
       //console.log('fonction appele')
       // if(tva){
       // return val * coef * (1+tva/100)
       //   }
       //     return val * coef;
       //}

goToEdit(item:Order){
// rediriger vers orders/edit/item/id
//tester
this.router.navigate(['orders', 'edit', item.id ])

}

goToDelete(item:Order){
  ///faire appel au service
  this.ordersService.delete(item).subscribe();
 // this.router.navigate(['orders', 'delete', item.id ])
}
}
