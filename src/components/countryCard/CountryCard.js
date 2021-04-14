import React from 'react'
import classes from './countryCard.module.css'


function CountryCard(props) {


    const displayCountryPage = () => {
        console.log("huh")
    }


    return(
        <div className={classes.country} onClick={displayCountryPage}>
            <img src={props.flag} alt="Country flag"/>
            <div className={classes.countryInfo}>
            <span className={classes.countryName}>{props.name}</span>
              <ul className={classes.InfoList}>
              <li >
             <span style={{fontWeight:'600'}}> Population: </span>{props.population}
              </li>
              <li>
              <span style={{fontWeight:'600'}}> Region:  </span>{props.region}
              </li>
              <li>
              <span style={{fontWeight:'600'}}> Capital:</span> {props.capital}
              </li>
              </ul>
            </div>
        </div>
    )
}


export default CountryCard