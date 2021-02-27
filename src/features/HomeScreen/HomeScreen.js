import React from 'react'
import { getMovies } from "../../redux/selectors";
import { connect } from "react-redux";
import MovieContainer from './components/MovieContainer'
import MovieSearchBox from './components/MovieSearchBox'
import loading from "../../assets/loading.gif";
const HomeScreen = ({ movies }) => {
    if (movies) {
        return (
            <div className="container">
                <MovieSearchBox movies={movies} />
                <div className="grid-container">
                    {
                        movies?.map((movie, index) => {
                            return <MovieContainer movie={movie} key={index} />
                        })
                    }
                </div>
            </div>
        )
    } else {
        return (
            <div className="container">
                <img src={loading} />
                <h1>Please wait while the movies are loaded.</h1>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return getMovies(state);
};

export default connect(mapStateToProps)(HomeScreen);
