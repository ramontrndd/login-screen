import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CookieService } from 'ngx-cookie-service';
import { NgxUiLoaderConfig, NgxUiLoaderModule } from 'ngx-ui-loader';

import { MaterialModule } from '../shared/material-module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ConfirmationComponent } from './dialog/confirmation/confirmation.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { FullComponent } from './layout/full/full.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { RegisterComponent } from './pages/register/register.component';
import { tokenInterceptorInterceptor } from './services/token-interceptor.interceptor';


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
    RegisterComponent,
    ForgotPasswordComponent,
    HomeComponent,
    DashboardComponent,
    FullComponent,
    ConfirmationComponent,
    ChangePasswordComponent

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
    provideAnimationsAsync(),
    [CookieService],
    HttpClientModule, {
      provide: HTTP_INTERCEPTORS,
      useClass: tokenInterceptorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

