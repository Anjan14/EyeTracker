# EyeTracker
## Software Requirements
### Functional Requirements
1. User Authentication and Permission: the system must ask the user for permission to use webcam for eye-tracking. Should include a consent form, and user agreement. 
2. Collect Eye-Tracking Data: the software will capture real time eye movement data using the webcam. Should be able to detect when the user is no longer looking at the screen. 
3. Data Pre-processing and Mining: system must analyze the collected data to identify patterns in user behavior. 
4. Data Analysis: Provide real time feedback or insights based on the analysis. 
5. Data Storage and Privacy: the system should securely store user data locally or on a cloud service. It should ensure privacy of user data and prevent vulnerabilities of data leak. 
6. Optimization for system performance: should implement smart algorithms to optimize the software. Ensure it supports multi platforms. 
### Non -Functional Requirements:
1. Usability: System should have an intuitive and easy-to-use interface. 
2. Reliability: system should be robust, with minimal crashes or data loss incidents.
3. Security: ensure data transmissions are encrypted, specially if transferred to the cloud. 

#WIP
EyeTracker
Table of Contents
Introduction
Features
Installation
Usage
Software Requirements
Functional Requirements
Non-Functional Requirements
Contributing
License
Need to Implement
Introduction
EyeTracker is a web-based application that uses webcam input to track eye movements and generate heatmaps. This project aims to provide real-time feedback and insights based on user behavior analysis.  
Features
Real-time eye tracking using webcam
Heatmap generation to visualize eye movement
Save heatmaps as image files
Installation
Clone the repository:
git clone https://github.com/Anjan14/EyeTracker.git
Navigate to the project directory:
cd EyeTracker
Open testwebpage.html in your preferred web browser.
Usage
Open testwebpage.html in a web browser.
Click the "Start eye tracking" button to begin tracking.
Use the "Capture Page" button to capture the current page view.
Use the "Save Heatmap" button to save the generated heatmap as an image file.
Software Requirements
Functional Requirements
User Authentication and Permission: The system must ask the user for permission to use the webcam for eye-tracking. It should include a consent form and user agreement.
Collect Eye-Tracking Data: The software will capture real-time eye movement data using the webcam. It should be able to detect when the user is no longer looking at the screen.
Data Pre-processing and Mining: The system must analyze the collected data to identify patterns in user behavior.
Data Analysis: Provide real-time feedback or insights based on the analysis.
Data Storage and Privacy: The system should securely store user data locally or on a cloud service. It should ensure the privacy of user data and prevent vulnerabilities of data leaks.
Optimization for System Performance: Implement smart algorithms to optimize the software. Ensure it supports multiple platforms.
Non-Functional Requirements
Usability: The system should have an intuitive and easy-to-use interface.
Reliability: The system should be robust, with minimal crashes or data loss incidents.
Security: Ensure data transmissions are encrypted, especially if transferred to the cloud.
Contributing
Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes.
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature-branch).
Open a pull request.
License
This project is licensed under the MIT License. See the LICENSE file for details.
Need to Implement
Chrome Extension for easy access and usage.
