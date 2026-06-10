document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const message = document.getElementById('popping-message');
    const photo = document.getElementById('her-photo');

    // Handle the 'not-loaded' class removal
    // This ensures the initial animations start after a brief delay
    if (body.classList.contains('not-loaded')) {
        setTimeout(() => {
            body.classList.remove('not-loaded');
        }, 100); // Small delay to ensure CSS is applied before removal
    }

    // Adjust this delay (in milliseconds) based on how long you want the flower
    // animation to play before the message appears.
    // The longest animation delay in your HTML is 4.8s, so 5000ms (5 seconds)
    // is a good starting point to let the flowers grow first.
    const messageDisplayDelay = 5000; 

    setTimeout(() => {
        message.classList.add('show');
    }, messageDisplayDelay);

    // Show the photo 3 seconds after the message appears (5000ms + 3000ms)
    setTimeout(() => {
        photo.classList.add('show');
    }, messageDisplayDelay + 3000);
});