
import React from 'react';

export default props => {
    console.log('Scrapbook images props:', props);

    const {src, style} = props.about;

    return (
        <img className="scrapbook-image" style={style} src={src} alt="Lil puppy"/>
    );
}
