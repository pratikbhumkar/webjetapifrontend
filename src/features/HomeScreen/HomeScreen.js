import React from 'react'
import { getMovies } from "../../redux/selectors";
import { connect } from "react-redux";
import MovieContainer from './components/MovieContainer'
import MovieSearchBox from './components/MovieSearchBox'
const HomeScreen = ({ movies }) => {
    return (
        <div className="container">
            <MovieSearchBox movies={movies}/>
            <div class="grid-container">
                {
                    movies?.map((movie, index)=>{
                        return <MovieContainer movie={movie}/>
                    })
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return getMovies(state);
};

export default connect(mapStateToProps)(HomeScreen);
