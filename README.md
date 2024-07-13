# Frontend Assignment 
This web app is assignment for frontend role at Get Me Therapy

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Usage](#usage)
  - [How to Use](#how-to-use)
- [Screenshots](#screenshots)
- [Running the project](#runnig-the-project)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Quick Start](#quick-start)

## Overview
This web application includes a login and authentication system along with a unique tracking screen. Users can log in, sign up, and access a tracking screen featuring an analog clock, a speed control slider, and a share button for generating a unique URL. The tracking screen can optionally display random quotes that update every 5 seconds.

## Feature
### Onboard page
- It contain onboard slides informing user speciality of web app.
### Login and Authentication

- **Email and Password Login**: Users can log in using their email and password.
- **Google Login**: Users have the option to log in with Google.
- **Google Sign-Up**: New users can sign up and create an account using their Google account.
- **Email and Password Sign-Up**: A form is provided for users to create an account using their email and password.
- **Logout** :User can logout form postlogin page.

### Tracking/Post-Login Screen

- **Analog Clock**: An analog clock that runs anticlockwise, counting down from the current time (when the screen is opened) to 120 minutes earlier.
- **Speed Control Slider**: A slider that allows users to control the speed of the clock hands.
- **Share Button**: A button that generates a unique URL, enabling another user to view the clock and slider on the same page with the same slider configuration.
- **Random Quotes (Optional)**: Display random quotes that update every 5 seconds using an open API.

## Usage
This section provides instructions on how to use SWAAD project on your local machine.

### How to Use

-**Onboard**
  - when you first open the app you'll land on onboard page , it contain card like carousel which can be either forwarded or can be skipped altogether.
- **Registration**
  - Enter the email, username and password in the form feild. If you want to sign up via Google account then it can be done on clicking on Google icon.

- **Login**
  - If you are already registered to web app then you can login by entering the email adreess and password or you can sign in with your Google account.

- **Tracking**
  - Here you can share the link of time which is displayed via Analog clock by clicking on share button and it will get copied to clipboard and you can share it easily.
  - you can change the speed of Anticlokwise by changing the position of knob on range input.


## Screenshots
1- **Landing page**

![Screenshot (859)](https://github.com/chingu-voyages/v46-tier2-team-14/assets/72970648/418648dd-5d1b-4a44-a7f5-6a2a3f406821)

2- **Recipe Page**

![Screenshot (862)](https://github.com/chingu-voyages/v46-tier2-team-14/assets/72970648/9318e465-63db-4886-9c4b-d601d0967a16)
![Screenshot (863)](https://github.com/chingu-voyages/v46-tier2-team-14/assets/72970648/00bc17a5-6819-4578-bb61-e4cd2f860c6c)
![Screenshot (865)](https://github.com/chingu-voyages/v46-tier2-team-14/assets/72970648/868b96df-fa01-4881-8e2c-9d475818d373)
3- **Search Results**

![Screenshot (864)](https://github.com/chingu-voyages/v46-tier2-team-14/assets/72970648/8b552526-100d-48a7-b8bd-121279d4c131)

4- **Search Suggestions**

![Screenshot (861)](https://github.com/chingu-voyages/v46-tier2-team-14/assets/72970648/10cfbff2-3f68-4a71-9661-114898f614f5)

5- **Previous Searches**

![Screenshot (860)](https://github.com/chingu-voyages/v46-tier2-team-14/assets/72970648/6f0c3017-c9a4-45bd-825b-e4ec2c4c5531)

## Running the Project
These are the instructions on how to run the SWAAD on your local machine.

### Prerequisites

Ensure you have the following prerequisites installed on your machine:

- [Node.js](https://nodejs.org/en/download/): The JavaScript runtime environment for running the project.
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git): Version control system for cloning and managing the project.

### Installation

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/singhpriya147/assignment_GMT.git
 
    ```

2. **Install Dependencies:**
    ```bash
    npm install

### Dependencies

- [@headlessui/react](https://www.npmjs.com/package/@headlessui/react): ^1.7.17
- [@tanstack/react-query](https://www.npmjs.com/package/@tanstack/react-query): ^5.0.0
- [axios](https://www.npmjs.com/package/axios): ^1.5.1
- [react](https://www.npmjs.com/package/react): ^18.2.0
- [react-dom](https://www.npmjs.com/package/react-dom): ^18.2.0
- [react-icons](https://www.npmjs.com/package/react-icons): ^4.11.0
- [react-router-dom](https://www.npmjs.com/package/react-router-dom): ^6.16.0

### Quick Start
Follow these steps to quickly start the project:
1. **Run the Application:**
    ```bash
    npm run dev
    ```

2. **Access the Application:**
   Open your web browser and go to `http://localhost:3000` to access the SWAAD web app.
