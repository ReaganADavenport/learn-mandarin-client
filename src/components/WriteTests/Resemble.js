import React, {Component} from 'react';
import resemble from 'resemblejs';
import Image1 from '../../images/answerCards/Image1.png';

class Resemble extends Component {
    state = {
        correct: null,
        AnswerKey: null,
        Guess: null,
        someImage: ""
    }

    async componentDidMount() {
        // const _this = this;
        console.log("Image1 is", Image1);
        console.log("user guess image is", this.props.Guess);
        
        this.getDataUrl(Image1, dataUri =>{
            this.compare(dataUri, this.props.Guess);
            console.log("dataUri is", dataUri);
        });
    };


    getDataUrl = (img, callback) => {
        const image = new Image();//Okay so we are making a new "Image" and we are calling it image

        image.onload = function() {
            const canvas = document.createElement('canvas');//makeing a new "canvas" and we are calling it canvas
            const ctx = canvas.getContext('2d');//working with a 2d image

            canvas.width = this.width; //make the canvas the same width as image
            canvas.height = this.height; //make the cavas the same height as image
            
            ctx.drawImage(this, 0, 0); //draw a 2d image useing image at position 0,0.
            
            callback(canvas.toDataURL('image/png'));
        };
        image.src = img;
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