import React from 'react'
import classes from './countryCard.module.css'


function CountryCard(props) {


    return(
        <div className={classes.country}>
            <img src={props.flag} alt="Country flag"/>
            <div className={classes.countryInfo}>
            <span>{props.name}</span>
              <ul>
              <li>
              Population: {props.population}
              </li>
              <li>
              Region: {props.region}
              </li>
              <li>
              Capital: {props.capital}
              </li>
              </ul>
            </div>
        </div>
    )
}


export default CountryCard