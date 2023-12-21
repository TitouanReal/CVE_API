import { IsString } from "class-validator";
import { getCountryCode } from "./CountryCodeMap";
import { Location } from "./Location";

export class Cna {
    /**
     * CNA name
     */
    @IsString()
    partner: string;

    /**
     * Domains for exploits publishable by the CNA
     */
    @IsString()
    scope: string;

    /**
     * Type of organisation of the CNA
     */
    @IsString()
    organizationType: string;

    /**
     * Geographical informations about the CNA
     */
    location : Location;

    constructor(
        partner: string,
        scope: string,
        organizationType: string,
        country : string) {
        this.partner = partner;
        this.scope = scope;
        this.organizationType = organizationType;
        const countryId=getCountryCode(country);
        const location = new Location(countryId);
        this.location = location;
    }
}
