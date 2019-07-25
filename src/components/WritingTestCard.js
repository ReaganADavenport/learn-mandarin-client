import React, { Component } from 'react';

import "./Card.css";

class WriteTestCard extends Component {
    state = {
        showAnswer: false,
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
                
                    <div className="Front">
                        <p>{vocabWord.english}</p>
                    </div>
                    <div className="Back">
                        {!!showAnswer ?
                            <>
                            <p>{vocabWord.character}</p>
                            <p>{vocabWord.pinyin}</p>
                            {input === vocabWord.character ?
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

export default WriteTestCard;