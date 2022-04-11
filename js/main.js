const navBtn = document.getElementById('nav-btn');

function toggleNavigation() {
	const navMobile = document.getElementById('nav-mobile');
	const navIcon = document.getElementById('nav-icon');
	navIcon.classList.toggle('ti-menu-2');
	navIcon.classList.toggle('ti-x');
	navMobile.classList.toggle('nav__items--active');
	navBtn.classList.add('rotate');
	setTimeout(() => {navBtn.classList.remove('rotate')}, 400)

	if (navMobile.classList.contains('nav__items--active')) {
		window.addEventListener('scroll', toggleNavigation);
	} else {
		window.removeEventListener('scroll', toggleNavigation);
	}
	navMobile.addEventListener('click', toggleNavigation);
}

function scrollspy() {
	const links = document.querySelectorAll('.nav__link');
	const aboutUs = document.getElementById('aboutus').offsetTop;
	const offer = document.getElementById('offer').offsetTop
	const navHeight = document.getElementById('header').offsetTop

	const changeClasses = index => {
		links.forEach(link => link.classList.remove('nav__current'));
		links[index].classList.add('nav__current');
	};

	if (window.scrollY < aboutUs - navHeight) {
		changeClasses(0);
	} else if (window.scrollY >= aboutUs - navHeight && window.scrollY < offer - navHeight) {
		changeClasses(1);
	} 
	else if (window.scrollY >= offer - navHeight){
		changeClasses(2)
	}
}

(function getYear() {
	const span = document.getElementById('year');
	const date = new Date();
	span.textContent = date.getFullYear();
})();

navBtn.addEventListener('click', toggleNavigation);
window.addEventListener('scroll', scrollspy);
