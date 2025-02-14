import { Pipe, PipeTransform } from '@angular/core';
import { format, isMatch, parse, parseISO } from 'date-fns';
import { AppSettingsService } from '../../services/app-settings/app-settings.service';

@Pipe({
  name: 'appDate',
  standalone: true
})
export class AppDatePipe implements PipeTransform {
  constructor(public appSetting: AppSettingsService) {}

  transform(value: any, returnformat?: string, xformat?: string): any {
    if (!value) {
      return '';
    }

    let parse = parseISO(value);
    
    if(returnformat){
      return format(parse, returnformat);
    }

    return format(parse, this.appSetting.environment.dateViewFormat);
    
  }
}

