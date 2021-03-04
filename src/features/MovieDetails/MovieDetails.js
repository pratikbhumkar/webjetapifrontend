import React from 'react'
import notfound from "../../assets/notfound.png";
import Supplier from "./components/Supplier";
import { getCinemaworldMovie, getFilmworldMovie } from "../../redux/selectors";
import { connect } from "react-redux";
import { calculateBestPrice } from "./MovieDetailsServices";
import { purchaseMovie } from "./MovieDetailsServices";
import { useHistory } from "react-router-dom";

const MovieDetails = ({ cinemaworldmovie, filmworldmovie }) => {
    var bestPriceFlag = calculateBestPrice(Number(cinemaworldmovie?.price), Number(filmworldmovie?.price))
    const movieImageURL = cinemaworldmovie?.poster?.replace('http://ia.media-imdb.com', 'https://m.media-amazon.com')
    const history = useHistory();
    //Falling back to homepage if the user tries to go to movie details page without movie selection by URL manipulation.
    React.useEffect(() => {
        (!cinemaworldmovie)&&(!filmworldmovie)&&history.push('/')
    }, [])
    return (
        <div className="container">
            <img
                onError={(ev) => ev.target.src = notfound}
                src={movieImageURL}
                alt={cinemaworldmovie?.title}
                width={200}
                height={250}
            />
            <p className="TitleText">{cinemaworldmovie?.title}</p>
            <p className="TitleText">Buy Now:</p>
            {cinemaworldmovie && <Supplier bestPrice={bestPriceFlag === -1} 
                                           price={cinemaworldmovie?.price} 
                                           supplierName={cinemaworldmovie?.provider} 
                                           onClick={(supplierName)=>purchaseMovie(supplierName, history, cinemaworldmovie)}
                                           />}
            {filmworldmovie && <Supplier bestPrice={bestPriceFlag === 1} 
                                         price={filmworldmovie?.price} 
                                         supplierName={filmworldmovie?.provider} 
                                         onClick={(supplierName)=>purchaseMovie(supplierName, history, filmworldmovie)}
                                         />}
        </div>
    )
}

const mapStateToProps = state => {
    const movieDetails = {
        cinemaworldmovie: getCinemaworldMovie(state),
        filmworldmovie: getFilmworldMovie(state)
    }
    return movieDetails;
};

export default connect(mapStateToProps)(MovieDetails);