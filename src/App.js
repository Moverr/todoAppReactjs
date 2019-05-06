import React from 'react';
import './css/App.css';
import PropTypes from 'prop-types';
import InputField from './shared/forms/fields/InputField';
import ButtonField from './shared/forms/fields/ButtonField';

const propTypes = {};

const defaultProps = {};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    let listItems = new Array();
    this.state = {
      searchText: "",
      listItems: listItems
    };
  }

  handleSelectionInput = (e) => {
    this.setState({ searchText: e.target.value });
  }
  handleClick = () => {
    let listArray = this.state.listItems;
    let searchText = this.state.searchText;
    if (searchText !== "") {
      listArray.push(searchText); 
    }
     
    this.setState(
      {
        searchText: "",
        list: listArray
      }
    );
  }
  render() {
    return (
      <div className="parentContainer">
        <h1>TODO APPLICATION</h1>
        <InputField name={"searchEngine"} value={this.state.searchText} callback={this.handleSelectionInput} />
        <ButtonField value="GO" callback={this.handleClick} />
      </div>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;