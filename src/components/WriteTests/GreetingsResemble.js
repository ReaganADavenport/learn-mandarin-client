import React, {Component} from 'react';
import resemble from 'resemblejs';

import Image1 from '../../images/answerCards/Image1.png';
import Image2 from '../../images/answerCards/Image2.png';
import Image3 from '../../images/answerCards/Image3.png';
import Image4 from '../../images/answerCards/Image4.png';
import Image5 from '../../images/answerCards/Image5.png';
import Image6 from '../../images/answerCards/Image6.png';
import Image7 from '../../images/answerCards/Image7.png';
import Image8 from '../../images/answerCards/Image8.png';
import Image9 from '../../images/answerCards/Image9.png';
import Image10 from '../../images/answerCards/Image10.png';
import Image11 from '../../images/answerCards/Image11.png';
import Image12 from '../../images/answerCards/Image12.png';
import Image13 from '../../images/answerCards/Image13.png';


class Resemble extends Component {
    state = {
        correct: null
    }

    async componentDidMount() {
        // const _this = this;
        // console.log("Image1 is", Image1);
        console.log("user guess image is", this.props.Guess);
        const AnswerImage = this.props.Answer;
        console.log("Answer is ", AnswerImage);
        this.getDataUrl(AnswerImage, dataUri => { //it breaks here
            this.compare(dataUri, this.props.Guess);
            console.log("dataUri is", dataUri);
        });
    };


    getDataUrl = (img, callback) => {
        const image = new Image();//Okay so we are making a new "Image" and we are calling it image
        image.src = img;
        image.onload = function() {
            const canvas = document.createElement('canvas');//makeing a new "canvas" and we are calling it canvas
            const ctx = canvas.getContext('2d');//working with a 2d image

            canvas.width = this.width; //make the canvas the same width as image
            canvas.height = this.height; //make the cavas the same height as image
            
            ctx.drawImage(this, 0, 0); //draw a 2d image useing image at position 0,0.
            console.log("image is", image)
            callback(canvas.toDataURL('image/png'));
        };
        
    };

    setTrueOrFalse = data => {
        // console.log("data is", data);
        let value = null
        if(data.rawMisMatchPercentage < 95){
            value = true;
        } else {
            value = false;
        }

        this.setState({
            correct: value
        })
    };

    compare = (answerImage) => {
        const _this = this;

        const diff = resemble(answerImage)
            .compareTo(this.props.Guess)
            .scaleToSameSize()
            .onComplete(function(data){
                console.log("data in compare is",data)
                _this.setTrueOrFalse(data);
            })
    };

    render(){
        const {correct, someImage} = this.state;
        return (
            <>  
            <img src={someImage}/>

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
    };
}


export default Resemble;