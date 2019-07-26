import React, {Component} from 'react';
import resemble from 'resemblejs';
import Image1 from '../../images/answerCards/image1.png';

class Resemble extends Component {
    state = {
        correct: null,
        answerCard: Image1
    }

    componentDidMount() {
        
        this.compare();
    }

    setTrueOrFalse = data => {
        console.log("data is", data);
        let value = null
        if(data.rawMisMatchPercentage < 95){
            value = true;
        } else {
            value = false;
        }

        this.setState({
            correct: value
        })
    }

    compare = () => {
        const _this = this;

        const diff = resemble(this.state.answerCard)
            .compareTo(this.props.Guess)
            .scaleToSameSize()
            .onComplete(function(data){
                console.log(data);
                _this.setTrueOrFalse(data);
            })
    };


    // check = () => {
    //     const answer = this.compare();
    //     return answer;
    // }

    render(){
        const {correct} = this.state;
        return (
            <>
                {!!correct ?
                <>
                    <span>✅</span>
                </>
                : 
                <>
                    <span>✖️</span>
                </>
                }
            </>
        )
    }
}

export default Resemble;