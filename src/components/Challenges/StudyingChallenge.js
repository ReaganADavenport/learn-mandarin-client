import React, {Component} from 'react';
import PropTypes from 'prop-types';

import ChallengeCard from '../ChallengeCard';
import './ChallengeList.css';

import { Columns, Column } from 'bloomer';

const listStyle = {
    backgroundColor: 'rgba(0,0,0, 0.8)',
    alignContent: 'space-between',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    listStyleType: 'none',
    margin: 0,
    padding: 0
}


class StudyingChallenge extends Component{
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
        const url = 'http://localhost:3000/v1/studying';
        const response = await fetch(url);
        const data = response.json();
        console.log('data is', data);
        return data;
    }

    render(){
        const { vocabulary } = this.state;
        return(
            <div className="List">
            <h1>Vocabulary</h1>
            <h2>Please type the Pinyin with the Corresponding Tones</h2>
            <p>Ex. chang4 ge1</p>
            <Columns style={listStyle}>
                {vocabulary.length > 0 ?
                    vocabulary.map(term =>
                        <Column key={term.id}>
                            <ChallengeCard vocabWord= {term} />
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

StudyingChallenge.propTypes = {
    vocab: PropTypes.array
};

export default StudyingChallenge;
