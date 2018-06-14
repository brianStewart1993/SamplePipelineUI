Feature: User can login to application
  As a user
  I want to be able to login
  So that I can view list of users

  Scenario: Login to application
    Given I am on the login page
    When I enter my user name and password
    	And I click login
    Then I should be able to view user list
