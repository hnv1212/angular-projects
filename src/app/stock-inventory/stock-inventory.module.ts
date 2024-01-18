import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockInventoryComponent } from './containers/stock-inventory/stock-inventory.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StockBranchComponent } from './components/stock-branch/stock-branch.component';
import { StockProductsComponent } from './components/stock-products/stock-products.component';
import { StockSelectorComponent } from './components/stock-selector/stock-selector.component';
import { StockInventoryService } from './services/stock-inventory.service';
import { HttpModule } from '@angular/http';
import { StockCounterComponent } from './components/stock-counter/stock-counter.component';

@NgModule({
  declarations: [
    StockInventoryComponent,
    StockBranchComponent,
    StockProductsComponent,
    StockSelectorComponent,
    StockCounterComponent,
  ],
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    // HttpModule
  ],
  providers: [
    // StockInventoryService
  ],
  exports: [StockInventoryComponent],
})
export class StockInventoryModule {}
