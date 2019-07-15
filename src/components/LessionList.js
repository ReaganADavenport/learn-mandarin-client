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
        <ul>
            <li style={listStyle}>
                <Link to={`/greetings`}>Greetings</Link>
            </li>
            <li style={listStyle}>
                <Link to={`/nationalities`}>Nationalities</Link>
            </li>
            <li style={listStyle}>
                <Link to={`/family`}>Family</Link>
            </li>
        </ul>
        </>
    )
}

export default Lessions;