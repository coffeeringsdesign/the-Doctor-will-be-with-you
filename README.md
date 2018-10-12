# The Doctor will be with You Shortly

#### By Kendra Kelly

## Description

This project is to build a User Interface that allows a visitor to search through an API for available Doctors.

*  A user should be able to enter a medical issue to receive a list of doctors in the Portland area that fit the search query.
*  A user should be able to to enter a name to receive a list of doctors in the Portland area that fit the search query.
*  If the query response includes any doctors, the following information should be included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients (the API provides this data).
*  If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is.
*  If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. (This is not an error so it should be handled separately from any errors.)

## Specs

| Behavior | input | output |
|----------|-------|--------|
| A visitor enters a medical issue and gets back a list of Doctors | Enters: "Cough" | Dr. Mancini |
| A visitor enters a name and gets back a list of Doctors | Enters: "Mancini" | Dr. Mancini |
| If a result is returned they should get back this info about the Doctor: Full Name, Address, Phone Number, Website, New Patient Status | Enters: "Cough" | Dr. Michael Mancini, 1432 Melrose Place Dr, 423-242-3435, www.MelroseManor.com, Accepting New Patients |
| If the API call results in an error they get a notification of an error | Enters: "Mancini" | Error: Broken! |
| If the search doesn't result in any Doctors they get back a notification saying so | Enters: "Mancini" | We are sorry there are no Dr. Mancini's here |

## Setup/Installation Requirements
Using Command Line:
1. ``git clone https://github.com/coffeeringsdesign/Super-Galactic-Age-Calculator.git `` to clone the site.
2. ``cd ~`` to navigate to base directory
3. ``cd Desktop `` to navigate to your desktop
4. ``cd Super-Galactic-Age-Calculator`` to enter the site folder
5. ``npm init -y`` to initialize node
6. ``npm install`` to install all webpack dependencies
7. ``npm run start`` this will webpack and immediate pop open the site on your brower. I recommend Chrome.
8. Use Atom to edit any html, javascript, or sass.
9. If setup like above all changes made and saved successfully will appear automatically into your browser window.

## Contribution Requirements

1. Clone the repo
1. Make a new branch
1. Commit and push your changes
1. Create a PR

## Technologies Used

* JavaScript
* Node.js
* jQuery 3.3.1
* Bootstrap 4.1.3
* Babel
* Webpack
* ESLint
* Jasmine
* Karma

## Suuport & Contact Details

Please feel free to get in touch. Reach out to me at kendra@coffeeringsdesign.com.

## License

This software is licensed under the MIT license.

Copyright (c) 2018 **Kendra Kelly**
