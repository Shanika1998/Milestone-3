# Milestone 3 Project: Diana's Adopt-A-Cat
Diana's Adopt-A-Cat is an app where users can browse and adopt a cat. This application is a full-stack MERN (MongoDB, Express.js, React, Node.js) web application. It allows users to view available cats and submit adoption forms.

## Features 

View Cats: Browse through a list of available cats.
Adoption Form: Fill out an adoption form to express interest in adopting a cat.
User Authentication: Sign up and log in functionalities for users. (TBD)
Individual Cat Details: View detailed information about each cat.
Responsive Design: Mobile-friendly interface.

### Technologies Used 
MongoDB: Database for storing cat and user information.
Express.js: Backend framework for handling HTTP requests.
React: Frontend framework for the user interface.
Node.js: Backend JavaScript runtime environment.
JWT: JSON Web Tokens for user authentication.


### git clone: https://github.com/Shanika1998/Milestone-3.git



### API (http://localhost:5000)
| Method | Path                                 |  Purpose                                   |
| ------ | ------------------------------------ | -----------------------------------------  |
| GET    | /                                    | Home page                                  |
| GET    | /cats                                | Cats  index  page                          |
| GET    | /cats/:id                            | Details about a particular cat based on id |
| POST   | /adopt/                              | Submit a new  adoption form                |
| GET    | /adopt/                              | See adoption forms (backend)               |
| GET    | /users                               | get all Users                              |
| GET    | /users/:id                           | Details about a particular user based on id|
| GET    | /users/current-user                  | Login user, if found in database           |
| POST   | /authentication/signup               | Create a new User                          |
| POST   | /authentication/login                | Login existing user                        |


### App (http://localhost:3000)
| Path                  | Component                    | Purpose                                                                         |
| --------------------- | -------------------------    | ------------------------------------------------------------------------------- |
| /                     | `Home.js`                    | Home page                                                                       |
| /signup               | `users/signupForm.jsx`       | Form for creating a user                                                        |
| /login                | `users/LoginForm.jsx`        | Login a user                                                                    |
| /cats                 | `components/allCats.jsx`     | Display of cats                                                                 |
| /cats/:id             | `components/catDetails.jsx`  | Display of of individual cat                                                    |
| /adopt                | `components/adoptionForm.jsx`| Form to pick a cat to adopt, as well as inputting additional info               |
| /about                | `components/About.jsx `      | Displays the "About Us" Page                                                    |
|/faq                   | `components/faq.jsx`         | Displays the "Frequently Asked Questions" Page                                  |
                                                 
