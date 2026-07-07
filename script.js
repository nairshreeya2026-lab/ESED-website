// Grab the HTML elements we need to control
const video = document.getElementById('myVideo');
const contentPage = document.getElementById('contentPage');

// Listen for the exact moment the video finishes playing
video.addEventListener('ended', () => {
    
    // 1. Completely hide the video element
    video.style.display = 'none';
    
    // 2. Add the background class layout wrapper to the document body
    document.body.classList.add('bg-active');
    
    // 3. Make the hidden contents page reveal itself
    contentPage.style.display = 'flex';
});