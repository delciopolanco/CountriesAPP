import { Component } from '@angular/core';
import { GlobalEventManagerService } from '../services/global-event-manager.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})

export class CountriesComponent {

  constructor(
    private globalEventManager: GlobalEventManagerService) { }


  change(event) {
    console.log('Se selecciona el pais: ' + event.target.value);
    this.globalEventManager.changeCountries(event.target.value);
  }
}
