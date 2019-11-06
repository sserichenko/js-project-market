import './product-ex';
import addNewProduct from './add-product';

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
    image: productForm.querySelector('#wear-image').value,
    description: productForm.querySelector('#wear-description').value,
    price: +productForm.querySelector('#wear-price').value,
    availability: +productForm.querySelector('#wear-availability').value,
    popular: productForm.querySelector('#wear-popular').checked,
    purchases: 0,
  };
  document.getElementById('product-management').reset();
  addNewProduct(product);
  console.log('product :', product);
});
