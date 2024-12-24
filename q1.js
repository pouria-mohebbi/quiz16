document.addEventListener('DOMContentLoaded', function() {
    const heartIcon = document.querySelector('.heart-icon');
    const counter = document.getElementById('counter');
    
    heartIcon.addEventListener('click', function() {
        
        heartIcon.classList.toggle('clicked');
        
      
        let count = parseInt(counter.textContent);
        counter.textContent = ++count;
    });
});
