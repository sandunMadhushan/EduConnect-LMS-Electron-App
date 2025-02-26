# 🎓 EduConnect-LMS

> 🌟 Empowering collaborative learning through technology and innovation

<div align="center">

 > **📥 Download as Standalone Application:**  

> EduConnect-LMS is available as a standalone desktop application built with Electron. Click the link below to get the latest version.

[Download the Desktop App from Releases](https://github.com/sandunMadhushan/EduConnect-LMS-Electron-App/releases)

---
OR
> Use web-based LMS here 👇

[![Live Demo](https://img.shields.io/badge/✨_Live_Demo-Click_Here-2ea44f?style=for-the-badge)](https://educonnect-lms.onrender.com/)

> **⚠️ Note:** The site may take up to **50 seconds** if inactive

</div>

EduConnect-LMS is a collaborative learning management system designed to facilitate interaction between students, demonstrators, lecturers, and study groups. The platform integrates AI-powered tools to enhance the learning experience while providing a robust environment for academic collaboration.

## ✨ Features

### 👥 User Management
- Account creation and management by administrators
- User account request system
- Secure login system for all users
- Role-based access control (Students, Demonstrators, Lecturers)

### 👥 Study Groups
- Create and join subject/topic-specific study groups
- Group creation by Demonstrators/Lecturers
- Student-initiated group requests with approval system
- Share and access study materials within groups
- Collaborative note-sharing platform

### 👨‍🏫 Demonstrator Support
- Group management by subject/topic and year
- Task assignment capabilities
- Study material distribution
- Performance feedback system
- Direct interaction with student groups

### ⚡ AI-Enhanced Learning
- AI-powered content summarization
- Upload and process study materials
- Automated summary generation for efficient learning

### 💬 Discussion Forums
- Topic-specific discussion boards
- Peer-to-peer interaction
- Demonstrator/Lecturer participation
- Question and answer system

### ⏰ Study Session Management
- Schedule individual or group study sessions
- Built-in study timer
- Session tracking and management
- Time management tools

### 💻 Desktop Application
- Cross-platform support (Windows, macOS, Linux)
- Offline access to certain features
- Native desktop notifications
- Enhanced performance compared to web version
- Automatic updates

## 💻 Technology Stack

### 🎨 Frontend
- HTML
- CSS
- JavaScript

### ⚙️ Backend
- Flask (Python web framework)

### 🔌 API Services
- OpenAI API for AI-powered content summarization
- RESTful API architecture for service integration
- API endpoints for user management, study groups, and content delivery
- Secure API authentication and authorization
- Microsoft Azure Communication Services for email notifications

### ⚡ Desktop App
- Electron framework for cross-platform desktop applications
- Node.js for desktop application logic
- Electron Builder for packaging and distribution
- Auto-updater for seamless updates

## 🚀 Installation

### Web Application

#### Prerequisites
- Python 3.8 or higher
- pip (Python package installer)
- Git

#### Step-by-Step Installation

1. Clone the repository:
```bash
git clone https://github.com/sandunMadhushan/EduConnect-LMS.git
```

2. Navigate to the project directory:
```bash
cd EduConnect-LMS
```

3. Create and activate a virtual environment:
**For Windows:**
```bash
# Create virtual environment
python -m venv virt
# Activate virtual environment
source virt/Scripts/activate
```

**For macOS/Linux:**
```bash
# Create virtual environment
python -m venv virt
# Activate virtual environment
source virt/bin/activate
```

4. Install dependencies:
```bash
pip install -r requirements.txt
```

5. Set up environment variables:
```bash
# Create .env file
touch .env
```

Add the following required environment variables to your `.env` file:
```bash
# Database Configuration
DB_USER=your_database_username
DB_PASSWORD=your_database_password
DB_NAME=your_database_name
DB_HOST=your_database_host

# OpenAI API Configuration
OPENAI_API_KEY=your_openai_api_key

# Application Configuration
UPLOAD_FOLDER=path_to_upload_folder
SECRET_KEY=your_secret_key

# Microsoft Azure Communication Services Configuration
CONNECTION_STRING=your_azure_communication_services_connection_string
SENDER_ADDRESS=your_sender_email_address
```

Environment Variables Description:
- `DB_USER`: Database username for authentication
- `DB_PASSWORD`: Database password for authentication
- `DB_NAME`: Name of the database to be used
- `DB_HOST`: Database host address
- `OPENAI_API_KEY`: API key for OpenAI services
- `UPLOAD_FOLDER`: Path where uploaded files will be stored
- `SECRET_KEY`: Secret key for Flask application security
- `CONNECTION_STRING`: Connection string for Azure Communication Services
- `SENDER_ADDRESS`: Sender email address for Azure Communication Services

6. Run the application:
```bash
flask run
```

The application should now be running at `http://localhost:5000`

### Desktop Application

#### Prerequisites
- Node.js 14.x or higher
- npm or yarn package manager
- Git

#### Step-by-Step Installation for Development

1. Clone the Electron app repository:
```bash
git clone https://github.com/sandunMadhushan/EduConnect-LMS-Electron-App.git
```

2. Navigate to the project directory:
```bash
cd EduConnect-LMS-Electron-App
```

3. Install dependencies:
```bash
# Using npm
npm install

# Using yarn
yarn install
```

4. Create a `.env` file in the root directory:
```bash
touch .env
```

Add the following required environment variables to your `.env` file:
```bash
# API Configuration
API_URL=your_api_url
```

5. Run the application in development mode:
```bash
# Using npm
npm run start

# Using yarn
yarn start
```

#### Building the Desktop Application

To build the application for distribution:

```bash
# Using npm
npm run build

# Using yarn
yarn build
```

This will create distributable packages in the `dist` directory.

#### Configuration Files

The Electron application uses several important configuration files:

1. **package.json**: Contains dependencies, scripts, and Electron Builder configuration:
```json
{
  "name": "educonnect-lms",
  "version": "1.0.0",
  "description": "Collaborative Learning Management System",
  "main": "main.js",
  "scripts": {
    "start": "electron .",
    "build": "electron-builder",
    "release": "electron-builder --publish always"
  },
  "build": {
    "appId": "com.educonnect.lms",
    "productName": "EduConnect LMS",
    "mac": {
      "category": "public.app-category.education"
    },
    "win": {
      "target": [
        "nsis"
      ]
    },
    "linux": {
      "target": [
        "AppImage",
        "deb"
      ],
      "category": "Education"
    },
    "publish": {
      "provider": "github",
      "owner": "sandunMadhushan",
      "repo": "EduConnect-LMS-Electron-App"
    }
  },
  "dependencies": {
    "electron-updater": "^5.0.1",
    "electron-log": "^4.4.8"
  },
  "devDependencies": {
    "electron": "^22.0.0",
    "electron-builder": "^23.6.0"
  }
}
```

2. **main.js**: The main Electron process file that handles window creation, app lifecycle, and updates:
```javascript
// Example structure (key parts)
const { app, BrowserWindow, ipcMain } = require('electron');
const { autoUpdater } = require('electron-updater');
const log = require('electron-log');

// Configure logging
log.transports.file.level = 'info';
autoUpdater.logger = log;

// Create main window function
function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  mainWindow.loadURL('https://educonnect-lms.onrender.com/');
  // Or for local development:
  // mainWindow.loadFile('index.html');
}

// App ready event
app.whenReady().then(() => {
  createWindow();
  autoUpdater.checkForUpdatesAndNotify();
});

// App lifecycle events
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

// Auto-updater events
autoUpdater.on('update-available', () => {
  log.info('Update available');
});

autoUpdater.on('update-downloaded', () => {
  log.info('Update downloaded');
});
```

### Email Sending on Registration

To enable email sending when a user registers, ensure you have the Azure Communication Services set up. The application will use the connection string and sender email specified in the .env file to send registration confirmation emails.

### Deactivating the Virtual Environment
When you're done working on the project, you can deactivate the virtual environment:
```bash
deactivate
```

### Troubleshooting

If you encounter any issues during installation:

#### Web Application
1. Make sure you have the correct Python version installed
2. Ensure all prerequisites are met
3. Check if the virtual environment is activated (you should see `(virt)` in your terminal)
4. Try removing the virtual environment and starting fresh:
   ```bash
   # Windows
   rmdir /s /q virt
   
   # macOS/Linux
   rm -rf virt
   ```

#### Desktop Application
1. Make sure you have the correct Node.js version installed
2. Try clearing npm/yarn cache:
   ```bash
   # npm
   npm cache clean --force
   
   # yarn
   yarn cache clean
   ```
3. For build issues, check if all required dependencies are installed:
   ```bash
   # Windows
   npm install --global windows-build-tools
   
   # macOS
   xcode-select --install
   
   # Linux
   sudo apt-get install build-essential
   ```

## 🔄 Development Status

This project is currently under active development. New features and improvements are being added regularly.

## 📩 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.
