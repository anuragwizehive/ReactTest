# ReactTest

This is a practical react test from wizehive as a part of the recruitment process

## Process to start

1. Clone repository
2. Checkout branch 'main'
3. Create a new branch from 'main' with your name: For eg: johndoe
4. Checkout the new branch
5. Complete the solution for the problem statement in your branch and commit and push your changes to your branch upstream  

## Problem statement 1

You have to create a website that allows the user to create a custom form similar to the functionality provided by Google forms. Following is a link for a sample form
<https://docs.google.com/forms/d/1RckGot7KW9YXaX2eJIOZgwDU-Q8sOqR74L4zx3Oeja8/edit>

Detailed requirements

* As a form builder, I should be able to navigate to a link 'basepath.../forms/{form-id}/edit' to be able to access the building view of the form. Here I should be able to accomplish the following:

  * Set the title of the form
  * Set the description of the form
  * By default have a question card open with 'Question type' selected as 'Multiple Choice' as the default choice
    * Should have the ability to add different 'Options' for the multiple choice question type
    * Should have the ability to remove an 'Option' from the options list for the multiple choice question
  * Should get an option to duplicate any created question
  * Should get an option to delete any created question
  * Should get an option to create a new question in the form

* As a form builder, following are the 'Question types' that I want to support. Each question type should have a configurable text field for the question. Also each question should have an additional toggle based configuration to make it required:
  * Text answer questions - Should provide one test field with a character limit of 399 letters
  * Multiple choice with single selection(Radio button options) - Should give ability to add multiple options limited to 10. A "Other" option should also be available. Each option should have a configurable text field for configuring the option text.
  * Multiple choice with single selection(Checkbox options). Everything similar to the radio button based multi choice question with the exception that it needs to allow the form submitter to select multiple answers
  * Dropdown based single selection answer - Should be able to add options to the list

* As a form builder, after I have setup my form I should be able to save the form.
* As an applicant, I should be able to navigate to a URL '/forms/{form-id}' to fill any saved form. Here I should be able to give all my answers and submit my response. There should be a check to make sure I have filled answers to all the required questions.
* As a form builder, I should be able to navigate to a URL 'forms/responses' and see a list of all the responses that any applicant has filled. I should be able to then navigate to any particular response at URL 'forms/responses/{response-id}' and see the answers to all the questions in the form as submitted by the applicant. Here though I should not be able to edit anything.

### Special notes

* For persistence, you can use REDUX and create a store in which you can store responses to a form as well as the forms
* If you are comfortable with creating APIs (Either rest or graphql or any other), then you can use persistence on the backend as well. Database design is not necessary and you can use a simple json file to store data as well. If you have time and are comfortable with DB as well then go ahead and use it for extra cookie points! :)

## PROBLEM STATEMENT 2

USER MANAGEMENT SYSTEM:

Create an single page application using react.
Add authentication page for User management system.

* Add route auth/login/
* On Login success navigate to list of user page
<https://reqres.in/api/login>
* On Login fail show some indication to the user via toaster
* Navigate to login page if non authenticated user tries to enter into the application

On landing page after login, show a list of Users.

* List should show only first 6 entries and should have pagination as per the total
number of pages
use <https://reqres.in/api/users?page=2> API
* List of users should have search functionality on the UI side
* On click of single user add functionality to edit user
* fetch available data of the user and populate it in the form
use <https://reqres.in/api/users/2> get API
* Use <https://reqres.in/api/users/2> post API to update changes in the
edited user
* Validate forms

Add a navigation drawer. Please find the attached image for reference.

* Navigation drawer should have options
* Users - for list of users - Add route/users
* Create user - use <https://reqres.in/api/users> post api - use route /create
* Table - use <https://reqres.in/api/unknown> get api, to show tabular data
present in the api - use route /table, Please make changes required in the json
to make data in the required format from the UI side

Please create Responsive UI for the application.

For Fullstack/Backend developers - Create rest apis using Nodejs/java, similar to collection -
<https://reqres.in/>

Images for referance: (No need to make it exactly same)

