import { NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/auth/shared/guards/auth.guard';

const ROUTES: Routes = [
  {
    path: 'meals',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./meals/meals.module').then((m) => m.MealsModule),
  },
  {
    path: 'schedule',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./schedule/schedule.module').then((m) => m.ScheduleModule),
  },
  {
    path: 'workouts',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./workouts/workout.module').then((m) => m.WorkoutsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
})
export class HealthModule {}
