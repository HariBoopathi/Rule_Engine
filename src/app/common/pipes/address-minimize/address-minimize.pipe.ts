import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addressMinimize',
  standalone: true
})
export class AddressMinimizePipe implements PipeTransform {


  transform(address: any, type?: any): string[] {
    const groupedLines = [];
    if (type === 'format1') {
      const lines = [
        address.line1,
        address.line2,
        address.line3,
        address.cityTown,
        address.provinceState,
        address.countryDescription
      ].filter(line => line); // Filter out any undefined or empty lines

      // Grouping the first two and next two lines

      for (let i = 0; i < lines.length; i += 2) {
        groupedLines.push(lines.slice(i, i + 2).join(', ')); // Join pairs with a comma
      }
    }
    else if (type === 'format2') {
      const lines = [
        address.line1,
        address.postBoxNoLocation,
        address.provinceDescription,
        address.islandDescription,
        address.tikinaDescription,
        address.cityTown
      ].filter(line => line); // Filter out any undefined or empty lines

      // Grouping the first two and next two lines

      for (let i = 0; i < lines.length; i += 2) {
        groupedLines.push(lines.slice(i, i + 2).join(', ')); // Join pairs with a comma
      }
    }
    return groupedLines;
  }

}
