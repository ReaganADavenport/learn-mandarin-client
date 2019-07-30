import React, {Component} from 'react';
import resemble from 'resemblejs';
// import AnswerImage from this.props.Answer;

import Image1 from '../../images/answerCards/Nationalities/Image1.png';
import Image2 from '../../images/answerCards/Nationalities/Image2.png';
import Image3 from '../../images/answerCards/Nationalities/Image3.png';
import Image4 from '../../images/answerCards/Nationalities/Image4.png';
import Image5 from '../../images/answerCards/Nationalities/Image5.png';
import Image6 from '../../images/answerCards/Nationalities/Image6.png';
import Image7 from '../../images/answerCards/Nationalities/Image7.png';
import Image8 from '../../images/answerCards/Nationalities/Image8.png';
import Image9 from '../../images/answerCards/Nationalities/Image9.png';
import Image10 from '../../images/answerCards/Nationalities/Image10.png';
import Image11 from '../../images/answerCards/Nationalities/Image11.png';


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
        if(data.rawMisMatchPercentage < 96){
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