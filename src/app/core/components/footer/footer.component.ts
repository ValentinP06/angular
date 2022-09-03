import { Component, Input, OnInit } from '@angular/core';
import { VersionService } from '../../version.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() data:any


  constructor(
    private versionService : VersionService)
    {
      console.log(this.data,'1er observale')
      this.versionService.data.subscribe(data =>{
        this.data=data;})

}

  ngOnInit(): void {

  }

}
