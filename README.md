# EyeTracker

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Software Requirements](#software-requirements)
  - [Functional Requirements](#functional-requirements)
  - [Non-Functional Requirements](#non-functional-requirements)
- [Contributing](#contributing)
- [License](#license)
- [Need to Implement](#need-to-implement)

## Introduction
EyeTracker is a web-based application that uses webcam input to track eye movements and generate heatmaps. This project aims to provide real-time feedback and insights based on user behavior analysis.

## Features
- Real-time eye tracking using webcam
- Heatmap generation to visualize eye movement
- Save heatmaps as image files

## Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/Anjan14/EyeTracker.git
    ```
2. Navigate to the project directory:
    ```sh
    cd EyeTracker
    ```
3. Open `testwebpage.html` in your preferred web browser.

## Usage
1. Open `testwebpage.html` in a web browser.
2. Click the "Start eye tracking" button to begin tracking.
3. Use the "Capture Page" button to capture the current page view.
4. Use the "Save Heatmap" button to save the generated heatmap as an image file.

## Software Requirements

### Functional Requirements
1. **User Authentication and Permission**: The system must ask the user for permission to use the webcam for eye-tracking. It should include a consent form and user agreement.
2. **Collect Eye-Tracking Data**: The software will capture real-time eye movement data using the webcam. It should be able to detect when the user is no longer looking at the screen.
3. **Data Pre-processing and Mining**: The system must analyze the collected data to identify patterns in user behavior.
4. **Data Analysis**: Provide real-time feedback or insights based on the analysis.
5. **Data Storage and Privacy**: The system should securely store user data locally or on a cloud service. It should ensure the privacy of user data and prevent vulnerabilities of data leaks.
6. **Optimization for System Performance**: Implement smart algorithms to optimize the software. Ensure it supports multiple platforms.

### Non-Functional Requirements
1. **Usability**: The system should have an intuitive and easy-to-use interface.
2. **Reliability**: The system should be robust, with minimal crashes or data loss incidents.
3. **Security**: Ensure data transmissions are encrypted, especially if transferred to the cloud.

## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

## Need to Implement
- Chrome Extension for easy access and usage.
