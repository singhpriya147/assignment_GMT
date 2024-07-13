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
1- **Onboard Page**

![Screenshot (958)](https://github.com/user-attachments/assets/8089828b-0ca1-4297-adc4-e7f1f9ebdcd2)

![Screenshot (959)](https://github.com/user-attachments/assets/6b59ab7f-d2d4-427f-876c-b2b3aa650a47)

![Screenshot (960)](https://github.com/user-attachments/assets/bf073726-c0bb-4a77-a745-39cf76cd5d6d)

2- **Registration Page**

![Screenshot (967)](https://github.com/user-attachments/assets/564ba0c6-87f2-428c-a2ec-7eea85f62598)

3- **Login Page**


![Screenshot (961)](https://github.com/user-attachments/assets/cf0b905c-38fc-4bb4-bf40-ef2533cbc296)

![Screenshot (962)](https://github.com/user-attachments/assets/e4191a74-2a32-401d-9415-0bdde03a309a)


4- **Post login page**

![Screenshot (963)](https://github.com/user-attachments/assets/24e34285-ab7f-4b99-8cb4-7b68b4801849)

5- **Tracking page**

![Screenshot (964)](https://github.com/user-attachments/assets/9b494816-7940-40b4-8ee5-0fad2ff7d261)

![Screenshot (965)](https://github.com/user-attachments/assets/c06af6c6-8e4e-426c-9b88-2dea1c6b749c)

![Screenshot (966)](https://github.com/user-attachments/assets/8c3d0d6b-96f9-4288-a8a0-aa1e34a06eb7)

## Running the Project
These are the instructions on how to run the asssignment_GMT on your local machine.

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



### Quick Start
Follow these steps to quickly start the project:
1. **Run the Application:**
    ```bash
    npm run dev
    ```

2. **Access the Application:**
   Open your web browser and go to `http://localhost: 5173` to access the  web app.
