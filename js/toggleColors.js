document
	.getElementById("themeColorButton")
	.addEventListener("click", toggleColors);
let darkMode = document.getElementById("darkMode");

let moonOrSun = document.getElementById("moonOrSun");
let sunRays = document.getElementById("sunRays");
let moonMask = document.getElementById("moonMask");

function initAnimation() {
	if (JSON.parse(localStorage.getItem("dark-mode-storage"))) {
		moonMask.style.top = "-8px";
		moonMask.style.right = "-5px";
		moonOrSun.style.transform = "scale(1)";
		sunRays.style.transform = "scale(0.1)";
	} else {
		moonMask.style.top = "-25px";
		moonMask.style.right = "-15px";
		moonOrSun.style.transform = "scale(0.5)";
		sunRays.style.transform = "scale(0.6)";
	}
}

function toggleColors() {
	if (JSON.parse(localStorage.getItem("dark-mode-storage"))) {
		moonMask.classList.add("mask-to-sun-animation");
		moonOrSun.classList.add("to-sun-animation");
		sunRays.classList.add("expand-rays");

		setTimeout(function () {
			sunRays.classList.remove("expand-rays");
		}, 500);
		setTimeout(function () {
			moonMask.classList.remove("mask-to-sun-animation");
			moonOrSun.classList.remove("to-sun-animation");
			initAnimation();
		}, 400);
	} else {
		moonMask.classList.add("mask-to-moon-animation");
		moonOrSun.classList.add("to-moon-animation");
		sunRays.classList.add("contract-rays");

		setTimeout(function () {
			sunRays.classList.remove("contract-rays");
		}, 500);
		setTimeout(function () {
			moonMask.classList.remove("mask-to-moon-animation");
			moonOrSun.classList.remove("to-moon-animation");
			sunRays.classList.remove("contract-rays");
			initAnimation();
		}, 400);
	}
	setTheme();
}

function setTheme() {
	// Invert current values & persist new value to localStorage
	localStorage.setItem(
		"dark-mode-storage",
		!JSON.parse(localStorage.getItem("dark-mode-storage"))
	);
	darkMode.disabled = JSON.parse(localStorage.getItem("dark-mode-storage"));
}

darkMode.disabled = JSON.parse(localStorage.getItem("dark-mode-storage"));
initAnimation();
