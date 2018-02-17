import {Country} from './country.model';

export class Address {
  street: string;
  city: string;
  postalCode: string;
  country: Country;
  constructor(street?: string, city?: string, postalCode?: string, country?: Country) {
    this.street = street;
    this.city = city;
    this.postalCode = postalCode;
    this.country = country;
  }
}
