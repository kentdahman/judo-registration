import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CustomFormsModule } from './custom-forms/custom-forms.module';
import { RegistrationComponent } from './registration/registration.component';
import { platformBrowserDynamic } from '../../node_modules/@angular/platform-browser-dynamic';
import { ErrorMatcherComponent } from './error-matcher/error-matcher.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    ErrorMatcherComponent
  ],
  imports: [
    BrowserModule,
    CustomFormsModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
