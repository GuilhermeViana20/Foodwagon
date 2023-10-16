import { NgModule } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { DefaultComponent } from './layouts/default/default.component';
import { GuestComponent } from './layouts/guest/guest.component';

@NgModule({
  declarations: [
    DefaultComponent,
    GuestComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [],
  exports: [],
})
export class CoreModule {}
