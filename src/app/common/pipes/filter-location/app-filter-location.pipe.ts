import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appFilterLocation',
  standalone: true
})
export class AppFilterLocationPipe implements PipeTransform {
  transform(items: any[], filter: any): any[] {
    if (!filter) {
      return items;
    }

    // Check if items is an array
    if (!Array.isArray(items)) {
      return items;
    }

    const filterKeys = Object.keys(filter);

    // If the filter value for the first key is 0, return the original items
    if (filter[filterKeys[0]] === 0) {
      return items;
    }

    return items.filter(item =>
      filterKeys.some(keyName =>
        new RegExp(filter[keyName], 'gi').test(item[keyName]) || filter[keyName] === ''
      )
    );
  }
}
