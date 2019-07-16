import React from 'react';
import { Link } from 'react-router-dom';

const listStyle = {
    alignContent: 'space-between',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    listStyleType: 'none',
    margin: '10px',
    padding: 0
}

const Lessions = () => {
    return(
        <>
        <h1>Lessons:</h1>
        <ul style={listStyle}>
            <li style={listStyle}>
                <Link to={`/greetings`}>Greetings</Link>
            </li>
            <li style={listStyle}>
                <Link to={`/nationalities`}>Nationalities</Link>
            </li>
            <li style={listStyle}>
                <Link to={`/family`}>Family</Link>
            </li>
            <li style={listStyle}>
                <Link to={`/numbers`}>Numbers</Link>
            </li>
            <li style={listStyle}>
                <Link to={`/days_and_months`}>Days and Months</Link>
            </li>
            <li style={listStyle}>
                <Link to={`/dates`}>Dates</Link>
            </li>
        </ul>
        </>
    )
}

export default Lessions;