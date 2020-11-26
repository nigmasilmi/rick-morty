import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/layout/Navbar';
import Personajes from './components/personajes/Personajes';
import Search from './components/personajes/Search';



class App extends Component {
  state = {
    personajes: [],
    loading: false
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get('https://rickandmortyapi.com/api/character/');
    this.setState({ personajes: res.data.results, loading: false })
  }

  searchCharsByName = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(`https://rickandmortyapi.com/api/character/?name=${text}`);
    this.setState({ personajes: res.data.results, loading: false });
    // console.log(res);
  }

  searchCharsBySpec = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(`https://rickandmortyapi.com/api/character/?species=${text}`);
    this.setState({ personajes: res.data.results, loading: false });
  }

  render() {
    return (
      <div className="App">
        <Navbar title="Rick and Morty Fan Site" iconClass="far fa-smile-beam" />
        <div className="container">
          <Search
            searchByName={this.searchCharsByName}
            searchBySpec={this.searchCharsBySpec}
          />
          <Personajes loading={this.state.loading} personajes={this.state.personajes} />
        </div>
      </div>
    );
  }
}

export default App;
