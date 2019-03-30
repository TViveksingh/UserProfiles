import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
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
import { SidenavComponent } from './landingpage/sidenav/sidenav.component';
import { MaincontentComponent } from './landingpage/maincontent/maincontent.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactusComponent,
    HeaderComponent,
    FooterComponent,
    ContainerComponent,
    SidenavComponent,
    MaincontentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
