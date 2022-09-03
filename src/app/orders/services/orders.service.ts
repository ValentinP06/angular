import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  BehaviorSubject, map, Observable, tap } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

 // urlAPI
  private urlApi = environment.urlApi;

  //private collection$!: Observable<Order[]>;

 // collection$ devient un observable chaud !
 private collection$ : BehaviorSubject<Order[]> = new BehaviorSubject<Order[]>([])

  constructor(private http: HttpClient) {

    // this.collection = this.http.get<Order[]>(this.urlApi +`/orders`).pipe(
    //   map(tab=>{
    //     return tab.map(obj=>{
    //       return new Order(obj);
    //     })
    //   })
    // );
    this.refreshCollection();
  }

  // refreshColletion()
  refreshCollection(){
    this.http
      .get<Order[]>(`${this.urlApi}/orders`)
      .pipe(
        map((tab) => {
          return tab.map((obj) => {
            return new Order(obj);
          });
        })
      )
      .subscribe((data) => {
        // ici on va passer data à l'observable chaud this.collection$
        this.collection$.next(data)
      });
  }



  // on place http.get
  // on souscrit directement à notre observable chaud avec.suscribe
  //




  //on va appeller cette fonction this.orderService.collection
  get collection(){
    this.refreshCollection();
    return this.collection$;
  }


  // set collection(col : Observable<Order[]>){
  //   //this.collection$ = col
  // }



  //sumUp(a:number,b:number){
  //  return a +b;
  //}
  //getData(){
  //  return this.http.get<Order[]>('http://localhost:4000/orders');

  //}

  // changeState
  changeState(item: Order, state: StateOrder):Observable<Order> {
    // créer un nouvel objet
    const obj = new Order(item);
    // modifier l'état avec la nouvelle valeur
    obj.state = state;
    // déclencher update()
    return this.update(obj);
  }

  update(obj: Order):Observable<Order> {
    // appel http
    console.log(obj,'depuis order ervice');

    return this.http.put<Order>(`${this.urlApi}/orders/${obj.id}`, obj);
  }

add(item:Order):Observable <Order>{
// this.http.post(url,item)
console.log(' post marche ')
return this.http.post<Order>(`${this.urlApi}/orders` ,item)
}

//creer methode getItemById(id)
// this.http.get(url/id)
getItemById(id:number):Observable<Order>{
  return this.http.get<Order>(`${this.urlApi}/orders/${id}`)
}

delete(item: Order): Observable<any> {
  console.log('depuis service delete');
  return this.http.delete<Order>(`${this.urlApi}/orders/${item.id}`).pipe(
    tap(()=>{
        // refreshCollection
        this.refreshCollection()
    })
  );
}
}
