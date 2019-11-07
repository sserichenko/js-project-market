import './product-ex';
import API from './api';

const productForm = document.querySelector('form.new-product');
const materialBlock = [...productForm.querySelector('#wear-material').children];

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

  const formData = new FormData();
  Object.keys(product).forEach(key => {
    formData.append(key, product[key]);
  });
  API.addNewProduct(formData);
  console.log('formData :', formData);
});

API.getProducts();
API.getProduct('5dc414260765883178486d79');
API.getPopular();

API.delProduct('5dc3d8563c96da35b8104f64');

// console.dir(productForm.querySelector('#wear-image'));
