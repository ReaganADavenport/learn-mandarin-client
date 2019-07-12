import React, {Component} from 'react';
import PropTypes from 'prop-types';

import FlashCard from './Card';

import { Section, Columns, Column } from 'bloomer'


class CardList extends Component{
    state ={
        vocabulary:[]
    }

    async componentDidMount(){
        const vocabulary = await this.loadData();
        this.setState({
            vocabulary
        });
    };

    loadData = async () => {
        const url = 'http://localhost:3000/v1/all';
        const response = await fetch(url);
        const data = response.json();
        return data;
    }

    render(){
        const { vocabulary } = this.state;

        return(
            <>
                <h1>Blog List</h1>
                <ul>
                    {vocabulary.map(vocab => {
                        return (
                            <li key={`post-${vocab.id}`}>
                                {vocab.character}
                            </li>
                        )
                    })}
                </ul>
            </>
        )
    }
}

CardList.propTypes = {
    userData: PropTypes.array
};

export default CardList;