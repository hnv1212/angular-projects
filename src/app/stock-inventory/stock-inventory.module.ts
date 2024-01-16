import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockInventoryComponent } from './containers/stock-inventory/stock-inventory.component';

@NgModule({
  declarations: [StockInventoryComponent],
  imports: [CommonModule],
  exports: [StockInventoryComponent],
})
export class StockInventoryModule {}
