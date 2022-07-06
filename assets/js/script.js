function typeWrite(elemento) {
	const textoArray = elemento.innerHTML.split('');
	elemento.innerHTML = ' ';
	elemento.innerHTML = '<';
	textoArray.forEach(function (letra, i) {
		setTimeout(function () {
			if (letra === ';') {
				elemento.innerHTML += '>';
			} else {
				elemento.innerHTML += letra;
			}
		}, 75 * i);
	});
}

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
	myFunction();
};

// Get the navbar
var navbar = document.getElementById('navbar');

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add('sticky');
	} else {
		navbar.classList.remove('sticky');
	}
}

const titulo = document.querySelector('.apresnetacao-name');
typeWrite(titulo);
