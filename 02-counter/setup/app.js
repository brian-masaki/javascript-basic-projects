// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach( (btn) => {
btn.addEventListener('click', (e) => {
const btnClass = e.currentTarget.classList;

if (btnClass.contains('decrease')) { 
  count--;
} else if (btnClass.contains('increase')) {
  count++;
}  else if (btnClass.contains('reset')){
  count = 0;
} 

// Change value color depending on count
(count > 0) ? value.style.color = "green" : 
(count < 0) ? value.style.color = "red" :
value.style.color = "black";

// Display count
value.textContent = count;
})
});