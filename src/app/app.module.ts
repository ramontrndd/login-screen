import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NgxUiLoaderConfig, NgxUiLoaderModule, PB_DIRECTION, SPINNER } from 'ngx-ui-loader';

import { MaterialModule } from '../shared/material-module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegisterComponent } from './pages/register/register.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  "bgsColor": "#4d6eff",
  "bgsOpacity": 0.5,
  "bgsPosition": "top-right",
  "bgsSize": 60,
  "bgsType": "three-strings",
  "blur": 3,
  "delay": 0,
  "fastFadeOut": true,
  "fgsColor": "#4d6eff",
  "fgsPosition": "center-center",
  "fgsSize": 100,
  "fgsType": "ball-spin-fade-rotating",
  "gap": 24,
  "logoPosition": "center-center",
  "logoSize": 80,
  "logoUrl": "",
  "masterLoaderId": "master",
  "overlayBorderRadius": "0",
  "overlayColor": "rgba(40, 40, 40, 0.8)",
  "pbColor": "#4d6eff",
  "pbDirection": "ltr",
  "pbThickness": 3,
  "hasProgressBar": true,
  "text": "Carregando...",
  "textColor": "#4d6eff",
  "textPosition": "center-center",
  "maxTime": -1,
  "minTime": 300
}




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    ForgotPasswordComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig, ),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule

  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

