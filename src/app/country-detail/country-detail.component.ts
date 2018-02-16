import { Component, OnInit } from '@angular/core';
import { GlobalEventManagerService } from '../services/global-event-manager.service';
import { CountriesService } from '../services/countries.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent {

  constructor(
    private globalEventManager: GlobalEventManagerService,
    private contriesService: CountriesService) {
    this.globalEventManager.countryEmitter.subscribe(this.getCountry);
  }

  getCountry = (country: string) => {
    if (country) {
      this.contriesService.getCountries(country).then(result => {
        if (result) {
         // this.categories = result.List;
         // this.loading = false;
        }
      }).catch(error => {
        console.log(error);
      });

    }
  }

}
