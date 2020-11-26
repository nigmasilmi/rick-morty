import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Navbar from './components/layout/Navbar';
import Personajes from './components/personajes/Personajes';
import Search from './components/personajes/Search';
import Dimensiones from './components/dimensiones/Dimensiones';



class App extends Component {
  state = {
    personajes: [],
    loading: false,
    dimensiones: []
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get('https://rickandmortyapi.com/api/character/');
    const personajesRes = res.data.results;
    let dimensionesArr = [];
    personajesRes.forEach(personaje => {
      if (dimensionesArr.indexOf(personaje.location.name) === -1) {
        dimensionesArr.push(personaje.location.name);
      }
    })
    this.setState({ personajes: personajesRes, dimensiones: dimensionesArr, loading: false })

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

  clearChars = () => {
    this.setState({ personajes: [], loading: false })
  }

  render() {
    return (
      <Router >
        <div className="App">
          <Navbar title="Rick and Morty Fan Site" iconClass="far fa-smile-beam" />
          <div className="container">
            <Switch>
              <Route exact path='/' render={props => (
                <Fragment>
                  <Search
                    searchByName={this.searchCharsByName}
                    searchBySpec={this.searchCharsBySpec}
                    clearChars={this.clearChars}
                    showClear={this.state.personajes.length > 0 ? true : false}
                  />
                  <Personajes loading={this.state.loading} personajes={this.state.personajes} />
                </Fragment>
              )} />
              <Route exact path="/dimensiones"
                render={props => (
                  <Dimensiones loading={this.state.loading} dimensiones={this.state.dimensiones} />
                )}
              />
            </Switch>

          </div>
        </div>
      </Router>
    );
  }
}

export default App;
