import men from "../templates/men.hbs";
import API from "../../page-admin-products/js/api";

const ul = document.querySelector(".img_list2");
const modal = document.querySelector("#myModal");
const close = document.querySelector(".close2");
const product = document.querySelector(".product2");
const description = document.querySelector(".description2");
const price = document.querySelector(".price2");
const imgModal = document.querySelector(".img_modal2");

API.getGenderProducts("Мужские").then(prod => {
  console.log("prod", prod);
  const abc = men(prod);
  ul.insertAdjacentHTML("afterbegin", abc);
});

ul.addEventListener("click", e => {
  e.preventDefault();
  if (e.target.nodeName === "IMG") {
    modal.style.display = "block";
    console.log();

    API.getProduct(`${e.target.id}`).then(prod => {
      const abc = men(prod);
      imgModal.src = e.target.dataset.image;
      product.textContent = e.target.dataset.product;
      description.textContent = e.target.dataset.description;
      price.textContent = e.target.dataset.price;
    });
  }
});
close.addEventListener("click", function() {
  modal.style.display = "none";
});
window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
