document.getElementById('buttonContainer').addEventListener('click', function(event)
{ if (event.target.tagName === 'BUTTON') { console.log(event.target.textContent);