import React, {Component} from 'react';

import WritingCard from '../WritingCard';
import Writing from './Writing';
import "../Lists/List.css";

import { Columns, Column } from 'bloomer';

const listStyle = {
    alignContent: 'space-between',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    listStyleType: 'none',
    margin: 0,
    padding: 0
}


class AppointmentsWritePractice extends Component{
    state = {
        vocabulary:[]
    }

    async componentDidMount(){
        const vocabulary = await this.loadData();
        this.setState({
            vocabulary
        });
        console.log ('state is', this.state);
    };

    loadData = async () => {
        const url = 'http://localhost:3000/v1/appointments';
        const response = await fetch(url);
        const data = response.json();
        console.log('data is', data);
        return data;
    }

    render(){
        const { vocabulary } = this.state;
        return(
            <div className="WritingList">
            <h1>Vocabulary</h1>
            <h2>Use the writing pad to practice writing the Chinese character above it.</h2>
            <Columns style={listStyle}>
                {vocabulary.length > 0 ?
                    vocabulary.map(term =>
                        <Column key={term.id} style={listStyle}>
                            <WritingCard vocabWord= {term}/>
                            <Writing></Writing>
                        </Column>
                    )
                    :
                    <Column>No Vocabulary</Column>
                }
            </Columns>
            </div>
    )
    }
}

export default AppointmentsWritePractice;