import men from '../templates/men.hbs';

const x = [
  {
    src:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/hokkaido-4202825__340.jpg',
    id: 1,
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/hokkaido-4202825__340.jpg',
    product: 'кросовки',
    price: '$20',
    description: 'good',
  },
  {
    src:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    id: 2,
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    product: 'крос',
    price: '$50',
    description: 'not good',
  },
  {
    src:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    id: 3,
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    product: 'совки',
    price: '$20',
    description: 'not bad',
  },
];

const abc = men(x);
const ul = document.querySelector('.img_list2');
const modal = document.querySelector('#myModal');
const close = document.querySelector('.close2');
const product = document.querySelector('.product2');
const description = document.querySelector('.description2');
const price = document.querySelector('.price2');
const imgModal = document.querySelector('.img_modal2');
ul.insertAdjacentHTML('afterbegin', abc);

ul.addEventListener('click', e => {
  e.preventDefault();
  console.log(e.target);
  if (e.target.nodeName === 'IMG') {
    modal.style.display = 'block';
    imgModal.src = e.target.dataset.img_modal;
    product.textContent = e.target.dataset.product;
    description.textContent = e.target.dataset.description;
    price.textContent = e.target.dataset.price;
  }
});

close.addEventListener('click', function() {
  modal.style.display = 'none';
});
window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
const button = document.querySelector('.btn_card2');
btn_card.addEventListener('click', event=>{

})
