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
}
