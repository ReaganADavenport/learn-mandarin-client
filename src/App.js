//import libraries
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
//import components
import Header from './components/header';
import Lessions from './components/LessionList';
import GreetingList from './components/GreetingList';
import NationalitiesList from './components/NationalitiesList';
import FamilyList from './components/FamilyList';
import Footer from './components/footer';
//import CSS
import './App.css';
import 'bulma/css/bulma.css';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Route path="/" exact component={Lessions} />
        <Route path="/greetings" component={GreetingList}/>
        <Route path="/nationalities" component={NationalitiesList}/>
        <Route path="/family" component={FamilyList}/>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;