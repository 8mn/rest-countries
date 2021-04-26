import Home from '../src/components/Home/Home'
import {useState,useEffect} from 'react'
import {
  BrowserRouter as Router,Switch,Route
} from "react-router-dom"
import axios from 'axios'
import CountryPage from './components/CountryPage/CountryPage'


function App() {

  const [allCountries,setAllcountries] = useState([])
  // const[filter,setfilter] = useState('Filter by Region')


  const BASE_URL = "https://restcountries.eu/rest/v2/all"

  


  const fetchAllCountries = (url) => {
    axios.get(url)
    .then(res => {
      console.log(res.data)
      setAllcountries(res.data)})
    .catch(err => alert(err))
    }


    useEffect(() =>fetchAllCountries(BASE_URL),[])


        const urlPatters = allCountries.map(country => {
      return <Route exact path={`/${country.name}`.replace(/\s+/g, '-').toLowerCase().replace(',','').replace(/[()]/g, '')}
          
          >
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
          </Route>
    })



  return (
    <Router>
      <Switch>
        <Route exact path='/'>
        <Home 
          allCountries={allCountries} 
          BASE_URL={BASE_URL}
          fetchAllCountries={fetchAllCountries}/>
        </Route>
        {urlPatters}
      </Switch>
    </Router>
  );
}

export default App;
