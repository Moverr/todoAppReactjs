import React from 'react';
// import { expect } from 'chai';
import { shallow, render } from 'enzyme';
import renderer from 'react-test-renderer';
import InputField from '../InputField';


const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });
describe("Main component", () => {

  let wrapper;
  let onSearchMock = jest.fn();
  beforeAll(() => {
    wrapper = shallow(<InputField name={"testinput"} value={"testvalue"} callback={onSearchMock} />);

  });

  afterAll(() => {
    wrapper.unMount();
  });

  it('render correctly text component', () => {
    expect(wrapper).toMatchSnapshot();

  });

  it("should call on change", () => {
    wrapper.find("input").simulate('change', "text");
    expect(onSearchMock).toHaveBeenCalledWith("text");

  });
  /*
it('Header with title', () => {
    expect(wrapper.find('h1').text()).to.equal(headerTitle);
  });

  
it('Header with title', () => {
    expect(wrapper.find('h1').text()).to.not.equal('  WRONG HEADER');
  });
  
*/
});
