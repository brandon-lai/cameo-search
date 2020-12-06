import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Select from 'react-select';

import config from '../config';
import logo from './static/logo.svg';
import './style.css';

import Search from './search';
import List from './list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortOptions: [{label: "Price", value: "price"}, {label: "Score", value: "score"}, {label: "LastActiveAt", value: "lastActiveAt"}],
      sort: '',
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

  setSort = (sort) => {
    console.log(sort);
    this.arrSort(sort);
    this.setState({
      sort: sort.value
    })
  }

  arrSort = (sort) => {
    if (sort.value === 'price') {
      this.state.dataFromApi.sort((a, b) => {
        return (a.price > b.price);
      })
    }
    else if (sort.value === 'score') {
      this.state.dataFromApi.sort((a, b) => {
        return (a.score < b.score);
      })
    }
    else if (sort.value === 'lastActiveAt') {
      this.state.dataFromApi.sort((a, b) => {
        return (new Date(a.lastActiveAt) < new Date(b.lastActiveAt));
      })
    }
  }

  render() {
    return (
      <div id="app">
        <img src={logo} alt="logo" />
        <h1>Welcome to Cameo Search!</h1>
        <div className="select">
          <Search query={this.search} />
          <Select options={this.state.sortOptions} onChange={this.setSort}/>
          </div>
        <List dataFromAPI={this.state.dataFromApi} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
