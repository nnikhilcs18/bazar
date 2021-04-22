/**
 * @format
 */

 import 'react-native';
 import React from 'react';
 import App from '../App';
 
 // Note: test renderer must be required after react-native.
 //import renderer from 'react-test-renderer';
 import Enzyme ,{shallow} from 'enzyme';
 import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
 
 Enzyme.configure({adapter:new Adapter()})
 jest.mock("react-shallow-renderer",()=>{
   return {render:jest.fn()};
 })
 
 it('renders correctly', () => {
   shallow(<App />);
 });



// /**
//  * @format
//  */

// import 'react-native';
// import React from 'react';
// import App from '../App';

// // Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';

// it('renders correctly', () => {
//   renderer.create(<App />);
// });
