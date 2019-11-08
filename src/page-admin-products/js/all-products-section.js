// console.log('Hello!');

import templete from '../html/templates/template.hbs';
import API from './api';

const allProductsList = document.querySelector('.all-products-list');

// console.log(templete);

API.getProducts().then(prod => {
  const content = templete(prod);
  allProductsList.innerHTML = content;
});
