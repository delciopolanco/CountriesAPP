import { JsonProperty } from "./map-utils";

export class Country {
  @JsonProperty('name')
  public name: string;
  @JsonProperty('alpha3Code')
  code: string;
  @JsonProperty('capital')
  capital: string;
  @JsonProperty('flag')
  flag: string;
  @JsonProperty('region')
  region: string;
  @JsonProperty('population')
  population: number;

  constructor() {
    this.name = '';
    this.code = '';
    this.capital = '';
    this.flag = '';
    this.region = '';
    this.population = undefined;
  }
}
