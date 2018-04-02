import React from 'react';
import ReactDOM from 'react-dom';
import * as createjs from 'createjs-module';

export default class CanvasCity extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        let canvas = ReactDOM.findDOMNode(this.refs.canvas);
        this.stage = new createjs.Stage(canvas);
        let circle = new createjs.Shape();
        circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
        circle.x = 100;
        circle.y = 100;
        this.stage.addChild(circle);
        this.stage.update();
    }


    render() {
        return (
            <canvas ref="canvas" width="1920" height="1080" ></canvas>
        )
    }
}
