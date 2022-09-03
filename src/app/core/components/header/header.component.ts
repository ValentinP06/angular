import { Component, Input, OnInit } from '@angular/core';
import { VersionService } from '../../version.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() data:any


  constructor(
    private versionService : VersionService)
    {
      console.log(this.data,'1er observale')
      this.versionService.data.subscribe(data =>{
        this.data=data;})

}


  ngOnInit(): void {


    }  }
