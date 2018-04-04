import React from 'react';

export default class CanvasCity extends React.Component {

    componentDidMount() {
        document.addEventListener('outside1', this.handleClickOutsideOne);
        document.addEventListener('outside2', this.handleClickOutsideTwo);
    }
    componentWillUnmount() {
        // make sure you remove the listener when the component is destroyed
        document.removeEventListener('outside1', this.handleClickOutsideOne);
        document.removeEventListener('outside2', this.handleClickOutsideTwo);
    }


    handleClickOutsideOne(e) {
        console.log('Click one data is: ' + e.detail);
    }

    handleClickOutsideTwo(e) {
        console.log('Click two data is: ' + e.detail);
    }

    render() {
        return (
            <div ref="container" >
            </div>
        )
    }
}
