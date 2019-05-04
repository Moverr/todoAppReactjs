import React from 'react';
// import { expect } from 'chai';
import { shallow,render } from 'enzyme';
import renderer from 'react-test-renderer';
import InputField from '../shared/forms/fields/Utilities';


const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });
describe("Main component", () => {

  let headerTitle;
  let wrapper;
  beforeAll(() => {
   
    headerTitle = "TODO APPLICATION";
    wrapper = shallow(<InputField name={"testinput"} value={"testvalue"}  callback={testChange}/>);

});

afterAll(()=>{
wrapper.unMount();
});
 
  const testChange = (value)=>{
    return value;
  }

  it('render correctly text component', () => {  
    // const TextInputComponent = renderer.create(<SearchButton />).toJSON();
// let  seearchButtion = renderer.create(<SearchButton/>).toJSON();


    // expect(seearchButtion).toMatchSnapshot();
    expect(wrapper).toMatchSnapshot();
    
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
