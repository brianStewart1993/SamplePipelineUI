import React from 'react';
import ReactDOM from 'react-dom';
import Login from '../Components/Login/Login';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { configure, mount, shallow } from 'enzyme';
import {expect} from 'chai';

/*it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Login />, div);
  ReactDOM.unmountComponentAtNode(div);
});*/

import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });

describe('<Login>', function () {
  it('should have an input for the email', function () {
    const wrapper = shallow(<Login/>);
    expect(wrapper.find('#user-name')).to.have.length(1);
  });

  it('should have an input for the password', function () {
    const wrapper = shallow(<Login/>);
    expect(wrapper.find('#password')).to.have.length(1);
  });

  it('should have a button for login', function () {
    const wrapper = shallow(<Login/>);
    expect(wrapper.find('#login-btn')).to.have.length(1);
  });

  it('should have a button for sign up', function () {
    const wrapper = shallow(<Login/>);
    expect(wrapper.find('#sign-up')).to.have.length(1);
  });

  /*it('should have props for handleEmailChange and fetchGravatar', function () {
    const wrapper = shallow(<Email/>);
    expect(wrapper.props().handleEmailChange).to.be.defined;
    expect(wrapper.props().fetchGravatar).to.be.defined;
  });*/
});
