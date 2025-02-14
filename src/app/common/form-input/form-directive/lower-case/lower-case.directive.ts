import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[ngModel][appLowerCase]',
  standalone: true
})
export class LowerCaseDirective {

  @Input() appLowerCase = false;
  @Output() ngModelChange: EventEmitter<any> = new EventEmitter();
  value: any;

  constructor(private el: ElementRef) {
    
  }

  @HostListener('input', ['$event']) onInputChange($event: any) {
    // g($event);
    // console.log(this.appLowerCase);
    
    if (this.appLowerCase) {
      this.value = $event.target.value.toLowerCase();
      // console.log(this.value);
      this.el.nativeElement.value = this.value
      this.ngModelChange.emit(this.value);
    }
  }
}
