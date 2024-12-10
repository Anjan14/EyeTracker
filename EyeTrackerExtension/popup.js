document.getElementById('startid').addEventListener('click', start);
document.getElementById('stopid').addEventListener('click', stop);
document.getElementById('capturePage').addEventListener('click', capturePage);
document.getElementById('saveHeatmap').addEventListener('click', saveHeatmap);

function start() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: startEyeTracking
        });
    });
}

function stop() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: stopEyeTracking
        });
    });
}

function capturePage() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: capturePageContent
        });
    });
}

function saveHeatmap() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: saveHeatmapContent
        });
    });
}

function startEyeTracking() {
    document.getElementById("startid").style.display = 'none';
    document.getElementById("stopid").style.display = 'block';
    GazeCloudAPI.StartEyeTracking();
}

function stopEyeTracking() {
    document.getElementById("startid").style.display = 'block';
    document.getElementById("stopid").style.display = 'none';
    GazeCloudAPI.StopEyeTracking();
}

function capturePageContent() {
    const canvas = document.getElementById('canvas');
    const screenshotImage = document.getElementById('screenshotImage');
    const pageWidth = document.documentElement.scrollWidth;
    const pageHeight = document.documentElement.scrollHeight;
    canvas.width = pageWidth;
    canvas.height = pageHeight;
    html2canvas(document.body, {
        width: pageWidth,
        height: pageHeight
    }).then(function(canvas) {
        screenshotImage.src = canvas.toDataURL("image/png");
    });
}

function saveHeatmapContent() {
    html2canvas(document.body).then(function(canvas) {
        const link = document.createElement('a');
        link.href = canvas.toDataURL("image/png");
        link.download = 'heatmap.png';
        link.click();
    });
}