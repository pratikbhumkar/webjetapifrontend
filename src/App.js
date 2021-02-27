import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomeScreen from "./features/HomeScreen/HomeScreen";
import MovieDetails from "./features/MovieDetails/MovieDetails";
function App() {
  React.useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("https://localhost:44388/weatherforecast", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }, [])
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <div>
          <Switch>
            <Route path="/moviedetails">
              <MovieDetails />
            </Route>
            <Route path="/">
              <HomeScreen />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
