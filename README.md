### About Project

Stage Three HNGX Internship

Task: Develop a Drag-and-Drop Image gallery using React or Next Js
Objective: You will implement a fully functional and responsive image gallery that showcases a collection of images in a visually appealing way.
A user should be able to Login to the gallery page. Authenticated users should be able to use the Drag-and-Drop feature, they should be able to select and drag images, effortlessly rearranging them within the gallery.

#### Requirements:

- Simple Authentication:
  This means login with this email and password:
  UserName: user@example.com
  Password: 1Password
  The authentication form fields should have proper validation setup, with proper error messages

- Image Display
- Loading state
- Search Functionality
- Drag-and-Drop
- User-friendly Feedback
- Responsive Design
- Design Flexibility

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:

- node v18.17.1
- Pixabay API key <a
          href='https://pixabay.com/api/docs/'
          target='_blank'
          referrerPolicy='no-referrer'
        >
  visit
  </a>
- Firebase account + project config keys <a href="https://firebase.googgle.com"  target='_blank'
          referrerPolicy='no-referrer'>visit</a>

### Setup

Clone this repository to your desired folder:

```
  cd my-folder
  git clone git@github.com:lazee7/image-gallery.git
```

### Install

Install this project with:

```sh
  cd image-gallery
  npm install
```

Create a .env file for environment variables. sample below

```
VITE_API_KEY='your pixabay api key'
VITE_FIREBASE_API_KEY='firebase api key'
VITE_AUTH_DOMAIN='firebase auth domain'
VITE_PROJECT_ID='firebaseproject id'
VITE_STORAGE_BUCKET='firebase storage bucket'
VITE_MESSAGING_SENDER_ID='firebase messaging sender id'
VITE_APP_ID='firebase app id'
```

### Usage

To run the project, execute the following command:

```sh
  npm run dev
```
