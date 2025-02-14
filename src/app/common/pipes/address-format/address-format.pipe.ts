import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chunk',
  standalone: true
})
export class ChunkPipe implements PipeTransform {
  transform(array: any[], size: number): any[] {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  }
}
