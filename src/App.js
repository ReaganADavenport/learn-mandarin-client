//import libraries
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
//import components
import Header from './components/header';
import Lessions from './components/LessionList';
import GreetingList from './components/GreetingList';
import GreetingChallenge from './components/GreetingChallenge';
import NationalitiesList from './components/NationalitiesList';
import NationalitiesChallenge from './components/NationalitiesChallenge';
import FamilyList from './components/FamilyList';
import FamilyChallenge from './components/FamilyChallenge';
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
        <Route path="/greetings" exact component={GreetingList}/>
        <Route path="/greetings/challenge" component={GreetingChallenge}/>
        <Route path="/nationalities" exact component={NationalitiesList}/>
        <Route path="/nationalities/challenge" component={NationalitiesChallenge}/>
        <Route path="/family" exact component={FamilyList}/>
        <Route path="/family/challenge" component={FamilyChallenge}/>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;