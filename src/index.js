import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter, Route} from 'react-router-dom'
import CountryPage from './components/CountryPage';


ReactDOM.render(
  <BrowserRouter>
  <Route path="/" component={ App }/>
  {/* <Route path="/:country" component={CountryPage} /> */}
</BrowserRouter>, 
  document.getElementById('root')
);

