import React, { Component } from 'react';
import { Card, Content } from 'bloomer';


const cardStyle = {
    background: 'darkred',
    border: 'solid 1px black',
    height: '200px',
    margin: '1px',
    width: '150px',
    fontSize: '25px',
    color: 'white'
};

class FlashCard extends Component {
    state = {
        showAnswer: false,
        input: "",
        isFlipped: false
    };

    displayAnswer = () => {
        this.setState({
            showAnswer: true
        })
    };

    flipCard = () =>{
        this.setState({
            isFlipped:true
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
        const FlashCardInnerClass = 'MemoryCardInner';
        if (this.props.isFlipped) {
            FlashCardInnerClass += ' flipped';
        }
        const { vocabWord } = this.props;
        const { showAnswer, input } = this.state;
        return (
            <div className="Card">
                <div class="Front">
                    <Card style={cardStyle}>
                        <Content>
                            <p>{vocabWord.character}</p>
                            <input type="text" onChange={e => this.changeInput(e.target.value)} value={input}/>
                            <button className={FlashCardInnerClass} onClick={this.handleClick}>Submit</button>
                        </Content>
                    </Card>
                </div>
                <div class="Back">
                    <Card style={cardStyle}>
                        <Content>
                            {!!showAnswer ?
                                <>
                                <p>{vocabWord.english}</p>
                                {input === vocabWord.english ?
                                    <span>✅</span>
                                    :
                                    <span>❌</span>
                                }
                                </>
                                :
                                null
                            }
                        </Content>
                    </Card>
                </div>
            </div>
        );
    }
};

export default FlashCard; 