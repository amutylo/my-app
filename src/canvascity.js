import React from 'react';
import $ from "jquery";

export default class CanvasCity extends React.Component {

    componentDidMount() {
        document.addEventListener('outside1', function (e) {
            console.log('click')
            console.log('The time is: ' + e.detail);
        });
    }
    componentWillUnmount() {
        // make sure you remove the listener when the component is destroyed
        $(document).unbind('outsideEvent1', this.handleClickOutside);
    }


    // handleClickOutside(e, data) {
    //     console.log('click outside')
    // }

    render() {
        return (
            <div ref="container" >
            </div>
        )
    }
}
