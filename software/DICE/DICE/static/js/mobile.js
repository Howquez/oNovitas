console.log('mobile ready');

function isTouchDevice() {
    return ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
}

// Set the hidden input field's value to 'true' or 'false'
document.getElementById('touch_capability').value = isTouchDevice();

function getDeviceTypeByScreen() {
    if (window.matchMedia("(max-width: 767px)").matches) {
        return 'Mobile';
    } else if (window.matchMedia("(max-width: 1024px)").matches) {
        return 'Tablet';
    } else {
        return 'Desktop';
    }
}

document.getElementById('device_type').value = getDeviceTypeByScreen();

// Capture screen resolution
function getScreenResolution() {
    return window.screen.width + 'x' + window.screen.height;
}

// Set the screen resolution in the hidden input field
document.getElementById('screen_resolution').value = getScreenResolution();