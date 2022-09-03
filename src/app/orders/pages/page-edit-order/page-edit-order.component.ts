import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss']
})
export class PageEditOrderComponent implements OnInit {

// on va utiliser ActivatedRoute
item$!:Observable<Order>

constructor(
  private activatedRoute: ActivatedRoute,
  private ordersService: OrdersService,
  private router : Router
  ) {
  // quand le composant est créé, on vérifie l'url
  // récupérer l'order existant grâce à son id

  const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  //console.log(id,'je suis dans page edit')


  // appeler la méthode dans le service
 this.item$ =  this.ordersService.getItemById(id)
  // vérifier l'objet obtenu
}

  ngOnInit(): void {
  }


  onEdit(item : Order) {
    this.ordersService.update(item).subscribe(data => {
      this.router.navigate(["orders"]);
    });
  }



}
