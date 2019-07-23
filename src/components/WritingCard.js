import React, { Component } from 'react';


import "./Card.css";


class WritingCard extends Component {

    render(){
        const { vocabWord } = this.props;
        
        return (
            <div className='writingcard'>
                <div class="Front">
                    <p>{vocabWord.character}</p>
                </div>
            </div>
        );
    }
};

export default WritingCard;