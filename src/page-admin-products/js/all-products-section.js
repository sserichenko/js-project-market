// console.log('Hello!');

import templete from "../html/templates/template.hbs";
import API from "./api";

const allProductsList = document.querySelector(".all-products-list");
const productForm = document.querySelector("form.new-product");
const viewImg = document.querySelector("#product-img");
const materialBlock = [...productForm.querySelector("#wear-material").children];
const prodManageBtn = document.querySelector('button[type="submit"]');

API.getProducts().then(prod => {
  const content = templete(prod);
  allProductsList.insertAdjacentHTML("beforeEnd", content);
});

allProductsList.addEventListener("click", e => {
  if (e.target.id === "deleteBtn") {
    document
      .querySelector(`[data-id = '${e.target.parentElement.id}']`)
      .remove();
    API.delProduct(e.target.parentElement.id);
    alert("Product removed successfully!");
  } else if (e.target.id === "editBtn") {
    prodManageBtn.textContent = "Изменить";
    const id = e.target.parentElement.id;
    API.getProduct(`${id}`).then(data => {
      console.log(data);
      fillForm(data);
      prodManageBtn.addEventListener("click", e => {
        const change = changedProduct();
        console.log("отправка", id, change);
        API.changeProduct(id, change).catch(err => {
          console.log(err);
        });
        formReset();
        document.location.href = "admin-products.html";
      });
    });
  }
});

function fillForm(obj) {
  productForm.querySelector("#wear-type").value = obj.type;
  productForm.querySelector("#wear-applicability").value = obj.gender;
  productForm.querySelector("#wear-brandName").value = obj.brandName;
  productForm.querySelector("#wear-modelName").value = obj.name;
  productForm.querySelector("#wear-size").value = obj.size;
  productForm.querySelector("#wear-description").value = obj.description;
  productForm.querySelector("#wear-price").value = obj.price;
  productForm.querySelector("#wear-availability").value = obj.availability;
  productForm.querySelector("#wear-popular").checked = obj.popular;
  viewImg.src = `http://localhost:3000${obj.image}`;
  setMaterials(obj.material, materialBlock);
}

function setMaterials(arrMaterials, arrCheckbox) {
  // console.log(arrMaterials);
  arrMaterials.forEach(material => {
    arrCheckbox.forEach(el => {
      if (el.value === material) {
        el.checked = true;
      }
    });
  });
}

function changedProduct() {
  return {
    type: productForm.querySelector("#wear-type").value,
    gender: productForm.querySelector("#wear-applicability").value,
    material: materialSelection(materialBlock),
    brandName: productForm.querySelector("#wear-brandName").value,
    name: productForm.querySelector("#wear-modelName").value,
    size: +productForm.querySelector("#wear-size").value,
    description: productForm.querySelector("#wear-description").value,
    price: +productForm.querySelector("#wear-price").value,
    availability: +productForm.querySelector("#wear-availability").value,
    popular: productForm.querySelector("#wear-popular").checked
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
