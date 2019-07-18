import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ListStyle = styled.ul`
    align-content: space-between;
    display: flex;
    flex-wrap: wrap;
    font-size: 25px;
    justifyContent: center;
    list-style-type: none;
    font-family: 'Amiri', serif;
    margin: 30px;
    padding: 5px;

    li {
        margin: 5px;
        padding: 5px;
        font-family: 'Amiri', serif;
    };

    li a {
        align-content: center;
        justifyContent: center;
        color: white;
    }
`

const Lessons = () => {
    return(
        <div className="Lessons">
        <h1>Mandarin Lessons:</h1>
        <ListStyle>
            <li>
                <Link to={`/greetings`}>Greetings</Link>
            </li>
            <li>
                <Link to={`/nationalities`}>Nationalities</Link>
            </li>
            <li>
                <Link to={`/family`}>Family</Link>
            </li>
            <li >
                <Link to={`/numbers`}>Numbers</Link>
            </li>
            <li >
                <Link to={`/days_and_months`}>Days and Months</Link>
            </li>
            <li>
                <Link to={`/dates`}>Dates</Link>
            </li>
            <li>
                <Link to={`/hobbies`}>Hobbies</Link>
            </li>
        </ListStyle>
        </div>
    )
}

export default Lessons;