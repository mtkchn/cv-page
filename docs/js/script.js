
$(document).ready(function () {
	new WOW().init();
	skillProgressControll();
	mySlider.createSlides();
	document.querySelector(".slider").addEventListener("animationend", AnimationListener, false);
});

function AnimationListener(){
	setInterval( () => {
		mySlider.right();
	}, 5000);
}

let mySlider = {
	sliderEl: document.querySelector(".carousel"),
	slides: [],
	slidesCount: 8,
	framesWidth: 0,
	frame: 0,
	trasformValue: 0,
	counterI: 0,
	set: function (slide) {
		this.sliderEl.style.webkitTransform = 'translateX(' + (this.trasformValue -= slide.clientWidth) + 'px)';
	},
	createSlides: function () {
		for (let i = 0; i < this.slidesCount; i++) {
			let item = document.createElement('div');
			item.classList.add('slider-item');
			this.sliderEl.append(item);
			let content = document.createElement("img");
			content.setAttribute("src", "./img/slider/" + (i + 1) + ".svg");
			item.appendChild(content);

			this.slides[i] = item;

		}
	},
	init: function () {
		this.sliderEl.style.webkitTransform = 'translateX(' + (0) + 'px)';
	},
	checkPoint: function () {
		let slider = document.querySelector('.slider');
		if (this.sliderEl.getBoundingClientRect().right < slider.getBoundingClientRect().right) {
			console.log('DOROU!!!');
			this.frame = 0;
			this.trasformValue = 0;
			this.init();

		}
	},
	right: function () {
		this.set(this.slides[this.frame]);
		this.frame++
		this.checkPoint();
	}
}

//funkcja wypelnia wartosci w sekcji umietnosci
function skillProgressControll() {
	let skillsProgress = document.getElementsByClassName('skill-determinate');
	let progressValue = document.getElementsByClassName('progressValue');
	for (let i = 0; i < skillsProgress.length; i++) {
		progressValue[i].textContent = skillsProgress[i].dataset.percent;
		skillsProgress[i].style.width = skillsProgress[i].dataset.percent;
	}
}


