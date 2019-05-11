document.getElementById('turn__left').onclick = sliderLeft;
var left = 0;

function sliderLeft() {
	var polosa = document.getElementById('row');
	left = left - 128;
	if (left < -384) { //что бы слайдер не выходил за пределы рамки
		left = 0;
	}
	polosa.style.left = left + 'px'; // Команда .left работает только если у элемента стоит position: absolute, relative, fixed
}