import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { AngularFireModule } from "@angular/fire/compat";
import { RouterModule } from "@angular/router";
import { MealsService } from "./services/meals.service";

@NgModule({
    imports: [CommonModule, RouterModule, AngularFireModule],
    declarations: []
})
export class SharedModule {
    static forRoot(): ModuleWithProviders<SharedModule> {
        return {
            ngModule: SharedModule,
            providers: [MealsService]
        }
    }
}