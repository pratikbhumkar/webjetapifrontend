import React from 'react'
import notfound from "../../../assets/notfound.png";
const MovieContainer = ({ movie, getMovieDetails }) => {
    const movieImageURL = movie?.poster?.replace('http://ia.media-imdb.com', 'https://m.media-amazon.com')
    return (
        <div className="grid-item movie-container"
            onClick={(event) => {
                getMovieDetails(movie?.cinemaWorldId, movie?.filmWorldId)
            }}>
            <img
                onError={(ev)=>ev.target.src = notfound}
                src={movieImageURL}
                alt={movie?.title}
                width="90%"
                height="90%"
            />
            <span>{movie?.title}</span>
        </div>
    )
}

export default MovieContainer
