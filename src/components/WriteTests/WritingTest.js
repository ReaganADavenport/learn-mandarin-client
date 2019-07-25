import React, {Component} from 'react';
import CanvasDraw from "react-canvas-draw";
import Resemble from "./Resemble";
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

    saveCanvasImage = (e) => {
        e.preventDefault();

        console.log("this.savableCanvas is ", this.saveableCanvas);
        // localStorage.setItem("userGuess", this.saveableCanvas.getSaveData());
        // const myImage = localStorage.getItem("userGuess");
        // console.log("myImage is ", myImage);
        console.log("canvasDraw is ", this.canvasDraw);
        const canvasImage = this.canvasDraw.toDataURL();
            fetch(canvasImage)
                .then(res => res.blob())
                .then(blob => {
                    this.setState({
                        saveData: blob
                    })
                });
        
    };

    
    canvasDraw = (canvasDraw) => this.saveableCanvas = canvasDraw;
    render(){
        return(
            <>
                <CanvasDraw
                    ref={this.canvasDraw}
                    brushRadius={this.state.brushRadius}
                    lazyRadius={this.state.lazyRadius}
                    canvasWidth={this.state.width}
                    canvasHeight={this.state.height}
                />
                <button onClick={() => {this.saveableCanvas.clear()}}>Erase All</button>
                <button onClick={() => {this.saveableCanvas.undo()}}>Undo</button>
                <button onClick={(e) => this.saveCanvasImage(e)}>Save</button>
                {!!this.state.saveData ? 
                    <Resemble saveData={this.state.saveData} imageFile={this.state.imageFile}/>
                    : 
                    null
                }
            </>
        )
    }
}

export default Writing;