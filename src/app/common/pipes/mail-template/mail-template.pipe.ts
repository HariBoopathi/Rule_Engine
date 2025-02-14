import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mailTemplate',
  standalone: true
})
export class MailTemplatePipe implements PipeTransform {

  transform(value:any) {
    console.log(value);
    
    const details = value.match(/Application Ref No:.*|Employer Name:.*|Employer Reference No:.*|Date:.*|Primary Applicant’s Name:.*|Primary Applicant’s Passport No:.*|No of Dependants:.*|Dependant\(s\) Name:.*/g);
    // console.log(details);
    
  }

}
