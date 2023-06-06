//your code here
let div = document.getElementById('app');
let button = document.getElementById('swap');

button.addEventListener('click', function() {
  if (div.style.background === 'black') {
    div.style.background = 'white';
  } else {
    div.style.background = 'black';
  }
});
