import React from 'react';
import { Card, Content } from 'bloomer';
    

const cardStyle = {
    background: 'red',
    border: 'solid 1px black',
    height: '200px',
    margin: '10px',
    width: '150px',
    font_size: '100px',
    font_color: 'white'
};

const FlashCard = props => {
    const { vocabWord } = props;
    return (
        <Card style={cardStyle}>
            <Content>
                <p>{vocabWord.character}</p>
                <input></input>
            </Content>
        </Card>
    )
};

export default FlashCard; 