//import libraries
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
//import components
import GreetingList from './components/GreetingList';
import NationalitiesList from './components/NationalitiesList';
import FamilyList from './components/FamilyList';
//import CSS
import './App.css';
import 'bulma/css/bulma.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={FamilyList} />
        <Route path="/greetings" component={GreetingList}/>
        <Route path="/nationalities" component={NationalitiesList}/>
        <Route path="/family" component={FamilyList}/>
      </Router>
      
    </div>
  );
}

export default App;