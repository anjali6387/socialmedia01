## Objective: ##
Create a system that allows users to submit their name, social media handle, and upload multiple images. The submitted data will be displayed on an admin dashboard, showing each user's name, social media handle, and all images they have uploaded.

Admin credentials username: admin01 and password: admin@01

## File Structure ##


- **project/**: Main project directory.
  - **.git/**: Git directory for version control.
  - **backend/**: Main backend directory(node.js)
  - **frontend/**: Frontend directory(react.js)


## Features: ##
User submission form for name, social media handle, and image uploads.
Data is stored in MongoDB.
Admin login (username: admin01, password: admin@01).
Admin dashboard to view all user submissions.

## Technology used: #
Frontend: React, Axios
Backend: Node.js, Express, MongoDB, Mongoose, Multer
Styling: CSS



## Workflow

### Backend Setup

1. **Initialize Backend:**
   - Navigate to the `backend` folder:
     ```bash
     cd backend
     ```
   - Initialize Node.js project:
     ```bash
     npm init -y
     ```

2. **Install Dependencies:**
   ```bash
   npm install express mongoose multer cors body-parser dotenv
   ```

3. **Setup Environment Variables:**
   Create a .env file in backend
   Setup your MongoDB URI

4. **Create server.js:**
   Setup Express server, connect to MongoDB, and define routes.
   Define Models and Routes:
   Create models/User.js for user schema.
    Create models/Admin.js for Admin schema.
   Create routes/userRoutes.js for handling user submissions and admin login.
   
6. **Start Backend Server:**
```bash 
   npm start
```
### Frontend Setup
1. **Initialize Frontend:**

Navigate to the frontend folder:
  ```bash
cd ../frontend
```
2. **Create React app or set up manually:**
```bash

npx create-react-app
```
3. **Install Dependencies:**

```bash

npm install axios
```
4. **Create Components:**

UserForm.js: Form for user submission (name, social media handle, images).
UserForm.jsx: For sending data from user.
AdminLogin.jsx: Admin login page.
AdminDashboard.jsx: Admin dashboard to view user submissions.

5.**Start Frontend Development Server:**

```bash

npm start
```

### User Submission:

Access the user form, fill in details, and submit.
Data is stored in MongoDB.
Admin Dashboard:
Log in with credentials (admin/admin@1234).
View all user submissions in the dashboard.


## Outputs

1. ### User form:
   Where the user enters the details


2. ### MongoDB:
   When user enters details it is saved in backend


3. ### Admin Login
Where the admin can login to see all data 
Default username admin01 and password: admin@01


4. ### Admin Dashbord
   Where all data is visible



### The front end is deployed in vercel : https://socialmedia01-teal.vercel.app/
### The backend is deployed in render

