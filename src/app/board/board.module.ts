import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BoardComponent } from './components/board.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../auth/services/authGuard.service';
import { BoardService } from './services/board.service';
import { ColumnsService } from '../shared/services/columns.service';
import { TopbarModule } from '../shared/modules/topbar/topbar.module';

const routes: Routes = [
  {
    path: 'boards/:boardId',
    component: BoardComponent,
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), TopbarModule],
  declarations: [BoardComponent],
  providers: [BoardService, ColumnsService],
})
export class BoardModule {}
