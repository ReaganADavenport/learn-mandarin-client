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
    };

    loadData = async () => {
        const url = 'http://localhost:3000/v1/greetings';
        const response = await fetch(url);
        const data = response.json();
        return data;
    }

    render(){
        const { vocabulary } = this.state;

        return(
            <Section>
                <h1>Vocabulary</h1>
                <Columns>
                    {vocabulary.length > 0 ?
                        vocabulary.map(vocab =>
                            <Column key={`vocab-${vocab.id}`}>
                                <FlashCard vocabulary={vocab.character} />
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
    userData: PropTypes.array
};

export default CardList;