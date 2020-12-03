import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import config from '../config';
import logo from './static/logo.svg';
import './style.css';

import Search from './search';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dataFromApi: [],
      query: ''
    }
  }

  searchAPI = config.API_URL + '/search';

  componentDidMount() {
    console.log(config.API_URL);
    axios.get(config.API_URL)
      .then(res => {
        console.log(res.data);
      }, error => {
        console.log(error);
      });
  }

  search = (query) => {
    console.log(query);
    axios.get(this.searchAPI)
      .then(res => {
        console.log(res.data);
      }, error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div id="app">
        <img src={logo} alt="logo" />
        <h1>Welcome to your interview!</h1>
        <Search query={this.search} />
        <h1>{this.state.dataFromApi}</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
