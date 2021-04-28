import React, { useState } from 'react'
import CountryPage from '../CountryPage/CountryPage'

function BorderCountry() {
    const[country,setcountry] = useState([])


    return (
        <div>
                <CountryPage 
              name={country.name}
              flag={country.flag}
              nativeName={country.nativeName}
              population={country.population}
              region={country.region}
              subRegion={country.subregion}
              capital={country.capital}
              topLevelDomain={country.topLevelDomain}
              currencies={country.currencies}
              languages={country.languages}
              borderCountries={country.borders}/>
        </div>
    )
}

export default BorderCountry