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
        // const url = '../../images/answerCards/Image1.png'
        // console.log("src is ", url);
        const dataUri = await this.generateImageFromAnswers(Image1);
        console.log("dataUri is", dataUri);
        this.compare(dataUri);
        this.setState({
            someImage: dataUri
        })

    };

    generateImageFromAnswers = async (imageFile) => {
        const image = new Image();//Okay so we are making a new "Image" and we are calling it image
        image.src = imageFile;//the origin of the image is what I pass in
        const imageString = this.getDataUrl(image);
        console.log("image string", imageString);
    }

    getDataUrl = (img) => {
        console.log("img is", img);
            const canvas = document.createElement('canvas');//makeing a new "canvas" and we are calling it canvas
            const ctx = canvas.getContext('2d');//working with a 2d image

            canvas.width = img.width; //make the canvas the same width as image
            canvas.height = img.height; //make the cavas the same height as image
            console.log("canvas", img.height);
            ctx.drawImage(img, 0, 0); //draw a 2d image useing image at position 0,0.
            const imageString = canvas.toDataURL();
            console.log("image string after data URL", imageString);
            return imageString;
    };

    setTrueOrFalse = data => {
        // console.log("data is", data);
        let value = null
        if(data.rawMisMatchPercentage < 95){
            value = false;
        } else {
            value = true;
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