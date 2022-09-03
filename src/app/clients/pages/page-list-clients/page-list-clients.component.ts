import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StateClient } from 'src/app/core/enums/state-client';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})

export class PageListClientsComponent implements OnInit {

  titleParent: string = "Liste des clients";

  collection$! : Observable<Client[]>;
  item$!:Observable<Client>


  public headers = [
    'Action',
    'Name',
    'TotalCaHT',
    'Commentaire',
    'State'
  ];

  constructor(private clientsService : ClientsService,
    private router : Router) {

    this.collection$ = this.clientsService.collection;
  }

  states = Object.values(StateClient)

  changeState(item: Client, event : Event) {
    const target = event.target as HTMLSelectElement;
    const state = target.value as StateClient;
    console.log(state);
    this.clientsService.changeState(item, state).subscribe(response => {
      console.log(response);
      Object.assign(item, response);
    });
  }

  ngOnInit(): void {
  }

  goToEdit(item:Client){
    // rediriger vers orders/edit/item/id
    //tester
    this.router.navigate(['clients', 'edit', item.id ])

    }

    goToDelete(item:Client){
      ///faire appel au service
      this.clientsService.delete(item).subscribe();
     // this.router.navigate(['orders', 'delete', item.id ])
    }
    }

