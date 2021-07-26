const cp = document.getElementById('colourPicker');
let colour;
if (localStorage.getItem('bg')) {
  document.body.style.backgroundColor = localStorage.getItem('bg');
}

cp.addEventListener('change', () => {
  console.log('called');
  colour = cp.value;
  document.body.style.backgroundColor = cp.value;
  localStorage.setItem('bg', colour);
});
