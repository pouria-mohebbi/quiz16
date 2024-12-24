document.addEventListener('DOMContentLoaded', function() {
    const closeButton = document.querySelector('.close-btn');
    const messageBox = document.querySelector('.message-box');

    closeButton.addEventListener('click', function() {
        messageBox.style.display = 'none';
    });
});
