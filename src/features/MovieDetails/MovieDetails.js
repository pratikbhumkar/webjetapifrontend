import React from 'react'
import notfound from "../../assets/notfound.png";
import Supplier from "./components/Supplier";
const MovieDetails = () => {
    return (
        <div className="container">
            <img
                onError={(ev) => ev.target.src = notfound}
                src={notfound}
                alt={'movie?.title'}
                width={200}
                height={250}
            />
            <p className="TitleText">movie?.title</p>
            <p className="TitleText">Buy Now:</p>
            <Supplier />
            <Supplier bestPrice/>
        </div>
    )
}

export default MovieDetails