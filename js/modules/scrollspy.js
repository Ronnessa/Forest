export function scrollspy() {
	const links = document.querySelectorAll('.nav__link');
	const aboutUs = document.getElementById('aboutus').offsetTop;
	const offer = document.getElementById('offer').offsetTop;
	const navHeight = document.getElementById('header').offsetTop;

	const changeClasses = index => {
		links.forEach(link => link.classList.remove('nav__current'));
		links[index].classList.add('nav__current');
	};

	if (window.scrollY < aboutUs - navHeight) {
		changeClasses(0);
	} else if (window.scrollY >= aboutUs - navHeight && window.scrollY < offer - navHeight) {
		changeClasses(1);
	} else if (window.scrollY >= offer - navHeight) {
		changeClasses(2);
	}
}
