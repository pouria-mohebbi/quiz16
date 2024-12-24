const editor = document.getElementById('editor');
const removeLastBtn = document.getElementById('removeLast');
const deleteAllBtn = document.getElementById('deleteAll');
const boldTextBtn = document.getElementById('boldText');
const italicizeTextBtn = document.getElementById('italicizeText');


removeLastBtn.addEventListener('click', () => {
  editor.textContent = editor.textContent.slice(0, -1);
});


deleteAllBtn.addEventListener('click', () => {
  editor.textContent = '';
});


boldTextBtn.addEventListener('click', () => {
  document.execCommand('bold');
});


italicizeTextBtn.addEventListener('click', () => {
  document.execCommand('italic');
});