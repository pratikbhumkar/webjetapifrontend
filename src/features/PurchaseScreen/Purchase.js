import React from 'react'
import notfound from "../../assets/notfound.png";
import { useHistory } from "react-router-dom";

const Purchase = () => {
    const history = useHistory();
    var movie = history.location.state?.movie
    const movieImageURL = movie?.poster?.replace('http://ia.media-imdb.com', 'https://m.media-amazon.com')
    //Falling back to homepage if the user tries to go to purchase page without movie selection by URL manipulation.
    React.useEffect(() => {
        (!movie)&&history.push('/')
    }, [])
    return (
        <div className="container">
            <img
                onError={(ev) => ev.target.src = notfound}
                src={movieImageURL}
                alt={movie?.title}
                width={200}
                height={250}
            />
            <div className="width">
                <p className="TitleText">Title: {movie?.title}</p>
                <p className="ContentText">Type: {movie?.type}</p>
                <p className="ContentText">Language: {movie?.language}</p>
                <p className="ContentText">Director: {movie?.director}</p>
                <p className="ContentText">Runtime: {movie?.runtime}</p>
                <p className="ContentText">Rated: {movie?.rated}</p>
                <p className="ContentText">Genre: {movie?.genre}</p>
                <p className="ContentText">Writer: {movie?.writer}</p>
                <p className="ContentText">Actors: {movie?.actors}</p>
                <p className="ContentText">Year: {movie?.year}</p>
                <p className="ContentText">Awards: {movie?.awards}</p>
                <p className="ContentText">Country: {movie?.country}</p>
                <p className="ContentText">Metascore:{movie?.metascore}</p>
                <p className="ContentText">Rating: {movie?.rating}</p>
                <p className="ContentText">Released: {movie?.released}</p>
                <p className="ContentText">Votes: {movie?.votes}</p>
                <p className="ContentText">Plot: {movie?.plot}</p>
                <p className="ContentText">Provider: {movie?.provider}</p>
                <p className="ContentText">Price: {movie?.price}</p>
            </div>
        </div>
    )
}

export default Purchase
