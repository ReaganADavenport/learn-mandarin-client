//import libraries
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
//import components
import Header from './components/header';
import Lessons from './components/Lists/LessonList';

import GreetingList from './components/Lists/GreetingList';
import GreetingPinyin from './components/Challenges/GreetingChallenge';
import GreetingWritePractice from './components/Write/GreetingWritePractice';
import GreetingWriteTest from './components/WriteTests/GreetingWriteTest';
import GreetingReading from './components/Reading/GreetingReading';

import NationalitiesList from './components/Lists/NationalitiesList';
import NationalitiesPinyin from './components/Challenges/NationalitiesChallenge';
import NationalitiesWritePractice from './components/Write/NationalitiesWritePractice';
import NationalitiesWriteTest from './components/WriteTests/NationalitiesWriteTest';
import NationalitiesReading from './components/Reading/NationalitiesReading';

import FamilyList from './components/Lists/FamilyList';
import FamilyPinyin from './components/Challenges/FamilyChallenge';
import FamilyWritePractice from './components/Write/FamilyWritePractice';
import FamilyWriteTest from './components/WriteTests/FamilyWriteTest';

import NumbersList from './components/Lists/NumbersList';
import NumbersPinyin from './components/Challenges/NumbersChallenge';
import NumbersWritePractice from './components/Write/NumbersWritePractice';
import NumbersWriteTest from './components/WriteTests/NumbersWriteTest';

import DaysAndMonthsList from './components/Lists/DaysAndMonthsList';
import DaysAndMonthsPinyin from './components/Challenges/DaysAndMonthsChallenge';
import DaysAndMonthsWritePractice from './components/Write/DaysAndMonthsWritePractice';
import DaysAndMonthsWriteTest from './components/WriteTests/DaysAndMonthsWriteTest';

import DatesList from './components/Lists/DatesList';
import DatesPinyin from './components/Challenges/DatesChallenge';
import DatesWritePractice from './components/Write/DatesWritePractice';
import DatesWriteTest from './components/WriteTests/DatesWriteTest';

import HobbiesList from './components/Lists/HobbiesList';
import HobbiesPinyin from './components/Challenges/HobbiesChallenge';
import HobbiesWritePractice from './components/Write/HobbiesWritePractice';
import HobbiesWriteTest from './components/WriteTests/HobbiesWriteTest';

import VisitingList from './components/Lists/VisitingList';
import VisitingPinyin from './components/Challenges/VisitingChallenge';
import VisitingWritePractice from './components/Write/VisitingWritePractice';
import VisitingWriteTest from './components/WriteTests/VisitingWriteTest';

import AppointmentsList from './components/Lists/AppointmentsList';
import AppointmentsPinyin from './components/Challenges/AppointmentsChallenge';
import AppointmentsWritePractice from './components/Write/AppointmentsWritePractice';
import AppointmentsWriteTest from './components/WriteTests/AppointmentsWriteTest';

import StudyingList from './components/Lists/StudyingList';
import StudyingPinyin from './components/Challenges/StudyingChallenge';
import StudyingWritePractice from './components/Write/StudyingWritePractice';
import StudyingWriteTest from './components/WriteTests/StudyingWriteTest';

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
        <Route path="/greetings/pinyin" component={GreetingPinyin}/>
        <Route path="/greetings/practice" component={GreetingWritePractice}/>
        <Route path="/greetings/test" component={GreetingWriteTest}/>
        <Route path="/greetings/reading" component={GreetingReading}/>

        <Route path="/nationalities" exact component={NationalitiesList}/>
        <Route path="/nationalities/pinyin" component={NationalitiesPinyin}/>
        <Route path="/nationalities/practice" component={NationalitiesWritePractice}/>
        <Route path="/nationalities/test" component={NationalitiesWriteTest}/>
        <Route path="/nationalities/reading" component={NationalitiesReading}/>

        <Route path="/family" exact component={FamilyList}/>
        <Route path="/family/pinyin" component={FamilyPinyin}/>
        <Route path="/family/practice" component={FamilyWritePractice}/>
        <Route path="/family/test" component={FamilyWriteTest}/>

        <Route path="/numbers" exact component={NumbersList}/>
        <Route path="/numbers/pinyin" component={NumbersPinyin}/>
        <Route path="/numbers/practice" component={NumbersWritePractice}/>
        <Route path="/numbers/test" component={NumbersWriteTest}/>

        <Route path="/days_and_months" exact component={DaysAndMonthsList}/>
        <Route path="/days_and_months/pinyin" component={DaysAndMonthsPinyin}/>
        <Route path="/days_and_months/practice" component={DaysAndMonthsWritePractice}/>
        <Route path="/days_and_months/test" component={DaysAndMonthsWriteTest}/>

        <Route path="/dates" exact component={DatesList}/>
        <Route path="/dates/pinyin" component={DatesPinyin}/>
        <Route path="/dates/practice" component={DatesWritePractice}/>
        <Route path="/dates/test" component={DatesWriteTest}/>

        <Route path="/hobbies" exact component={HobbiesList}/>
        <Route path="/hobbies/pinyin" component={HobbiesPinyin}/>
        <Route path="/hobbies/practice" component={HobbiesWritePractice}/>
        <Route path="/hobbies/test" component={HobbiesWriteTest}/>

        <Route path="/visiting" exact component={VisitingList}/>
        <Route path="/visiting/pinyin" component={VisitingPinyin}/>
        <Route path="/visiting/practice" component={VisitingWritePractice}/>
        <Route path="/visiting/test" component={VisitingWriteTest}/>

        <Route path="/appointments" exact component={AppointmentsList}/>
        <Route path="/appointments/pinyin" component={AppointmentsPinyin}/>
        <Route path="/appointments/practice" component={AppointmentsWritePractice}/>
        <Route path="/appointments/test" component={AppointmentsWriteTest}/>

        <Route path="/studying" exact component={StudyingList}/>
        <Route path="/studying/pinyin" component={StudyingPinyin}/>
        <Route path="/studying/practice" component={StudyingWritePractice}/>
        <Route path="/studying/test" component={StudyingWriteTest}/>

        <Footer />
      </Router>
    </div>
  );
}

export default App;