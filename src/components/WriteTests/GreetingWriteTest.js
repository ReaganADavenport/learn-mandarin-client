import React, {Component} from 'react';

import WritingTestCard from '../WritingTestCard';
import WritingTest from './WritingTest';

import Image1 from '../../images/answerCards/Image1.png';
import Image2 from '../../images/answerCards/Image2.png';
import Image3 from '../../images/answerCards/Image3.png';
import Image4 from '../../images/answerCards/Image4.png';
import Image5 from '../../images/answerCards/Image5.png';
import Image6 from '../../images/answerCards/Image6.png';
import Image7 from '../../images/answerCards/Image7.png';
import Image8 from '../../images/answerCards/Image8.png';
import Image9 from '../../images/answerCards/Image9.png';
import Image10 from '../../images/answerCards/Image10.png';
import Image11 from '../../images/answerCards/Image11.png';
import Image12 from '../../images/answerCards/Image12.png';
import Image13 from '../../images/answerCards/Image13.png';

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


class GreetingWriteTest extends Component{
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
        const data = await response.json();
        console.log('data is', data);
        return data;
    }

    render(){
        const { vocabulary } = this.state;
        return(
            <div className="WritingList">
                <h1>Vocabulary</h1>
                <h2>Use the writing pad to write the Chinese character that corresponds to the english word on the card.</h2>
                <Columns style={listStyle}>
                    {vocabulary.length > 0 ?
                        vocabulary.map(term =>
                            <Column key={term.id} style={listStyle}>
                                <WritingTestCard vocabWord= {term}/>
                                <WritingTest answerCard={`Image${term.id}`}></WritingTest>
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

export default GreetingWriteTest;