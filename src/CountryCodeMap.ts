type CountryCodeMap = {
    [key: string]: string;
};

export function getCountryCode(country: string): string | undefined {
    const countryCodeMap: CountryCodeMap = {
        "UK": "GB",
        "India": "IN",
        "USA": "US",
        "Switzerland": "CH",
        "Netherlands": "NL",
        "Israel": "IL",
        "Spain": "ES",
        "China": "CN",
        "Taiwan": "TW",
        "Australia": "AU",
        "Sweden": "SE",
        "Germany": "DE",
        "Romania": "RO",
        "Canada": "CA",
        "Japan": "JP",
        "Poland": "PL",
        "Austria": "AT",
        "France": "FR",
        "Ireland": "IE",
        "Slovak Republic": "SK",
        "Colombia": "CO",
        "New Zealand": "NZ",
        "Vietnam": "VN",
        "Brazil": "BR",
        "Singapore": "SG",
        "South Korea": "KR",
        "Czech Republic": "CZ",
        "Russia": "RU",
        "Finland": "FI",
        "Belgium": "BE",
        "Norway": "NO",
        "Estonia": "EE",
        "Türkiye": "TR",
        "Denmark": "DK",
        "South Africa": "ZA",
        "Chile": "CL",
        "Latvia": "LV",
        "No country affiliation": "ZZ", //Correspond to a point at 0,0 in coordinates
    };

    return countryCodeMap[country];
}


//const countryName = "Germany";
//const countryCode = getCountryCode(countryName);
//
//if (countryCode) {
//    console.log(`Country: ${countryName}, Country Code: ${countryCode}`);
//} else {
//    console.log(`Country code not found for ${countryName}`);
//}