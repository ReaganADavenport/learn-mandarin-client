//import libraries
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
//import components
import Header from './components/header';
import Lessons from './components/Lists/LessonList';
import GreetingList from './components/Lists/GreetingList';
import GreetingChallenge from './components/Challenges/GreetingChallenge';
import Writing from './components/Drawings/Writing';
import NationalitiesList from './components/Lists/NationalitiesList';
import NationalitiesChallenge from './components/Challenges/NationalitiesChallenge';
import FamilyList from './components/Lists/FamilyList';
import FamilyChallenge from './components/Challenges/FamilyChallenge';
import NumbersList from './components/Lists/NumbersList';
import NumbersChallenge from './components/Challenges/NumbersChallenge';
import DaysAndMonthsList from './components/Lists/DaysAndMonthsList';
import DaysAndMonthsChallenge from './components/Challenges/DaysAndMonthsChallenge';
import DatesList from './components/Lists/DatesList';
import DatesChallenge from './components/Challenges/DatesChallenge';
import HobbiesList from './components/Lists/HobbiesList';
import HobbiesChallenge from './components/Challenges/HobbiesChallenge';
import VisitingList from './components/Lists/VisitingList';
import VisitingChallenge from './components/Challenges/VisitingChallenge';
import AppointmentsList from './components/Lists/AppointmentsList';
import AppointmentsChallenge from './components/Challenges/AppointmentsChallenge';
import StudyingList from './components/Lists/StudyingList';
import StudyingChallenge from './components/Challenges/StudyingChallenge';
import Footer from './components/footer';
//import CSS
import './App.css';
import 'bulma/css/bulma.css';

function App() {
  return (
    <div>
      <link href="https://fonts.googleapis.com/css?family=Amiri&display=swap" rel="stylesheet"/>
      <Router>
        <Header />
        <Route path="/" exact component={Lessons} />
        <Route path="/greetings" exact component={GreetingList}/>
        <Route path="/greetings/challenge" component={GreetingChallenge}/>
        <Route path="/writing" component={Writing}/>
        <Route path="/nationalities" exact component={NationalitiesList}/>
        <Route path="/nationalities/challenge" component={NationalitiesChallenge}/>
        <Route path="/family" exact component={FamilyList}/>
        <Route path="/family/challenge" component={FamilyChallenge}/>
        <Route path="/numbers" exact component={NumbersList}/>
        <Route path="/numbers/challenge" component={NumbersChallenge}/>
        <Route path="/days_and_months" exact component={DaysAndMonthsList}/>
        <Route path="/days_and_months/challenge" component={DaysAndMonthsChallenge}/>
        <Route path="/dates" exact component={DatesList}/>
        <Route path="/dates/challenge" component={DatesChallenge}/>
        <Route path="/hobbies" exact component={HobbiesList}/>
        <Route path="/hobbies/challenge" component={HobbiesChallenge}/>
        <Route path="/visiting" exact component={VisitingList}/>
        <Route path="/visiting/challenge" component={VisitingChallenge}/>
        <Route path="/appointments" exact component={AppointmentsList}/>
        <Route path="/appointments/challenge" component={AppointmentsChallenge}/>
        <Route path="/studying" exact component={StudyingList}/>
        <Route path="/studying/challenge" component={StudyingChallenge}/>
        <Footer />
      </Router>
    </div>
  );
}

export default App;