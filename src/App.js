//import libraries
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
//import components
import Header from './components/header';
import Lessons from './components/Lists/LessonList';

import GreetingList from './components/Lists/GreetingList';
import GreetingChallenge from './components/Challenges/GreetingChallenge';
import GreetingWritePractice from './components/Write/GreetingWritePractice';
import GreetingWriteTest from './components/WriteTests/GreetingWriteTest';

import NationalitiesList from './components/Lists/NationalitiesList';
import NationalitiesChallenge from './components/Challenges/NationalitiesChallenge';
import NationalitiesWritePractice from './components/Write/NationalitiesWritePractice';
import NationalitiesWriteTest from './components/WriteTests/NationalitiesWriteTest';

import FamilyList from './components/Lists/FamilyList';
import FamilyChallenge from './components/Challenges/FamilyChallenge';
import FamilyWritePractice from './components/Write/FamilyWritePractice';

import NumbersList from './components/Lists/NumbersList';
import NumbersChallenge from './components/Challenges/NumbersChallenge';
import NumbersWritePractice from './components/Write/NumbersWritePractice';

import DaysAndMonthsList from './components/Lists/DaysAndMonthsList';
import DaysAndMonthsChallenge from './components/Challenges/DaysAndMonthsChallenge';
import DaysAndMonthsWritePractice from './components/Write/DaysAndMonthsWritePractice';

import DatesList from './components/Lists/DatesList';
import DatesChallenge from './components/Challenges/DatesChallenge';
import DatesWritePractice from './components/Write/DatesWritePractice';

import HobbiesList from './components/Lists/HobbiesList';
import HobbiesChallenge from './components/Challenges/HobbiesChallenge';
import HobbiesWritePractice from './components/Write/HobbiesWritePractice';

import VisitingList from './components/Lists/VisitingList';
import VisitingChallenge from './components/Challenges/VisitingChallenge';
import VisitingWritePractice from './components/Write/VisitingWritePractice';

import AppointmentsList from './components/Lists/AppointmentsList';
import AppointmentsChallenge from './components/Challenges/AppointmentsChallenge';
import AppointmentsWritePractice from './components/Write/AppointmentsWritePractice';

import StudyingList from './components/Lists/StudyingList';
import StudyingChallenge from './components/Challenges/StudyingChallenge';
import StudyingWritePractice from './components/Write/StudyingWritePractice';

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
        <Route path="/greetings/practice" component={GreetingWritePractice}/>
        <Route path="/greetings/test" component={GreetingWriteTest}/>

        <Route path="/nationalities" exact component={NationalitiesList}/>
        <Route path="/nationalities/challenge" component={NationalitiesChallenge}/>
        <Route path="/nationalities/practice" component={NationalitiesWritePractice}/>
        <Route path="/nationalities/test" component={NationalitiesWriteTest}/>

        <Route path="/family" exact component={FamilyList}/>
        <Route path="/family/challenge" component={FamilyChallenge}/>
        <Route path="/family/practice" component={FamilyWritePractice}/>

        <Route path="/numbers" exact component={NumbersList}/>
        <Route path="/numbers/challenge" component={NumbersChallenge}/>
        <Route path="/numbers/practice" component={NumbersWritePractice}/>

        <Route path="/days_and_months" exact component={DaysAndMonthsList}/>
        <Route path="/days_and_months/challenge" component={DaysAndMonthsChallenge}/>
        <Route path="/days_and_months/practice" component={DaysAndMonthsWritePractice}/>

        <Route path="/dates" exact component={DatesList}/>
        <Route path="/dates/challenge" component={DatesChallenge}/>
        <Route path="/dates/practice" component={DatesWritePractice}/>

        <Route path="/hobbies" exact component={HobbiesList}/>
        <Route path="/hobbies/challenge" component={HobbiesChallenge}/>
        <Route path="/hobbies/practice" component={HobbiesWritePractice}/>

        <Route path="/visiting" exact component={VisitingList}/>
        <Route path="/visiting/challenge" component={VisitingChallenge}/>
        <Route path="/visiting/practice" component={VisitingWritePractice}/>

        <Route path="/appointments" exact component={AppointmentsList}/>
        <Route path="/appointments/challenge" component={AppointmentsChallenge}/>
        <Route path="/appointments/practice" component={AppointmentsWritePractice}/>

        <Route path="/studying" exact component={StudyingList}/>
        <Route path="/studying/challenge" component={StudyingChallenge}/>
        <Route path="/studying/practice" component={StudyingWritePractice}/>

        <Footer />
      </Router>
    </div>
  );
}

export default App;