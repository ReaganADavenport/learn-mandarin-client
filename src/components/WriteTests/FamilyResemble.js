import React, {Component} from 'react';
import resemble from 'resemblejs';
// import AnswerImage from this.props.Answer;

import Image1 from '../../images/answerCards/Family/Image1.png';
import Image2 from '../../images/answerCards/Family/Image2.png';
import Image3 from '../../images/answerCards/Family/Image3.png';
import Image4 from '../../images/answerCards/Family/Image4.png';
import Image5 from '../../images/answerCards/Family/Image5.png';
import Image6 from '../../images/answerCards/Family/Image6.png';
import Image7 from '../../images/answerCards/Family/Image7.png';
import Image8 from '../../images/answerCards/Family/Image8.png';
import Image9 from '../../images/answerCards/Family/Image9.png';
import Image10 from '../../images/answerCards/Family/Image10.png';
import Image11 from '../../images/answerCards/Family/Image11.png';
import Image12 from '../../images/answerCards/Family/Image12.png';
import Image13 from '../../images/answerCards/Family/Image13.png';
import Image14 from '../../images/answerCards/Family/Image14.png';
import Image15 from '../../images/answerCards/Family/Image15.png';
import Image16 from '../../images/answerCards/Family/Image16.png';
import Image17 from '../../images/answerCards/Family/Image17.png';
import Image18 from '../../images/answerCards/Family/Image10.png';
import Image19 from '../../images/answerCards/Family/Image11.png';
import Image20 from '../../images/answerCards/Family/Image12.png';


class Resemble extends Component {
    state = {
        correct: null
    }

    async componentDidMount() {
        // const _this = this;
        // console.log("Image1 is", Image1);
        console.log("user guess image is", this.props.Guess);
        const AnswerImage = this.switchImage(this.props.Answer);
        console.log("Answer is ", AnswerImage);
        this.getDataUrl(AnswerImage, dataUri => { //it breaks here
            this.compare(dataUri, this.props.Guess);
            console.log("dataUri is", dataUri);
        });
    };

    switchImage = answer =>{
        switch(answer){
            case "Image1":
                return Image1;
            case "Image2":
                return Image2;
            case "Image3":
                return Image3;
            case "Image4":
                return Image4;
            case "Image5":
                return Image5;
            case "Image6":
                return Image6;
            case "Image7":
                return Image7;
            case "Image8":
                return Image8;
            case "Image9":
                return Image9;
            case "Image10":
                return Image10;
            case "Image11":
                return Image11;
            case "Image12":
                return Image12;
            case "Image13":
                return Image13;
            case "Image14":
                return Image14;
            case "Image15":
                return Image15;
            case "Image16":
                return Image16;
            case "Image17":
                return Image17;
            case "Image18":
                return Image18;
            case "Image19":
                return Image19;
            case "Image20":
                return Image20;
        }
    }


    getDataUrl = (img, callback) => {
        const image = new Image();//Okay so we are making a new "Image" and we are calling it image
        image.src = img;
        image.onload = function() {
            const canvas = document.createElement('canvas');//makeing a new "canvas" and we are calling it canvas
            const ctx = canvas.getContext('2d');//working with a 2d image

            canvas.width = this.width; //make the canvas the same width as image
            canvas.height = this.height; //make the cavas the same height as image
            
            ctx.drawImage(this, 0, 0); //draw a 2d image useing image at position 0,0.
            callback(canvas.toDataURL('image/png'));
        };
        
    };

    setTrueOrFalse = data => {
        // console.log("data is", data);
        let value = null
        if(data.rawMisMatchPercentage < 96.1){
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