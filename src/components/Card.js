import React from 'react';
	
	import { Card, Content } from 'bloomer';
	
	
	const FlashCard = props => {
        const { vocabWord } = props;
        return (
            <Card>
                <Content>
                    <p>{vocabWord.character}</p>
                </Content>
            </Card>
        )
	};
	
	export default FlashCard; 