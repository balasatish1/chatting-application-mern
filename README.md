# Chatting Application (MERN Stack)

## Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | React.js, Vite , Axios, TailwindCSS / CSS |
| **Backend** | Node.js, Express.js, MongoDB (Mongoose)|
| **Development** | VS Code, npm |


## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js (Latest Version)](https://nodejs.org/)
- [Visual Studio Code](https://code.visualstudio.com/)
- Internet

## Project Setup & Execution Guide

Follow the steps below to set up and run the **Chatting Application (MERN Stack)** smoothly in **Visual Studio Code**.

---

### Step 1: Open the Project in VS Code

1. Launch **Visual Studio Code** on your system.  
2. Open the project folder named **`chatting-application-mern`** by selecting:  
   **File → Open Folder → chatting-application-mern**

---

### Step 2: Open Two Terminals in VS Code

Once the project is opened in VS Code:

1. Open two integrated terminals.  
   You can do this by:
   - Navigating to the menu bar → **Terminal → New Terminal**, or  
   - Using the keyboard shortcut: **<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>`</kbd>**

2. You will now have **two terminals** open inside VS Code:
   - **Terminal 1:** For running the **Frontend**
   - **Terminal 2:** For running the **Backend**

---

### Step 3: Navigate to the Project Folders

Use the following commands to move into the respective directories:

- **In Terminal 1 (Frontend):**
  ```bash
  cd frontend
- **In Terminal 2 (Backend):**
  ```bash
  cd backend
---
### Step 4: Install Required Dependencies (First-Time Setup Only)

Before running the project for the first time, install the required dependencies for both frontend and backend using the following command:

- **In Terminal 1 (Frontend):**
  ```bash
  npm install
- **In Terminal 2 (Backend):**
  ```bash
  npm install
---

### Step 5: Run the Application

It’s recommended to start the backend first, followed by the frontend.

- **In Terminal 2 (Backend):**
  ```bash
  npm start
- **In Terminal 1 (Frontend):**
  ```bash
  npm run dev
---

### 🧾 Expected Output

Once both the **backend** and **frontend** are running successfully, you’ll see the following outputs in your VS Code terminals:

---

#### 🧠 Backend Output
- **In Terminal 2 (Backend):**
  ```bash
  Server running on port 5001
  Connected to MongoDB Atlas
- **In Terminal 1 (Frontend):**
  ```bash
  VITE vX.X.X  ready in Xs
  Local:   http://localhost:5173/
---