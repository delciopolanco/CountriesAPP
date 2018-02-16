import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
/* Components */
import { AppComponent } from './app.component';
import { CountriesComponent } from './countries/countries.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
/* Services */
import { GlobalEventManagerService } from './services/global-event-manager.service';
import { InvocationService } from './services/invocation.service';
import { CountriesService } from './services/countries.service';



@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    CountryDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [
    GlobalEventManagerService,
    InvocationService,
    CountriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
