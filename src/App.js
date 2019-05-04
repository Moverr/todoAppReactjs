import React from 'react';
import './css/App.css';
import PropTypes from 'prop-types';
import SearchButton from './Utilities';

const propTypes = {};

const defaultProps = {};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleInput = (value) => {

  }
  render() {
    return (
      <div className="parentContainer">
        <h1>TODO APPLICATION</h1>
        <SearchButton name={"testinput"} value={"testvalue"} callback={this.handleInput} />
      </div>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;