import styles from './App.module.css';

function App() {
  return (
    <div>
      <header className={styles.Header}>
        <div className={styles.headerContent}>
        <span className={styles.Heading}> Where in the world? </span>
        <div>
          Dark Mode
        </div>
        </div>
      </header>
    <div className={styles.App}>
      <div className={styles.filterbox}>
        <input type="text" placeholder="Search for a country..."/>
        <div>
          <div className={styles.filter}>
          <label for="countries">Filter by Region</label>
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
        <div className={styles.country}>
            <img src="" alt="Country flag"/>
            <div className={styles.countryInfo}>
            <span>Country name</span>
              <ul>
              <li>
              Population: 81,770900
              </li>
              <li>
              Region: Europe
              </li>
              <li>
              Capital: Berlin
              </li>
              </ul>
            </div>
        </div>
        <div className={styles.country}>
            <img src="" alt="Country flag"/>
            <div className={styles.countryInfo}>
            <span>Country name</span>
              <ul>
              <li>
              Population: 81,770900
              </li>
              <li>
              Region: Europe
              </li>
              <li>
              Capital: Berlin
              </li>
              </ul>
            </div>
        </div>
        <div className={styles.country}>
            <img src="" alt="Country flag"/>
            <div className={styles.countryInfo}>
            <span>Country name</span>
              <ul>
              <li>
              Population: 81,770900
              </li>
              <li>
              Region: Europe
              </li>
              <li>
              Capital: Berlin
              </li>
              </ul>
            </div>
        </div>
        <div className={styles.country}>
            <img src="" alt="Country flag"/>
            <div className={styles.countryInfo}>
            <span>Country name</span>
              <ul>
              <li>
              Population: 81,770900
              </li>
              <li>
              Region: Europe
              </li>
              <li>
              Capital: Berlin
              </li>
              </ul>
            </div>
        </div>
        <div className={styles.country}>
            <img src="" alt="Country flag"/>
            <div className={styles.countryInfo}>
            <span>Country name</span>
              <ul>
              <li>
              Population: 81,770900
              </li>
              <li>
              Region: Europe
              </li>
              <li>
              Capital: Berlin
              </li>
              </ul>
            </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
