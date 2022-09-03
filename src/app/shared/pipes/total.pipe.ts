import { Pipe, PipeTransform } from '@angular/core';

//decorateur
@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: any, tva?:boolean): number {
    // ici value = valeur argument note a gauche
    //console.log(value,'depuis pipestotal')
    //ici args correspond aux autres arguments
    //console.log(args,'args depuis pipestotal')

    //return null;
    console.log('instancié')
    if(tva){
      return value.totalTTC();
    }
    return value.totalHT();

  }


}
