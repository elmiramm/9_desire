import * as flsFunctions from "./modules/functions.js";
import Swiper, { Navigation, Pagination, Parallax } from 'swiper';

flsFunctions.isWebp();

// ------Swiper-------
Swiper.use([Navigation, Pagination, Parallax]);

if (document.querySelector('.slider-section__body')) {
	new Swiper('.slider-section__body', {
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 32,
		watchOverflow: true,
		speed: 800,
		loop: true,
		loopAdditionalSlides: 5,
		preloadImage: false,
		parallax: true,
		pagination: {
			el: '.slider-section-controls .dots',
			clickable: true,
		},
		navigation: {
			nextEl: '.slider-section .slider-arrow--next',
			prevEl: '.slider-section .slider-arrow--prev',
		},
		breakpoints: {
			279: {
				slidesPerView: 1.1,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 32,
			},
		}
	});
}
// ------Swiper-End-------

window.onload = function () {
	document.addEventListener('click', documentActions);

	//------Действия-при-кликах------
	function documentActions(e) {
		const targetElement = e.target;


		// Если кликнули на бургер
		if (targetElement.classList.contains('burger') || targetElement.closest('.burger')) {

			const elem = targetElement.classList.contains('burger') ? targetElement : targetElement.closest('.burger');
			elem.classList.toggle('active-burger');

			const menuBody = document.querySelector('.header__menu');
			menuBody.classList.toggle('menu-active');
		}
	}
	//------Действия-при-кликах-End-----
}