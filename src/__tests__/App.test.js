import React from 'react';
//import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from '../App';


const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });
describe("Main component", () => {

  let headerTitle;
  let wrapper;
  let instance;
  let onClickMock = jest.fn();
  beforeAll(() => {
    wrapper = shallow(<App />);
    instance = wrapper.instance();
    headerTitle = "TODO APPLICATION";
  });

  it('renders without crashing', () => {
    expect(wrapper.find('div').hasClass('parentContainer')).toEqual(true);
  });

  it('Header with title', () => {
    expect(wrapper.find('h1').text()).toEqual(headerTitle);
  });




  it("Test handleSelectionInput", () => {
    expect(wrapper.state('searchText')).toBe("");
    instance.handleSelectionInput({ target: { name: 'input', value: '02' } });
    expect(wrapper.state('searchText')).toBe("02");

  });

  it("Test handleClick", () => {
    instance.handleSelectionInput({ target: { name: 'input', value: '02' } });
    expect(wrapper.state('searchText')).toBe("02");
    instance.handleClick();
    let listItems = new Array();
    listItems.push("02");
    expect(wrapper.state('list')).toEqual(listItems);
  });

  it("Test handleClick", () => {
    instance.handleSelectionInput({ target: { name: 'input', value: '' } });
    expect(wrapper.state('searchText')).toBe("");
    instance.handleClick();
    let listItems = new Array();
    listItems.push("02");
    expect(wrapper.state('list')).toEqual(listItems);
  });


});
