import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CurrencyPipe } from '@angular/common';

import { MatDialogModule } from '@angular/material/dialog';

import { register } from 'swiper/element/bundle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { GoodComponent, LocalCurrencyPipe } from './good/good.component';
import { GoodModalComponent } from './good-modal/good-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

register();

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    GoodComponent,
    GoodModalComponent,
  ],
  imports: [BrowserModule, MatDialogModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [CurrencyPipe, LocalCurrencyPipe],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
