import React from 'react';
import SearchBox from './search-box-component';
import '../css/style.css';
import PropTypes from 'prop-types';

import {
  randomColor,
  populationFormatConverter,
  getPlanets
} from '../utilities/planet-utilities.js';

class Planets extends React.Component {
  constructor() {
    super();
    this.state = {
      planets: [],
      maxPopulation: 0,
      searchKeyword: '',
    }
  }

  search = (searchTerm) => {
    this.setState({ searchKeyword: searchTerm });
  }

  async fetchPlanets() {
    let max = 0, pageNo = 1;
    let results = await getPlanets(pageNo);

    while (results && results.data && results.data.next != null) {
      this.setState({ ...this.state, planets: [...this.state.planets, ...results.data.results] });
      results = await getPlanets(++pageNo);
    }

    this.state.planets.forEach(function (planet) {
      if (planet.population !== "unknown") {
        if (parseInt(planet.population, 10) > max) {
          max = parseInt(planet.population, 10);
        }
      }
    });
    this.setState({ ...this.state, maxPopulation: max });
  }

  componentDidMount() {
    this.fetchPlanets();
  }

  handleClick = () => {
    this.props.history.push('/');
    sessionStorage.removeItem('loggedinUser')
  }

  render() {
    let state = this.state;
    var loggedInUser= '';
    if(sessionStorage.getItem("loggedinUser")){
      loggedInUser = sessionStorage.getItem("loggedinUser");   
    } else{
      this.props.history.push('/');
    }

    let searchedPlanets = this.state.planets.filter(function (planet) {
      if (planet.name.toLowerCase().startsWith(state.searchKeyword.toLowerCase())) {
        return planet
      }
    });

    return (
      <div className="col-md-12 col-sm-12 no-padding planets-component">
        <p className="header center">Explore the world of Star Wars</p>
        <div className="planet-header">
          <div>
            <SearchBox search={this.search} />
            {
              searchedPlanets.length === 0 ? (<p className="error">No Planets Found</p>) : null
            }
          </div>
          <div className="loggedin-user">
            Logged In - {loggedInUser}
            <p className="align-right">
              <button className="log-off" onClick={()=>this.handleClick()}>Log Out</button>
            </p>
          </div>
        </div>

        <div className="col-md-12 col-sm-12 planets-container">
          {
            searchedPlanets.map(function (planet, index) {
              return (
                <div
                  style={{
                    width: planet.population === 'unknown' ? 100 : 100 + (350 * (parseInt(planet.population, 10) / state.maxPopulation)) + 'px',
                    background: randomColor(),
                  }}
                  className="planets"
                  title={'Planet Name: ' + planet.name + '; Planet Population: ' + planet.population}
                  key={index}
                >
                  <span className="planet-name">
                    {planet.name}
                  </span>
                  <span className="planet-population">
                    {populationFormatConverter(planet.population)}
                  </span>
                </div>
              );

            }).filter(function (updatedPlanet) {
              if (updatedPlanet !== null) {
                return true;
              }

              return false;
            })
          }
        </div>
      </div>
    )
  }
}

Planets.contextTypes = { store: PropTypes.object };

export default Planets;
