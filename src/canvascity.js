import React from 'react';
import $ from "jquery";

export default class CanvasCity extends React.Component {

    componentDidMount() {
        $(document).on('click', function (e, data) {
            console.log('click outside')
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
