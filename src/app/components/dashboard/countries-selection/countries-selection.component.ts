import { Country } from '../../../entities/country';
import { Component } from '@angular/core';
import { GlobalEventManagerService } from '../../../services/global-event-manager.service';
import { FormsModule } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-countries',
  templateUrl: './countries-selection.component.html',
  styleUrls: ['./countries-selection.component.css']
})

export class CountriesSelectionComponent {
  countryList: Country[] = [
    {
      name: 'Seleccione',
      code: '',
      capital: '',
      population: 0,
      flag: '',
      region: ''
    },
    {
      name: 'Rep Dominicana',
      code: 'DOM',
      capital: '',
      population: 0,
      flag: '',
      region: ''
    },
    {
      name: 'Puerto Rico',
      code: 'PRI',
      capital: '',
      population: 0,
      flag: '',
      region: ''
    }, {
      name: 'Venezuela',
      code: 'VEN',
      capital: '',
      population: 0,
      flag: '',
      region: ''
    }, {
      name: 'Estados Unidos',
      code: 'USA',
      capital: '',
      population: 0,
      flag: '',
      region: ''
    }, {
      name: 'Irlanda',
      code: 'IRL',
      capital: '',
      population: 0,
      flag: '',
      region: ''
    }, {
      name: 'Rep Dominicana',
      code: 'DOM',
      capital: '',
      population: 0,
      flag: '',
      region: ''
    }
  ];
  selectedCountry: string = '';

  constructor(
    private globalEventManager: GlobalEventManagerService,
    private router: Router) {
    this.router.events.filter((event) => event instanceof NavigationEnd).subscribe((event) => {
      this.selectedCountry = '';
      this.globalEventManager.changeCountries(this.selectedCountry);
    });
  }


  change(event) {
    this.globalEventManager.changeCountries(this.selectedCountry);
  }
}
