import React from 'react';
import '../css/style.css';
import PropTypes from 'prop-types';

export default class SearchBox extends React.Component {
  constructor() {
    super();
    this.state = {
      timerSet: false,
      searchCount: 0,
      errorMessage: '',
      searchThresholdInMilliSeconds: 60000,
    }
  }

  setTimer() {
    this.timer = setTimeout(() => {
      clearTimeout(this.timer);
      this.setState({
        searchCount: 0,
        errorMessage: '',
        timerSet: false,
      });
    }, this.state.searchThresholdInMilliSeconds);
  }

  searchPlanets = (e) => {

    let { store } = this.context, storeData = store.getState();
    if (this.state.timerSet === false) {
      this.setState({...this.state,timerSet:true});
      this.setTimer();
    }

    if (storeData.loginReducer.userDetails.name !== "Luke Skywalker") {
      if ( this.timer && this.state.searchCount <= 15 ) {
        this.props.search(e.target.value);
        this.setState({...this.state,searchCount: this.state.searchCount+1});
      }

      if (this.state.searchCount === 16) {
        this.props.search('');
        this.setState({...this.state,errorMessage: 'You are not allowed to perform more than 15 searches per minute',searchCount: this.state.searchCount+1 });
      }
    } else {
      this.props.search(e.target.value);
    }
  }

  render() {
    return (
      <div>
        <input
          className="col-md-12 col-sm-12 search-box"
          placeholder="Search planets"
          onKeyUp={this.searchPlanets}
        />
        {
          this.state.errorMessage ?  <p className="error">{ this.state.errorMessage }</p> : null
        }
       
      </div>
    )
  }
}


SearchBox.contextTypes = { store: PropTypes.object };
