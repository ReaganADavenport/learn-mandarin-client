import React, {Component} from 'react';
import CanvasDraw from "react-canvas-draw";
import Resemble from "./StudyingResemble";


// import compare from 'resemblejs';git
// import { toUnicode } from 'punycode';
// import './Drawings.css';

class Writing extends Component {
    state = {
        color: "#ffc600",
        width: 200,
        height: 200,
        brushRadius: 7,
        lazyRadius: 1,
        saveData: null
    };

    componentDidMount() {
        const AnswerKey = this.props.answerCard;
        this.setState({
            AnswerKey 
        })
    }

    setCanvasRef = saveableCanvas => ( this.saveableCanvas = saveableCanvas);

    saveCanvasImage = () => {

        const canvasImage = this.saveableCanvas.canvasContainer.children[1].toDataURL();
        this.setState({
            saveData: canvasImage
        });
    };

    render(){
        const { AnswerKey } = this.state;
        return(
            <>
                <CanvasDraw
                    ref={this.setCanvasRef}
                    brushRadius={this.state.brushRadius}
                    lazyRadius={this.state.lazyRadius}
                    canvasWidth={this.state.width}
                    canvasHeight={this.state.height}
                />
                <button onClick={() => {this.saveableCanvas.clear()}}>Erase All</button>
                <button onClick={() => {this.saveableCanvas.undo()}}>Undo</button>
                <button onClick={() => this.saveCanvasImage()}>Submit</button>
                {!!this.state.saveData ? 
                    <Resemble Answer={AnswerKey} Guess={this.state.saveData}/>
                    : 
                    null
                }
            </>
        )
    }
}

export default Writing;