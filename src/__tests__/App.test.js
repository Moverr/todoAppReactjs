import React from 'react';


import { expect } from 'chai';
import { shallow } from 'enzyme';



import App from '../App';


const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });





//Enzyme.configure({ adapter: new Adapter() });


describe("Main component", () => {

  let headerTitle;
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<App />);
    headerTitle = "TODO APPLICATION";
  });

  it('renders without crashing', () => {
    expect(wrapper.find('div').hasClass('parentContainer')).to.equal(true);
  });

it('Header with title', () => {
    expect(wrapper.find('h1').text()).to.equal(headerTitle);
  });

  
it('Header with title', () => {
    expect(wrapper.find('h1').text()).to.not.equal('  WRONG HEADER');
  });
  

});
