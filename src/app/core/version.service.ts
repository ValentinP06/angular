import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VersionService {

  constructor() { }

  //creer un observable data

  data = new BehaviorSubject<number>(0)

  //creer une methode increment()

  increment(){
    
       this.data.next(this.data.value + 1)

  }
}

