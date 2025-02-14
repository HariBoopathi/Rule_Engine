import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'messageFilter',
  standalone: true
})
export class MessageFilterPipe implements PipeTransform {

  transform(items: any, filter: any): any {
    const messageItems = items.filter((item: any) => item.errorMsgType === filter);

    return messageItems;
  }

}
