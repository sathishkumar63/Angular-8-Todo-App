import { Directive, AfterContentInit, ElementRef} from '@angular/core';

@Directive({
  selector: '[appAutoFocus]'
})
export class AutoFocusDirective implements AfterContentInit {

  constructor(private el: ElementRef) { }

  ngAfterContentInit() {
    this.el.nativeElement.focus();
  }

}
