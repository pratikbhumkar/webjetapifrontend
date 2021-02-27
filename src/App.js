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
import Purchase from "./features/PurchaseScreen/Purchase";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
          <Switch>
            <Route path="/moviedetails">
              <MovieDetails />
            </Route>
            <Route path="/purchase">
              <Purchase />
            </Route>
            <Route path="/">
              <HomeScreen />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
