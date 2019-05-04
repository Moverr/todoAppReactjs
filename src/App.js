import React from 'react';
import './css/App.css';
import PropTypes from 'prop-types';
import InputField from './shared/forms/fields/InputField';

const propTypes = {};

const defaultProps = {};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText:""
    };
  }

  handleSelectionInput = (e) => {
    this.setState({searchText:e.target.value});
    console.log(e.target.value);

  }
  render() {
    return (
      <div className="parentContainer">
        <h1>TODO APPLICATION</h1>
        <InputField name={"searchEngine"} value={this.state.searchText} callback={this.handleSelectionInput} />
      </div>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;