import React, {Component} from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

import WritingCard from '../WritingCard';
import Writing from './Writing';
import "../Lists/List.css";

import { Columns, Column } from 'bloomer';

const listStyle = {
    // backgroundColor: 'rgba(0,0,0, 0.5)',
    alignContent: 'space-between',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    listStyleType: 'none',
    margin: 0,
    padding: 0
}


class GreetingWritePractice extends Component{
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
        const url = 'http://localhost:3000/v1/greetings';
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
            {/* <Link to={`greetings/challenge`}>Want a Challenge?</Link> */}
            </div>
    )
    }
}

// GreetingList.propTypes = {
//     vocab: PropTypes.array
// };

export default GreetingWritePractice;