import React, {Component} from 'react';
import PropTypes from 'prop-types';

import FlashCard from './Card';

import { Section, Columns, Column } from 'bloomer';

const listStyle = {
    alignContent: 'space-between',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    listStyleType: 'none',
    margin: 0,
    padding: 0
}


class FamilyList extends Component{
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
        const url = 'http://localhost:3000/v1/family';
        const response = await fetch(url);
        const data = response.json();
        console.log('data is', data);
        return data;
    };

    render(){
        const { vocabulary } = this.state;
        return(
            <Section>
            <h1>Vocabulary</h1>
            <Columns style={listStyle}>
                {vocabulary.length > 0 ?
                    vocabulary.map(term =>
                        <Column key={term.id}>
                            <FlashCard vocabWord= {term} />
                        </Column>
                    )
                    :
                    <Column>No Vocabulary</Column>
                }
            </Columns>
            </Section>
    )
    }
}

FamilyList.propTypes = {
    vocab: PropTypes.array
};

export default FamilyList;