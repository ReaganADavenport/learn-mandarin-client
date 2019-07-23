import React, {Component} from 'react';
import CanvasDraw from "react-canvas-draw";
// import './Drawings.css';

class Writing extends Component {
    state = {
        color: "#ffc600",
        width: 200,
        height: 200,
        brushRadius: 7,
        lazyRadius: 1
    };

    render(){
        return(
            <CanvasDraw
            ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
            brushRadius={this.state.brushRadius}
            lazyRadius={this.state.lazyRadius}
            canvasWidth={this.state.width}
            canvasHeight={this.state.height}
        />
        )
    }
}

export default Writing;