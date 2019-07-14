import React from 'react';
import { Card, Content } from 'bloomer';
    

const cardStyle = {
    background: 'red',
    border: 'solid 1px rebeccapurple',
    height: '200px',
    margin: '10px',
    width: '150px',
    font_size: '32px',
    font_color: 'black'
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