import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FizeSizePipe } from './file-size/fize-size.pipe';
import { StockCounterComponent } from './stock-inventory/components/stock-counter/stock-counter.component';
import { StockInventoryComponent } from './stock-inventory/containers/stock-inventory/stock-inventory.component';
import { StockInventoryModule } from './stock-inventory/stock-inventory.module';
import { CreditCardDirective } from './credit-card/credit-card.directive';

@NgModule({
  declarations: [
    AppComponent,
    FizeSizePipe,
    CreditCardDirective
  ],
  imports: [
    BrowserModule,
    StockInventoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
