import styles from './App.module.css';
import { BiMoon,BiSearch,BiChevronDown } from "react-icons/bi";
import {useState, useEffect} from 'react'
import axios from 'axios';
import CountryCard from './components/countryCard/CountryCard'



function App() {



  const [allCountries,setAllcountries] = useState([])

  const fetchAllCountries = () => {
    axios.get("https://restcountries.eu/rest/v2/all")
    .then(res => {
      console.log(res.data)
      setAllcountries(allCountries.concat(res.data))})
    }


    const countryContainer = allCountries.map(country => {
      return <CountryCard 
      name ={country.name}
      population = {country.population}
      flag = {country.flag}
      region = {country.region}
      capital={country.capital}
      />
    })


 useEffect(fetchAllCountries,[])







  return (
    <div>
      <header className={styles.Header}>
        <div className={styles.headerContent}>
        <span className={styles.Heading}> Where in the world? </span>
        <div className={styles.toggleDark}>
          <BiMoon />
          Dark Mode
        </div>
        </div>
      </header>
    <div className={styles.App}>
      <div className={styles.filterbox}>
        <div className={styles.searchBar}>
        <BiSearch className={styles.searchIcon} />
        <input type="text" placeholder="Search for a country..."/>
        </div>
        <div>
          <div className={styles.filter}>
          <label>Filter by Region </label>
          <BiChevronDown/>
          {/* <select name="Countries" >
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select> */}
          </div>
        </div>
      </div>
      <div className={styles.countryContainer}>
        {countryContainer}     
      </div>
    </div>
    </div>
  );
}

export default App;
