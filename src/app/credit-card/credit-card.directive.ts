import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[credit-card]',
})
export class CreditCardDirective {
  @HostBinding('style.border') border!: string;

  constructor(private element: ElementRef) {
    console.log('element: ', this.element);
  }

  @HostListener('input', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;

    // replace all whitespaces as blank
    let trimmed = input.value.replace(/\s+/g, '');

    if (trimmed.length > 16) {
      trimmed = trimmed.substr(0, 16);
    }

    let numbers: string[] = [];
    for (let i = 0; i < trimmed.length; i += 4) {
      numbers.push(trimmed.substr(i, 4));
    }

    input.value = numbers.join(' ');

    this.border = '';
    // check if trimmed contain only digits or not
    if (/[^\d]+/.test(trimmed)) {
      this.border = '1px solid red';
    }
  }
}
