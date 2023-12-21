type CountryCodeMap = {
    [key: string]: string;
};

export function getCountryCode(country: string): string | undefined {
    const countryCodeMap: CountryCodeMap = {
        "United Kingdom": "UK",
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
        "SlovakRepublic": "SK",
        "Colombia": "CO",
        "NewZealand": "NZ",
        "Vietnam": "VN",
        "Brazil": "BR",
        "Singapore": "SG",
        "SouthKorea": "KR",
        "CzechRepublic": "CZ",
        "Russia": "RU",
        "Finland": "FI",
        "Belgium": "BE",
        "Norway": "NO",
        "Estonia": "EE",
        "Türkiye": "TR",
        "Denmark": "DK",
        "SouthAfrica": "ZA",
        "Chile": "CL",
        "Latvia": "LV",
        "Nocountryaffiliation": "", 
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