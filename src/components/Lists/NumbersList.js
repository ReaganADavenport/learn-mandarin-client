import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import FlashCard from '../Card';
import "./List.css";

import { Columns, Column } from 'bloomer';

const listStyle = {
    // backgroundColor: 'rgba(0,0,0, 0.8)',
    alignContent: 'space-between',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    listStyleType: 'none',
    margin: 0,
    padding: 0
}


class NumbersList extends Component {
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
        const url = 'http://localhost:3000/v1/numbers';
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
            <h2>Type in the English Translation of the Mandarin Character</h2>
            <Columns style={listStyle}>
                {vocabulary.length > 0 ?
                    vocabulary.map(term =>
                        <Column key={term.id} style={listStyle}>
                            <FlashCard vocabWord={term} />
                        </Column>
                        
                    )
                    :
                    <Column>No Vocabulary</Column>
                }
            </Columns>
            <Link to={`numbers/practice`}>Practice Writing Characters</Link>
            <Link to={`numbers/pinyin`}>English -> Pinyin</Link>
            <Link to={`numbers/test`}>English -> Character</Link>
            </div>
    )
    }
}

NumbersList.propTypes = {
    vocab: PropTypes.array
};

export default NumbersList;