// console.log('Hello!');

import templete from '../html/templates/template.hbs';
import API from './api';

const allProductsList = document.querySelector('.all-products-list');

API.getProducts().then(prod => {
  const content = templete(prod);
  allProductsList.insertAdjacentHTML('beforeEnd', content);
});

allProductsList.addEventListener('click', e => {
  if (e.target.id === 'deleteBtn') {
    API.delProduct(e.target.parentElement.id);
    alert('Product removed successfully!');
  }
});
