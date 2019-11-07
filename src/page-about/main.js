import list from './list.hbs';
import $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.scss'
import '../scss/main.scss';
import './page.scss';


$('.slider__bottom--center').slick();


document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded', 'page-about');
  document.body.insertAdjacentHTML('beforeend', list());
});
