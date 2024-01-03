import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  fromEvent,
  map,
  pluck,
} from 'rxjs';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css'],
})
export class SearchInputComponent implements AfterViewInit {
  @ViewChild('input') inputElement: ElementRef;
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngAfterViewInit() {
    fromEvent(this.inputElement.nativeElement, 'keyup')
      .pipe(
        debounceTime(500),
        pluck('target', 'value'),
        distinctUntilChanged(),
        filter((value: string) => value.length > 3),
        map((value) => value)
      )
      .subscribe((value) => {
        this.search.emit(value);
      });
  }
}

/**
 * ViewChild('input') gives us access to the input element defined in the HTML file.
 * 'input' is a selector refers to the #input template reference variable we previously added to the input element in the HTML file.
 *
 * ngAfterViewInit is a lifecycle hook that is invoked after the view has been initialized.
 * In here, we set up all code that deals with the input element.
 * This ensures that the view has been initialized and we can access the input element, thereby avoiding any unnecessary errors later on
 *
 * The fromEvent operator is used to set up event listeners on a specific element.
 * In this case, we're interested in listening to the keyup event on the input element
 *
 * The debounceTime() operator helps us control the rate of user input.
 * We can decide to only get the value after the user has stopped typing for a specific amount of time - in this case, 500ms
 *
 * We use the pluck('target', 'value') to get the value property from the input object.
 * This is equivalent to input.target.value
 *
 * distinctUntilChanged() ensures that the current value is different from the last value.
 * Otherwise, it discards it.
 *
 * We use the filter() operator to check for and discard values that have fewer than 3 characters.
 *
 * The map operator returns the value as an Observable.
 * This allow us to subscribe to it, it which case the value can be sent over to the parent component using the Output event emitter we defined.
 */
