import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './shared-module/materials/materials.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './landingpage/header/header.component';
import { FooterComponent } from './landingpage/footer/footer.component';
import { ContainerComponent } from './landingpage/container/container.component';
import { MaincontentComponent } from './landingpage/maincontent/maincontent.component';
import { LoginComponent } from './shared/login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                AboutComponent,
                ContactusComponent,
                HeaderComponent,
                FooterComponent,
                ContainerComponent,
                MaincontentComponent,
                LoginComponent,
                NotFoundComponent
            ],
            imports: [
                BrowserModule,
                HttpClientModule,
                AppRoutingModule,
                BrowserAnimationsModule,
                MaterialsModule,
                FlexLayoutModule,
                FormsModule,
                ReactiveFormsModule
            ],
            providers: [],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map