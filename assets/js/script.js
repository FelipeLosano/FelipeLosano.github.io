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

var btn = document.querySelector('#back-to-top');

window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
		btn.style.display = 'block';
	} else {
		btn.style.display = 'none';
	}
}

// When the user clicks on the button, scroll to the top of the document
btn.addEventListener('click', () => {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

const titulo = document.querySelector('.apresentacao-name');
typeWrite(titulo);
