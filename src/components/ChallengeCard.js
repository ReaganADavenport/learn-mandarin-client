import React, { Component } from 'react';

import "./Card.css";


class ChallengeCard extends Component {
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
        const flipped = this.flipCard();
        return(
            displayChange,
            flipped
            );
    };

    render(){
        const { vocabWord } = this.props;
        const { showAnswer, input, isFlipped } = this.state;
        return (
            <div className={ isFlipped ? 'flashcard flipped' : 'flashcard'}>

                <div class="Front">
                    <p>{vocabWord.english}</p>
                    <input type="text" onChange={e => this.changeInput(e.target.value)} value={input}/>
                    <button onClick={this.handleClick}>Submit</button>
                </div>
                <div class="Back">
                    {!!showAnswer ?
                        <>
                            <p>{vocabWord.pinyin}</p>
                            <p>{vocabWord.english}</p>
                            {input === vocabWord.pinyin ?
                                <span>✅</span>
                                :
                                <span>❌</span>
                            }
                                </>
                            :
                                null
                    }
                    </div>
            </div>
        );
    }
};

export default ChallengeCard; 