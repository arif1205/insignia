window.addEventListener("load", main);

function main() {
	// navbar shrink on scroll
	const nav = document.querySelector("nav");
	const header = document.querySelector("header");
	const scrollIndicator = document.querySelector("nav .scroll-indicator");

	header.style.paddingTop = `${nav.clientHeight}px`;

	const scrollFunction = () => {
		const bodyScroll =
			document.body.scrollTop || document.documentElement.scrollTop;
		const height =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight;

		if (bodyScroll >= 80) {
			nav.classList.add("sticky-navbar");
		} else {
			nav.classList.remove("sticky-navbar");
		}

		scrollIndicator.style.width = `${(bodyScroll / height) * 100}%`;
	};

	window.addEventListener("scroll", scrollFunction);

	// appear navbar on click
	const bars = document.querySelector(".bars");
	const sideNav = document.querySelector("#side-nav");

	const toggleNav = () => {
		sideNav.classList.toggle("left-zero");
	};

	bars.addEventListener("click", toggleNav);

	// set height for slide container
	const slideContainer = [...document.querySelectorAll(".slide_container")];

	const setHeightOfSlideContainer = () => {
		slideContainer.forEach((container) => {
			const cardHeight = container.querySelector(".slide-card").clientHeight;
			container.style.height = `${cardHeight + 40}px`;
		});
	};

	setHeightOfSlideContainer();

	window.addEventListener("resize", setHeightOfSlideContainer);

	// slide functionality
	const arrowControllers = [...document.querySelectorAll(".arrow_controller")];
	let currentFeature = 0,
		currentTestimonial = 0;

	// slide function
	const slide = (increment, slideCards, type, dots) => {
		const cardWidth = slideCards.querySelector(".slide-card").clientWidth + 30;

		dots.forEach((dot) => dot.classList.remove("active"));

		if (type === "feature") {
			currentFeature += increment;
			if (currentFeature > 2) currentFeature = 2;
			if (currentFeature < 0) currentFeature = 0;
			slideCards.style.left = `-${currentFeature * cardWidth}px`;
			dots[currentFeature].classList.add("active");
		} else if (type === "testimonial") {
			currentTestimonial += increment;
			if (currentTestimonial > 2) currentTestimonial = 2;
			if (currentTestimonial < 0) currentTestimonial = 0;
			slideCards.style.left = `-${currentTestimonial * cardWidth}px`;
			dots[currentTestimonial].classList.add("active");
		}
	};

	arrowControllers.forEach((arrow) => {
		// slide cards container
		const slideCards =
			arrow.parentElement.previousElementSibling.querySelector(".slide_cards");
		const dots = [...arrow.previousElementSibling.querySelectorAll("div")];

		const arrows = arrow.querySelectorAll("span");
		const leftArrow = arrows[0];
		const rightArrow = arrows[1];

		// for feature slide
		if (slideCards.getAttribute("data-type") === "feature") {
			leftArrow.addEventListener("click", () =>
				slide(-1, slideCards, "feature", dots)
			);
			rightArrow.addEventListener("click", () =>
				slide(1, slideCards, "feature", dots)
			);
		} else if (slideCards.getAttribute("data-type") === "testimonial") {
			leftArrow.addEventListener("click", () =>
				slide(-1, slideCards, "testimonial", dots)
			);
			rightArrow.addEventListener("click", () =>
				slide(1, slideCards, "testimonial", dots)
			);
		}
	});
}
