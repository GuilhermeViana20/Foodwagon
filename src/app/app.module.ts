import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultComponent } from './core/layouts/default/default.component';
import { GuestComponent } from './core/layouts/guest/guest.component';
import { LoginComponent } from './features/login/login.component';
import { HomeComponent } from './features/home/home.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { GuestContentComponent } from './features/guest-content/guest-content.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    GuestComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    GuestContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
