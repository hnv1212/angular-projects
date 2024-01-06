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
      <ng-container [ngTemplateOutlet]="tmpl"></ng-container>
      <template #tmpl> Todd Motto : England, UK </template>
    </div>
  `,
})
export class AppComponent {}
