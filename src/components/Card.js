import React, { Component } from 'react';
import { Card, Content } from 'bloomer';
    

const cardStyle = {
    background: 'red',
    border: 'solid 1px black',
    height: '200px',
    margin: '10px',
    width: '150px',
    fontSize: '35px',
    color: '#fff'
};

class FlashCard extends Component {
    state = {
        displayAnswer: false
    };

    // componentDidMount() {
    //     const { vocabWord } =
    // }

    render(){
        const { vocabWord } = this.props;
        return (
            <Card style={cardStyle}>
                <Content>
                    <p>{vocabWord.character}</p>
                    <input></input>
                    <button>Submit</button>
                </Content>
            </Card>
        );
    }
};

export default FlashCard; 