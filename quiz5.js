<script>
document.querySelector('.parent').addEventListener('click', () => {
  console.log('Parent clicked');
});

document.querySelector('.child').addEventListener('click', (event) => {
  console.log('Child clicked');
  event.stopPropagation(); 
});
</script>
