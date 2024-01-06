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
      <div #entry></div>
      <template #tmpl let-name let-location="location">
        {{ name }} : {{ location }}
      </template>
    </div>
  `,
})
export class AppComponent implements AfterContentInit {
  @ViewChild('tmpl') tmpl: TemplateRef<any>;
  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;

  ngAfterContentInit(): void {
    this.entry.createEmbeddedView(this.tmpl, {
      $implicit: 'Todd Motto',
      location: 'England, UK',
    });
  }
}
