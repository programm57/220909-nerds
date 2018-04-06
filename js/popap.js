var open = document.querySelector(".button-letter");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".feedback-close");
var usernamefield = popup.querySelector("[name=usernamefield]");
var email = popup.querySelector("[name=email]");
var form = popup.querySelector("form");

	open.addEventListener("click", function (evt) {
			evt.preventDefault();
			popup.classList.add("modal-show");
			usernamefield.focus();
	});

	close.addEventListener("click", function (evt) {
			evt.preventDefault();
			popup.classList.remove("modal-show");
	}); 

	form.addEventListener("submit", function (evt) {
		if (!usernamefield.value || !email.value) {
			evt.preventDefault();
			console.log("Нужно ввести Ваше имя и электронную почту");
		}
	});

	window.addEventListener("keydown", function (evt) {
		if (evt.keyCode === 27) {
			evt.preventDefault();
		if (popup.classList.contains("modal-show")) {
			popup.classList.remove("modal-show");
			}
		}
	});