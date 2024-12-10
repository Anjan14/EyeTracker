// content.js

// Function to handle eye tracking start
function startEyeTracking() {
    // Your eye tracking start logic here
    console.log('Eye tracking started');
}

// Function to handle eye tracking stop
function stopEyeTracking() {
    // Your eye tracking stop logic here
    console.log('Eye tracking stopped');
}

// Function to capture the page content
function capturePageContent() {
    const canvas = document.createElement('canvas');
    const pageWidth = document.documentElement.scrollWidth;
    const pageHeight = document.documentElement.scrollHeight;
    canvas.width = pageWidth;
    canvas.height = pageHeight;
    html2canvas(document.body, {
        width: pageWidth,
        height: pageHeight
    }).then(function(canvas) {
        const screenshotImage = canvas.toDataURL("image/png");
        console.log('Page captured', screenshotImage);
    });
}

// Function to save the heatmap content
function saveHeatmapContent() {
    html2canvas(document.body).then(function(canvas) {
        const link = document.createElement('a');
        link.href = canvas.toDataURL("image/png");
        link.download = 'heatmap.png';
        link.click();
        console.log('Heatmap saved');
    });
}

// Listen for messages from the popup script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'startEyeTracking') {
        startEyeTracking();
    } else if (request.action === 'stopEyeTracking') {
        stopEyeTracking();
    } else if (request.action === 'capturePageContent') {
        capturePageContent();
    } else if (request.action === 'saveHeatmapContent') {
        saveHeatmapContent();
    }
    sendResponse({status: 'done'});
});