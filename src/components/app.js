
import React from 'react';
import MoviesContainer from './movies_container';

export default props => {
    return (
        <div className="container">
            <h1 className="text-center">Axios Demo</h1>
            <MoviesContainer/>
        </div>
    )
}
