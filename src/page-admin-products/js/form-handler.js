import "./product-ex";
import API from "./api";
import templete from "../html/templates/template.hbs";

const allProductsList = document.querySelector(".all-products-list");
const productForm = document.querySelector("form.new-product");
const materialBlock = [...productForm.querySelector("#wear-material").children];
const addImg = document.querySelector("#wear-image");
const viewImg = document.querySelector("#product-img");
const prodManageBtn = document.querySelector('button[type="submit"]');
const formData = new FormData();
const reader = new FileReader();

reader.onload = e => {
  viewImg.src = e.target.result;
};

addImg.addEventListener("change", e => {
  const f = e.target.files[0];
  reader.readAsDataURL(f);
});

prodManageBtn.addEventListener("click", e => {
  e.preventDefault();
  if (prodManageBtn.textContent === "Добавить") {
    const product = formParser();

    formReset();
    exportImg(product);
    API.addNewProduct(formData).then(data => {
      showNewProduct(data);
    });
  }
});

function formParser() {
  return {
    type: productForm.querySelector("#wear-type").value,
    gender: productForm.querySelector("#wear-applicability").value,
    material: JSON.stringify(materialSelection(materialBlock)),
    brandName: productForm.querySelector("#wear-brandName").value,
    name: productForm.querySelector("#wear-modelName").value,
    size: +productForm.querySelector("#wear-size").value,
    image: productForm.querySelector("#wear-image").files[0],
    description: productForm.querySelector("#wear-description").value,
    price: +productForm.querySelector("#wear-price").value,
    availability: +productForm.querySelector("#wear-availability").value,
    popular: productForm.querySelector("#wear-popular").checked,
    purchases: 0
  };
}

function materialSelection(arr) {
  const materialSelect = [];
  arr.forEach(obj => {
    if (obj.checked) {
      materialSelect.push(obj.value);
    }
  });
  return materialSelect;
}

function formReset() {
  document.getElementById("product-management").reset();
  viewImg.src = "../../img/no-image-icon.png";
}

function exportImg(obj) {
  Object.keys(obj).forEach(key => {
    formData.append(key, obj[key]);
  });
}

function showNewProduct(arr) {
  const lastProduct = [arr.products[arr.products.length - 1]];
  const markUp = templete(lastProduct);
  allProductsList.insertAdjacentHTML("afterBegin", markUp);
  alert("Product added successfully!");
}
