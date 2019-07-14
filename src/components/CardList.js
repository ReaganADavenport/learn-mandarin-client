import React, {Component} from 'react';
import PropTypes from 'prop-types';

import FlashCard from './Card';

import { Section, Columns, Column } from 'bloomer'


class CardList extends Component{
    state = {
        vocabulary:[]
    }

    async componentDidMount(){
        const vocab = await this.loadData();
        this.setState({
            vocab
        });
        console.log ('state is', this.state);
    };

    loadData = async () => {
        const url = 'http://localhost:3000/v1/greetings';
        const response = await fetch(url);
        const data = response.json();
        console.log('data is', data);
        return data;
    }

    render(){
        const { vocab } = this.state;
        return(
            <Section>
            <h1>Vocabulary</h1>
            <Columns>
                {vocab.length > 0 ?
                    vocab.map(term =>
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

CardList.propTypes = {
    vocab: PropTypes.array
};

export default CardList;

