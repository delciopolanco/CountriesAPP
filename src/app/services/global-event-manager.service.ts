import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class GlobalEventManagerService {

  private countries: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public countryEmitter: Observable<string> = this.countries.asObservable();

  changeCountries(country: string) {
    this.countries.next(country);
  }

}
