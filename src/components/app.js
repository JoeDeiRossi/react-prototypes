
import React from 'react';
import Clock from './clock';

export default props => {
    return (
        <div className="container">
            <h1 className="text-center">Redux Clock</h1>
            <Clock/>
        </div>
    );
}
