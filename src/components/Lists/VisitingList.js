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


class VisitingList extends Component {
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
        const url = 'http://localhost:3000/v1/visiting';
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
            <Link to={`visiting/reading`}>Reading</Link>
            <Link to={`visiting/practice`}>Practice Writing Characters</Link>
            <Link to={`visiting/pinyin`}>English -> Pinyin</Link>
            <Link to={`visiting/test`}>English -> Character</Link>
            </div>
        )
    }
}

VisitingList.propTypes = {
    vocab: PropTypes.array
};

export default VisitingList;