import { Given, When, Then } from 'cucumber';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import LoginForm from '../../../../Components/Login/Login';
import App from '../../../../App';
import { configure, mount, shallow } from 'enzyme';
import {expect} from 'chai';
import { MemoryRouter as Router, Route, Link } from "react-router-dom";


import SignUp from '../../../../Components/SignUp/SignUp';
import UserList from '../../../../Components/User/UserList';
import UserEdit from '../../../../Components/User/UserEdit';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });

const wrapper =  mount(

    	

    	<Router initialIndex={0} initialEntries={[ '/' ]}>

	        <div id="app">
	          <AppBar position="static" color="primary">
	            <Toolbar>
	              <Typography  variant="title" color="inherit">
	                Cash Secured Portal
	              </Typography>

	                <Button color="inherit" className="logout-btn"  >
	                  <Link to="/">
	                    Logout
	                  </Link>
	                </Button>

	            </Toolbar>
	          </AppBar>
	          <Route exact path="/" component={LoginForm} />
	          <Route path="/sign-up" component={SignUp} />
	          <Route path="/user-list" component={UserList} />
	          <Route path="/edit-user/:id" component={UserEdit} />

	        </div>
      	</Router>
    	);

Given("I am on the login page",function() {
	//console.log(wrapper.debug());
    expect(wrapper.find('LoginForm')).to.have.length(1);
});

When("I enter my user name and password",function() {
    wrapper.setState({ username: "cashuser10", password: "password" });
});

When("I click login",function() {
	const loginBtn = wrapper.find("#login-btn").at(0);
	loginBtn.simulate('click');

});



Then("I should be able to view user list",{timeout: 60 * 1000},function(callback) {

	//console.log(wrapper.debug());	
	setTimeout(()=>{
		
		//callback(true);
	},6000);	

	expect(wrapper.find('Typography')).to.have.length(3);
	
				
		
	
    
});
