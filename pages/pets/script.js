const burger = document.querySelector('.nav__header__burger');
const burgerUl = document.querySelector('ul');
const navBurgerMenu = document.querySelector('.nav__burger__menu');
const navBurgerMenuContainer = document.querySelector('.nav__burger__menu__container');
const navBurgerMenuList = document.querySelector('.nav__burger__menu__list');
const navBurgerMenuLinkFirst = document.querySelector('.nav__burger__menu__link__first');
const navBurgerMenuLinkSecond = document.querySelector('.nav__burger__menu__link__second');
const navBurgerMenuLinkThird = document.querySelector('.nav__burger__menu__link__third');
const navBurgerMenuLinkFourth = document.querySelector('.nav__burger__menu__link__fourth');
const logoBurger = document.querySelector('.logo__burger');
const bodyBurger = document.querySelector('.body__burger');
const headerMain = document.querySelector('.header');
const hrBurger = document.querySelectorAll('.hr__burger');

function toggleMenu() {
  bodyBurger.classList.toggle('overlay');
  headerMain.classList.toggle('header__burger');
  for (let i =0; i< hrBurger.length; i++) {
    hrBurger[i].classList.toggle('open');
  };
  logoBurger.classList.toggle('open');
  burgerUl.classList.toggle('open');
  navBurgerMenu.classList.toggle('open');
  navBurgerMenuContainer.classList.toggle('open');
  navBurgerMenuList.classList.toggle('open');
  navBurgerMenuLinkFirst.classList.toggle('open');
  navBurgerMenuLinkSecond.classList.toggle('open');
  navBurgerMenuLinkThird.classList.toggle('open');
  navBurgerMenuLinkFourth.classList.toggle('open');
  burger.classList.toggle('open');
}

burger.addEventListener('click', toggleMenu);
navBurgerMenuLinkFirst.addEventListener('click', toggleMenu);
navBurgerMenuLinkSecond.addEventListener('click', toggleMenu);
navBurgerMenuLinkThird.addEventListener('click', toggleMenu);
navBurgerMenuLinkFourth.addEventListener('click', toggleMenu);
bodyBurger.addEventListener('click', toggleMenu);