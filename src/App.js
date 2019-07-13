//import libraries
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
//import components
import CardList from './components/CardList';
// import Card from './components/Card';
//import CSS
import './App.css';
import 'bulma/css/bulma.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={CardList}/>
        <Route path="/greetings" component={CardList}/>
      </Router>
      
    </div>
  );
}

export default App;