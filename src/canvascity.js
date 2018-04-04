import React from 'react';
// import Preloader from './components/preloader/preloader';
import ReactSlick from './components/reactslick/reactslick';
import EmailForm from "./components/emailform/emailform";

export default class CanvasCity extends React.Component {
    constructor(props) {
        super(props);
        this.images = [
            'http://placekitten.com/g/400/200',
            'http://placekitten.com/g/400/200',
            'http://placekitten.com/g/400/200',
            'http://placekitten.com/g/400/200'
        ];
    }

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
                {/*<Preloader/>*/}
                {/*<ReactSlick images={this.images}/>*/}
                <EmailForm/>
            </div>
        )
    }
}
