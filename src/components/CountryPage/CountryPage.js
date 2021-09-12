import React from 'react'
import Header from '../header/Header'
import { BiArrowBack } from "react-icons/bi";
import classes from './CountryPage.module.css'
import {Link
} from "react-router-dom"


function CountryPage(props) {
    return (
			<div>
				<Header />
				{console.log(props.country)}
				<div className={classes.container}>
					<Link to="/">
						<button className={classes.backBtn}>
							<BiArrowBack />
							<span> Back </span>
						</button>
					</Link>
					<div className={classes.CountryInfo}>
						<img src={props.flag} alt="Country flag" />
						<span className={classes.info}>
							<h1>{props.name}</h1>
							<ul className={classes.infoList}>
								<li>
									<span> Native Name: </span>
									{props.nativeName}
								</li>
								<li>
									<span> population: </span>
									{props.population}
								</li>
								<li>
									<span> region: </span>
									{props.region}
								</li>
								<li>
									<span> Sub Region: </span>
									{props.subRegion}
								</li>
								<li>
									<span> Capital: </span>
									{props.capital}
								</li>
								<li>
									<span> Top Level Domain: </span>
									{props.topLevelDomain}
								</li>
								<li>
									<span> Currencies: </span>
									{props.currencies.map((currency) => (
										<> {currency.name} </>
									))}
								</li>
								<li>
									<span> Languages: </span>
									{props.languages.map((lang) => (
										<> {lang.name},</>
									))}
								</li>
							</ul>
							<ul>
								<div className={classes.borderCountryContainer}>
									{props.borderCountries.length ? (
										<div className={classes.border}>
                                           {"Border Countries"}
											{props.borderCountries.map((border) => (
												<button className={classes.borderCountry}>
													{border}{" "}
												</button>
											))}
										</div>
									) : (
										<button className={classes.borderCountry}>NO BORDER COUNTRY</button>
									)}
								</div>
							</ul>
						</span>
					</div>
				</div>
			</div>
		);
}

export default CountryPage
