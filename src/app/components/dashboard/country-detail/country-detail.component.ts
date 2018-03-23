import { Component, OnInit } from '@angular/core';
import { Country } from '@entities/country';
import { GlobalEventManagerService } from '@services/global-event-manager.service';
import { CountriesService } from '@services/countries.service';


@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent {
  loader: Boolean = false;
  countryModel: Country = new Country();
  companyOptions: string;

  constructor(
    private globalEventManager: GlobalEventManagerService,
    private contriesService: CountriesService) {
    this.globalEventManager.countryEmitter.subscribe(this.getCountry);
  }

  getCountry = (country: string) => {
    if (!country) {
      this.countryModel = new Country();
      return;
    }

    this.loader = true;
    this.contriesService.getCountries(country).subscribe(
      products => {
        if (products) {
          this.countryModel = products;
          this.loader = false;
        }
        console.log(products);
      }, error => {
        this.loader = false;
        console.error(error);
      });
  }
}
