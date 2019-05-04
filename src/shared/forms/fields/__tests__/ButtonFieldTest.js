import React from 'react';
// import { expect } from 'chai';
import { shallow, render } from 'enzyme';
import renderer from 'react-test-renderer';
import ButtonField from '../ButtonField';


const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');


// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });
describe("Main component", () => {

    let wrapper;
    let onClickMock = jest.fn();

    beforeAll(() => {
        wrapper = shallow(<ButtonField value={"GO"} type={"button"} callback={onClickMock} />);
    });

    it('render correctly text component', () => {
        expect(wrapper).toMatchSnapshot();

    });

    it("should handle click event ", () => {
        wrapper.find("button").simulate('click');
        expect(onClickMock).toHaveBeenCalled();
    
      });

});
