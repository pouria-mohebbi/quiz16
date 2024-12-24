document.addEventListener('DOMContentLoaded', function() {
    const placeBidButton = document.getElementById('placeBidButton');

    placeBidButton.addEventListener('click', function() {
    
        placeBidButton.textContent = 'Added to Cart';

        
        placeBidButton.disabled = true;
    });
});

