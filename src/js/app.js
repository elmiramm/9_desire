import * as flsFunctions from "./modules/functions.js";
import Swiper, { Navigation, Pagination, Parallax } from 'swiper';
import mixitup from 'mixitup';

if (document.querySelector(".gallery__inner")) {
	var mixer = mixitup('.gallery__inner', {
		load: {
			filter: '.living',
		}
	});
}

flsFunctions.isWebp();

// ------Swiper-------
Swiper.use([Navigation, Pagination, Parallax]);

if (document.querySelector('.slider-top__body')) {
	new Swiper('.slider-top__body', {
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 100,
		watchOverflow: false,
		speed: 800,
		loop: true,
		loopAdditionalSlides: 5,
		preloadImage: false,
		// parallax: true,
		pagination: {
			el: '.slider-top__controls .dots',
			clickable: true,
			dynamicBullets: true,
		},
		// navigation: {
		// 	nextEl: '.slider-section .slider-arrow--next',
		// 	prevEl: '.slider-section .slider-arrow--prev',
		// },
		// breakpoints: {
		// 	279: {
		// 		slidesPerView: 1.1,
		// 		spaceBetween: 15,
		// 	},
		// 	768: {
		// 		slidesPerView: 2,
		// 		spaceBetween: 20,
		// 	},
		// 	992: {
		// 		slidesPerView: 3,
		// 		spaceBetween: 32,
		// 	},
		// }
	});
}
// ------Swiper-End-------

window.onload = function () {
	document.addEventListener('click', documentActions);

	//-------Active links on Page--------
	const page = document.querySelector('.page');
	if (page.classList.contains("about-page")) {
		const about = document.querySelectorAll('.menu__list-link').forEach(elem => {
			if (elem.textContent === "About") {
				elem.classList.add('active-header-link');
			}
		})
	}
	//-------Active links on Page-End-------



	//------Действия-при-кликах------
	function documentActions(e) {
		const targetElement = e.target;

		//------------Close/Open-rightsite-menu-------------
		if (targetElement.classList.contains('header__btn') || targetElement.closest('.header__btn')) {
			document.querySelector(".rightsite-menu").classList.remove('rightsite-menu--close');
		}
		if (targetElement.classList.contains('rightsite-menu__close') || targetElement.closest('.rightsite-menu__close')) {
			document.querySelector(".rightsite-menu").classList.add('rightsite-menu--close');
		}
		//------------Close/Open-rightsite-menu-End------------

		// ---------Если кликнули на бургер---------
		if (targetElement.classList.contains('burger') || targetElement.closest('.burger')) {

			const elem = targetElement.classList.contains('burger') ? targetElement : targetElement.closest('.burger');
			elem.classList.toggle('active-burger');

			const menuBody = document.querySelector('.header__menu');
			menuBody.classList.toggle('menu-active');
		}
		// -------Если кликнули на бургер-End----------
	}
	//------Действия-при-кликах-End-----

}