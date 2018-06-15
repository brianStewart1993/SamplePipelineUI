import React from 'react';
import ReactDOM from 'react-dom';
import SignUp from '../Components/SignUp/SignUp';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { configure, mount, shallow } from 'enzyme';
import {expect} from 'chai';



import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });

describe('<SignUp>', function () {
  it('should have an input for the username', function () {
    const wrapper = shallow(<SignUp />);
    expect(wrapper.find('#user-name')).to.have.length(1);
  });

  it('should have an input for the password', function () {
    const wrapper = shallow(<SignUp />);
    expect(wrapper.find('#password')).to.have.length(1);
  });

  it('should have a button for sign up', function () {
    const wrapper = shallow(<SignUp />);
    expect(wrapper.find('#sign-up')).to.have.length(1);
  });

  /*it('should have props for handleEmailChange and fetchGravatar', function () {
    const wrapper = shallow(<Email/>);
    expect(wrapper.props().handleEmailChange).to.be.defined;
    expect(wrapper.props().fetchGravatar).to.be.defined;
  });*/
});

describe('checkLoginFields',function (){
  it('should set state invalid if username empty',function(){
    const wrapper = shallow(<SignUp />);

    wrapper.setState({ username: null, password: "" });
    wrapper.instance().checkLoginFields();
    expect(wrapper.state().isValid).to.equal(true);
  });
});

describe('handleUsernameChange',function (){
  it('should set the username in the state',function(){
    const wrapper = shallow(<SignUp />);
    const username = wrapper.find('#user-name');
    username.simulate('change', {
      target: { value: 'username' }
    });
    expect(wrapper.state().username).to.equal('username');
  });
});

describe('handlePasswordChange',function (){
  it('should set the password in the state',function(){
    const wrapper = shallow(<SignUp />);
    const password = wrapper.find('#password');
    password.simulate('change', {
      target: { value: 'password' }
    });
    expect(wrapper.state().password).to.equal('password');
  });

  /*it('should set the password length validity to false if password length is less than 8',function(){
    const wrapper = shallow(<Login />);
    const password = wrapper.find('#password');
    password.simulate('change', {
      target: { value: 'pass' }
    });
    expect(wrapper.state().isPasswordLengthValid).to.equal(false);
  });*/
});

describe('validate',function (){
  it('should return true if username and password is valid',function(){
    const wrapper = shallow(<SignUp />);
    wrapper.setState({ username: "username", password: "password" });
    const isValid = wrapper.instance().validate();
    expect(isValid).to.equal(true);
  });
  //Username Empty
  it('should return false if username is empty',function(){
    const wrapper = shallow(<SignUp />);
    wrapper.setState({ username: "", password: "password" });
    const isValid = wrapper.instance().validate();
    expect(isValid).to.equal(false);
  });

  it('should set is valid to false in state if username is empty',function(){
    const wrapper = shallow(<SignUp />);
    wrapper.setState({ username: "", password: "password" });
    const isValid = wrapper.instance().validate();
    expect(wrapper.state().isValid).to.equal(false);
  });

  it('should set error message in state if username empty',function(){
    const wrapper = shallow(<SignUp />);
    wrapper.setState({ username: "", password: "password" });
    const isValid = wrapper.instance().validate();
    const errorMessage = "User Name and Password is required";
    expect(wrapper.state().errorMessage).to.equal(errorMessage);
  });
  //Password Empty
  it('should return false if password is empty',function(){
    const wrapper = shallow(<SignUp />);
    wrapper.setState({ username: "username", password: "" });
    const isValid = wrapper.instance().validate();
    expect(isValid).to.equal(false);
  });

  it('should set is valid to false in state if password is empty',function(){
    const wrapper = shallow(<SignUp />);
    wrapper.setState({ username: "username", password: "" });
    const isValid = wrapper.instance().validate();
    expect(wrapper.state().isValid).to.equal(false);
  });

  it('should set error message in state if password empty',function(){
    const wrapper = shallow(<SignUp />);
    wrapper.setState({ username: "username", password: "" });
    const isValid = wrapper.instance().validate();
    const errorMessage = "User Name and Password is required";
    expect(wrapper.state().errorMessage).to.equal(errorMessage);
  });


});
