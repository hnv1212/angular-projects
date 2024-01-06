import {
  AfterContentInit,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { User } from './auth-form/auth-form.interface';
import { AuthFormComponent } from './auth-form/auth-form.component';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <example-one></example-one>
      <example-two></example-two>
      <example-three></example-three>
    </div>
  `,
})
export class AppComponent {

}
