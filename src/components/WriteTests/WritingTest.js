import React, {Component} from 'react';
import CanvasDraw from "react-canvas-draw";
import Resemble from "./Resemble";
import Greeting1 from '../../images/Greeting1.png';
// import compare from 'resemblejs';
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

    setCanvasRef = saveableCanvas => ( this.saveableCanvas = saveableCanvas);

    saveCanvasImage = () => {

        const canvasImage = this.saveableCanvas.canvasContainer.children[1].toDataURL();
        this.setState({
            saveData: canvasImage
        });
    };

    render(){
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
                <button onClick={() => this.saveCanvasImage()}>Save</button>
                {!!this.state.saveData ? 
                    <Resemble Answer={Greeting1} Guess={this.state.saveData}/>
                    : 
                    null
                }
            </>
        )
    }
}

export default Writing;