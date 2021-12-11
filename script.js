const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger-menu');

burger.addEventListener('click', () => {
  burger.classList.toggle('opened');
  burgerMenu.classList.toggle('active');
  if (burger.classList.contains('opened')) {
    document.querySelector('body').style.overflow = 'hidden';
  } else {
    document.querySelector('body').style.overflow = 'visible';
  }
});
