import React from 'react'
import { getMovies } from "../../redux/selectors";
import { connect } from "react-redux";

const HomeScreen = ({ movies }) => {
    console.log('movies--', movies);
    return (
        <div className="container">
            {/* <div class="grid-container">
                <div class="grid-item">1</div>
                <div class="grid-item">2</div>
                <div class="grid-item">3</div>
                <div class="grid-item">4</div>
                <div class="grid-item">5</div>
                <div class="grid-item">6</div>
                <div class="grid-item">7</div>
                <div class="grid-item">8</div>
                <div class="grid-item">9</div>
                <div class="grid-item">7</div>
                <div class="grid-item">8</div>
                <div class="grid-item">9</div>
            </div> */}
            
        </div>
    )
}

const mapStateToProps = state => {
    return getMovies(state);
};

export default connect(mapStateToProps)(HomeScreen);