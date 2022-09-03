import { Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { VersionService } from '../../version.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

@Input() data:any

  constructor(
    private versionService : VersionService)
    {
      console.log(this.data,'1er observale')
      this.versionService.data.subscribe(data =>{
      this.data=data;})



    }

  onAdd(){
    // ici on déclenche incr
    this.versionService.increment()
    console.log('fonction incr qui marche',this.data
    )}

  ngOnInit(): void {
  }

}
