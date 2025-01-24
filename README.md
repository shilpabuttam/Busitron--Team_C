# Notification System Project

This is a simple **Notification System** built using **React.js** for the frontend, **Node.js/Express** for the backend, and **MongoDB** for storing user preferences and notifications. The project allows users to set notification preferences and receive notifications via in-app messages or email based on their preferences.

## Features

- **User Preferences**: Users can set their notification preferences (email, genres, categories, and notification type).
- **Send Notifications**: Admin can trigger notifications based on user preferences, which are then either sent via email or displayed in-app.
- **Responsive Design**: The project is fully responsive, ensuring a good user experience on both desktop and mobile devices.
- **Error Handling**: The app provides error messages for failed requests (e.g., failed to save preferences or fetch notifications).

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js with Express
- **Database**: MongoDB
- **Email Notifications**: NodeMailer (Gmail API)
- **CSS**: Plain CSS with responsive design

## Setup and Installation

### Prerequisites

Before you start, ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/) (v12.x or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (installed locally or use MongoDB Atlas for a cloud database)
- [Git](https://git-scm.com/) (for version control)

### Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/notification-system.git
cd notification-system
```

### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory to store sensitive environment variables like your email credentials for NodeMailer. Add the following fields:

   ```bash
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```

   (To create an **App Password** for Gmail, follow [this guide](https://support.google.com/accounts/answer/185833?hl=en)).

4. Start the server:

   ```bash
   node server.js
   ```

   The server will run on `http://localhost:5000`.

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the React development server:

   ```bash
   npm start
   ```

   The frontend will run on `http://localhost:3000`.

### MongoDB Setup

- Ensure MongoDB is running locally on `mongodb://127.0.0.1:27017/notifications`, or connect to MongoDB Atlas if you prefer using the cloud.
- If you're using a local MongoDB instance, start it with:

  ```bash
  mongod --dbpath /path/to/data/db
  ```

---

## How to Use

### Setting Preferences

1. Open the application in the browser (frontend).
2. Navigate to the **Set Notification Preferences** form.
3. Fill in your **email**, select your preferred **genres**, **categories**, and **notification type** (either In-App or Email).
4. Click **Save Preferences**. Your preferences will be stored in MongoDB.

### Sending Notifications

1. As an admin, you can trigger sending notifications by calling the `/api/send-notifications` API endpoint.
2. Notifications will be sent to users based on the **genres** and **categories** they selected. Notifications can either be in-app (stored in the database) or emailed (using NodeMailer).

### Fetching Notifications

1. Users can view their notifications by going to the **Notifications** page.
2. Notifications will be fetched using their **email** and displayed in the app. You can check for new notifications in real-time.

---

## Screenshots

### Preferences Form

![Preferences Form](./screenshots/preferences-form.png)

### Notification Panel

![Notification Panel](./screenshots/notification-panel.png)

---

## API Endpoints

### POST `/api/add-preference`
- **Description**: Adds a user’s notification preferences.
- **Request Body**:

  ```json
  {
    "userEmail": "user@example.com",
    "genres": ["Action", "Drama"],
    "categories": ["Movies", "Books"],
    "notificationType": "in-app"
  }
  ```

### POST `/api/send-notifications`
- **Description**: Triggers sending notifications based on genres and categories.
- **Request Body**:

  ```json
  {
    "newContentGenre": "Action",
    "newContentCategory": "Movies",
    "message": "New content available!"
  }
  ```

### GET `/api/get-notifications/:email`
- **Description**: Fetches notifications for a specific user.
- **URL Parameter**: `email` (The user's email address)

---

## Contributing

Contributions are welcome! Feel free to fork the repository, make changes, and submit pull requests. Here's how you can contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add feature'`).
5. Push to the branch (`git push origin feature-name`).
6. Open a pull request.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- [React.js](https://reactjs.org/) for building the UI.
- [Node.js](https://nodejs.org/en/) and [Express](https://expressjs.com/) for backend development.
- [MongoDB](https://www.mongodb.com/) for database management.
- [NodeMailer](https://nodemailer.com/) for email notifications.

---
