function importModules() {
	if (document.location.pathname === '/index.html') {
		import('./modules/scrollspy.js').then(module => window.addEventListener('scroll', module.scrollspy));
	} else if (document.location.pathname === '/oferta.html') {
		import('./modules/price.js').then(module => module.calculatePrice());
	}
}
importModules();

function addListenerToNav() {
	const navBtn = document.getElementById('nav-btn');
	function toggleNavigation() {
		const navMobile = document.getElementById('nav-mobile');
		const navIcon = document.getElementById('nav-icon');
		navIcon.classList.toggle('ti-menu-2');
		navIcon.classList.toggle('ti-x');
		navMobile.classList.toggle('nav__items--active');
		navBtn.classList.add('rotate');
		setTimeout(() => {
			navBtn.classList.remove('rotate');
		}, 400);

		if (navMobile.classList.contains('nav__items--active')) {
			window.addEventListener('scroll', toggleNavigation);
		} else {
			window.removeEventListener('scroll', toggleNavigation);
		}
		navMobile.addEventListener('click', toggleNavigation);
	}
	navBtn.addEventListener('click', toggleNavigation);
}
addListenerToNav();

function getYear() {
	const span = document.getElementById('year');
	const date = new Date();
	span.textContent = date.getFullYear();
}
getYear();
