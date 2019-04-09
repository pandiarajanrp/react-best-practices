import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import MoviesList from "./MoviesList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MoviesList />
      </div>
    );
  }
}

export default App;
