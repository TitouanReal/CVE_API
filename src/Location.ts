import {CountryData, getCountryDetails} from './CountryData';

export class Location {
    country: string;
    countryId: string;
    latitude: number;
    longitude: number;

    constructor(countryId: string) {
        this.countryId = countryId;
        const tmp=getCountryDetails(countryId);
        this.country = tmp.country;
        this.latitude=tmp.latitude;
        this.longitude=tmp.longitude;
    }
}
