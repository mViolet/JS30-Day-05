const panels = document.querySelectorAll(".panel");

function toggleOpen () {
	this.classList.toggle("open");
}

function toggleActive (element) {
	console.log(element.propertyName);

	if (element.propertyName.includes('flex') == true)
	{
		this.classList.toggle("open-active");
	}
}

panels.forEach(function (element) {
	element.addEventListener('click', toggleOpen);
	element.addEventListener('transitionend', toggleActive);
});