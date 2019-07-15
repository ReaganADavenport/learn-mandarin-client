import React, { Component } from 'react';
import { Card, Content } from 'bloomer';
    

const cardStyle = {
    background: 'red',
    border: 'solid 1px black',
    height: '200px',
    margin: '1px',
    width: '150px',
    fontSize: '25px',
    color: '#fff'
};

class FlashCard extends Component {
    state = {
        showAnswer: false
    };

    // componentDidMount() {
    //     const { vocabWord } =
    // }



    render(){
        const { vocabWord } = this.props;
        const { showAnswer } = this.state;
        return (
            <Card style={cardStyle}>
                {!!showAnswer ?
                    <Content>
                    <p>{vocabWord.character}</p>
                    <p>{vocabWord.english}</p>
                    <input></input>
                    <button>Submit</button>
                    </Content>
                    :
                    <Content>
                    <p>{vocabWord.character}</p>
                    <input></input>
                    <button>Submit</button>
                    </Content>
                }
                <Content>
                    
                </Content>
            </Card>
        );
    }
};

export default FlashCard; 