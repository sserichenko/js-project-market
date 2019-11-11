import './product-ex';
import API from './api';
import templete from '../html/templates/template.hbs';
const allProductsList = document.querySelector('.all-products-list');

const productForm = document.querySelector('form.new-product');
const materialBlock = [...productForm.querySelector('#wear-material').children];
const addImg = document.querySelector('#wear-image');
const reader = new FileReader();
const viewImg = document.querySelector('#product-img');

console.dir(addImg);

reader.onload = e => {
  viewImg.src = e.target.result;
};

addImg.addEventListener('change', e => {
  const f = e.target.files[0];
  reader.readAsDataURL(f);
});

function materialSelection(arr) {
  const materialSelect = [];
  arr.forEach(obj => {
    if (obj.checked) {
      materialSelect.push(obj.value);
    }
  });
  return materialSelect;
}

productForm[13].addEventListener('click', e => {
  e.preventDefault();
  const product = {
    type: productForm.querySelector('#wear-type').value,
    gender: productForm.querySelector('#wear-applicability').value,
    material: materialSelection(materialBlock),
    brandName: productForm.querySelector('#wear-brandName').value,
    name: productForm.querySelector('#wear-modelName').value,
    size: +productForm.querySelector('#wear-size').value,
    image: productForm.querySelector('#wear-image').files[0],
    description: productForm.querySelector('#wear-description').value,
    price: +productForm.querySelector('#wear-price').value,
    availability: +productForm.querySelector('#wear-availability').value,
    popular: productForm.querySelector('#wear-popular').checked,
    purchases: 0,
  };

  document.getElementById('product-management').reset();
  viewImg.src = '../../img/no-image-icon.png';
  const formData = new FormData();
  Object.keys(product).forEach(key => {
    formData.append(key, product[key]);
  });
  API.addNewProduct(formData).then(data => {
    const obj = [data.products[data.products.length - 1]];
    console.log(obj);
    const markUp = templete(obj);
    console.log(markUp);
    allProductsList.insertAdjacentHTML('afterBegin', markUp);
  });
});
