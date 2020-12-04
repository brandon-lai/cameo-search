import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import config from '../config';
import logo from './static/logo.svg';
import './style.css';

import Search from './search';
import List from './list';

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
    console.log(query.content);
    axios.get(this.searchAPI + '?searchId=' + query.content)
      .then(res => {
        this.setState({ dataFromApi: res.data });
      }, error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div id="app">
        <img src={logo} alt="logo" />
        <h1>Welcome to Cameo Search!</h1>
        <Search query={this.search} />
        <List dataFromAPI={this.state.dataFromApi} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
