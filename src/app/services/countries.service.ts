import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '@env/environment';
import { InvocationService } from '@services/invocation.service';
import { Country } from '@entities/country';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CountriesService {
  private url: String;
  constructor(private http: Http, private invocationService: InvocationService) {
    this.url = environment.api;
  }

  getCountries = (country: String): Observable<Country> => {
    const route = country ? `${this.url}/alpha/${country}` : `${this.url}/all`;
    return this.invocationService.invokeBackendService(this.invocationService.GET, route);
  }

}
