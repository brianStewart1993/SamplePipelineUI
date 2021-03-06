import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import App from './App';

import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Renders correct layout', () => {
  /*const component = renderer.create(
    <Link page="http://www.facebook.com">Facebook</Link>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();*/

  // when
  const component = shallow(<App />);
  // then
  expect(component.getElements()).toMatchSnapshot();
});
