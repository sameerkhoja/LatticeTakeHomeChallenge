import React, { Component } from 'react';
import Movies from './screens/Movies';
import Movie from './screens/Movie';
import Switch from "react-switch";

import './styles/App.css';

/*
  [App] is the entrypoint of the web application. It either shows the host
  screen, or the company screen.

  Screens it Connects to:
    - [Events] (when a host clicks on Events)
*/

class App extends Component {
  state = {
    currentPage: 0,
  }

  render() {
    return (
      <Movies/>
    );
  }
}

export default App;
