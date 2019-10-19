import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], search: any): any {
    if (search === "" || search === undefined || search === null) {
      return value;
    }
    return value.filter(obj => obj.titre.includes(search) || obj.description.includes(search));
  }
}


