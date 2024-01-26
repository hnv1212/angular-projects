import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { RouterModule } from '@angular/router';
import { MealsService } from './services/meals.service';
import { ListItemComponent } from './components/list-item/list-item.component';
import { WorkoutsService } from './services/workouts.service';

@NgModule({
  imports: [CommonModule, RouterModule, AngularFireModule],
  declarations: [ListItemComponent],
  exports: [ListItemComponent],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [MealsService, WorkoutsService],
    };
  }
}
