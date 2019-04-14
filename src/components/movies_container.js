
import React, {Component} from 'react';
import axios from 'axios';
import Movie from './movie';

class MoviesContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: []
        }
    }
    
    render() {
        const movieList = this.state.movies.map((movieInfo, index) => {
            return <Movie info={movieInfo} key={index}/>
        });

        return (
            <div>
                {movieList}
            </div>
        );
    }

    componentDidMount() {
        const itunesURL = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json';

        axios.get(itunesURL).then((response) => {
            this.setState({
                movies: response.data.feed.entry
            });
        });
    }
}

export default MoviesContainer;
