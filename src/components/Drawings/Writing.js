import React, {Component} from 'react';
import CanvasDraw from "react-canvas-draw";
// import './Drawings.css';

class Writing extends Component {
    state = {
        color: "#ffc600",
        width: 400,
        height: 400,
        brushRadius: 10,
        lazyRadius: 12
    };

    render(){
        return(
        <CanvasDraw/>
        )
    }
}

export default Writing;