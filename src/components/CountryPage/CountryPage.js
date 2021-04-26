import React from 'react'
import Header from '../header/Header'
import { BiArrowBack } from "react-icons/bi";
import classes from './CountryPage.module.css'

function CountryPage(props) {
    return (
        <div>
            <Header />
            <div className={classes.container}>
                <button><BiArrowBack /> 
                <span> Back </span></button>
                <div className={classes.CountryInfo}>
                    <img src={props.flag} alt="Country flag"/>
                    <span className={classes.info}>
                        <h1>{props.name}</h1>
                        <ul className={classes.infoList}>
                            <li><span> Native Name: </span>{props.nativeName}</li>
                            <li><span> population: </span>{props.population}</li>
                            <li><span> region: </span>{props.region}</li>
                            <li><span> Sub Region: </span>{props.subRegion}</li>
                            <li><span> Capital: </span>{props.capital}</li>
                            <li><span> Top Level Domain: </span>{props.topLevelDomain}</li>
                            <li><span> Currencies: </span>{props.currencies.map(currency => <> {currency.name} </>)}</li>
                            <li><span> Languages: </span>{props.languages.map(lang => <> {lang.name},</>)}</li>
                        </ul>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CountryPage
