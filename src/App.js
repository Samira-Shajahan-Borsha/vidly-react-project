import './App.css';
import React, { Component } from 'react';
import Movies from './Component/movies';


class App extends Component {
  render(){
    return (
        <main className='container'>
            <Movies/>
        </main>
    );
  }
}

export default App;
