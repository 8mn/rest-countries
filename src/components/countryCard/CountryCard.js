import React from 'react'
import classes from './countryCard.module.css'
// import {Link,Switch,Route, Router} from 'react-router-dom'
// import CountryPage from '../CountryPage'


function CountryCard(props) {


    const displayCountryPage = () => {
        console.log(props.name)
        // <Switch>
        //     <Route path=`/${props.name}`>

        //     </Route>
        // </Switch>
        
    }


    return(
        <div className={classes.country} onClick={displayCountryPage}>
            <img src={props.flag} alt={`${props.name}flag`} className={classes.flag}/>
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