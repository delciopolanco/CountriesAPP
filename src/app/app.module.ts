import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
/* Components */
import { AppComponent } from './app.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CountriesSelectionComponent } from './components/dashboard/countries-selection/countries-selection.component';
import { CountryDetailComponent } from './components/dashboard/country-detail/country-detail.component';

import { HomeComponent } from './components/home/home.component';
/* Services */
import { GlobalEventManagerService } from './services/global-event-manager.service';
import { InvocationService } from './services/invocation.service';
import { CountriesService } from './services/countries.service';




@NgModule({
  declarations: [
    AppComponent,
    CountriesSelectionComponent,
    CountryDetailComponent,
    HomeComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'Home', pathMatch: 'full'
      },
      {
        path: 'Home', component: HomeComponent
      },
      {
        path: 'Dashboard', component: DashboardComponent
      }
    ])
  ],
  providers: [
    GlobalEventManagerService,
    InvocationService,
    CountriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
