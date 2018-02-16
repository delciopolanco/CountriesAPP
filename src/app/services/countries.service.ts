import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import { Country } from '../entities/country';
import { InvocationService } from '../services/invocation.service';

@Injectable()
export class CountriesService {
  private url: String;
  constructor(private http: Http, private invocationService: InvocationService) {
    this.url = environment.api;
  }

  getCountries = (country: String): Promise<Country> => {
    const route = country ? `${this.url}/alpha/${country}` : `${this.url}/all`;
    return this.invocationService.invokeBackendService(this.invocationService.GET, route);
  }

}
