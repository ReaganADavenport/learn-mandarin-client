import React, { Component } from 'react';
import { Card, Content } from 'bloomer';


const cardStyle = {
    background: 'black',
    border: 'solid 1px black',
    height: '200px',
    margin: '1px',
    width: '150px',
    fontSize: '25px',
    color: 'white'
};

class ChallengeCard extends Component {
    state = {
        showAnswer: false,
        input: ""
    };

    displayAnswer = () => {
        this.setState({
            showAnswer: true
        })
    };

    changeInput = input => {
        const lowerCaseInput = input.toLowerCase();
    
        this.setState({input: lowerCaseInput});
    };

    handleClick = () => {
        const displayChange = this.displayAnswer();
        return(displayChange);
    };

    render(){
        const { vocabWord } = this.props;
        const { showAnswer, input } = this.state;
        return (
            <Card style={cardStyle}>
                <Content>
                    <p>{vocabWord.english}</p>
                {!!showAnswer ?
                    <>
                        <p>{vocabWord.pinyin}</p>
                        {input === vocabWord.pinyin ?
                            <span>✅</span>
                        :
                            <span>❌</span>
                        }
                    </>
                    :
                    null
                }
                    <input type="text" onChange={e => this.changeInput(e.target.value)} value={input}/>
                    <button onClick={this.handleClick}>Submit</button>
                </Content>
            </Card>
        );
    }
};

export default ChallengeCard; 