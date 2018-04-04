import React from 'react';

let Image = function statelessFunctionComponentClass(props) {
    let source = props.source;

    let style = props.style;
    return (
        <img src={source} style={style} />
    );
};

export default Image;