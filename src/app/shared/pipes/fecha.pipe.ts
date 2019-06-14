import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'fecha'
})
export class FechaPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    console.log('Transformando: ', value);
    return new DatePipe('en-US').transform(new Date(value), 'dd/MM/yyyy');
  }
}
