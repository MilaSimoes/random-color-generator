let changeBtn = document.querySelector('#changeBtn');
let colorCode = document.querySelector('#colorCode');

changeBtn.addEventListener('click', changeBg);

function changeBg() {
	let randomColor = Math.floor(Math.random()*16777215).toString(16);
	document.body.style.backgroundColor = `#${randomColor}`;
	colorCode.innerHTML = `#${randomColor}`;
}