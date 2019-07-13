import React, {Component} from 'react';

import { Card, Content } from 'bloomer';


class FlashCard extends Component {
    state= {
        vocabulary: []
    }; 

    render(){
        const { vocabulary } = this.state;
        return (
            <Card>
                <Content>
                    <p>{vocabulary.character}</p>
                </Content>
            </Card>
        )
    }
}

export default FlashCard;