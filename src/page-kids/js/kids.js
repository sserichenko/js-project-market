import kids from "../templates/kids.hbs";
import API from "../../page-admin-products/js/api";

const ul = document.querySelector(".img_list2");
const modal = document.querySelector("#myModal");
const close = document.querySelector(".close2");
const product = document.querySelector(".product2");
const description = document.querySelector(".description2");
const price = document.querySelector(".price2");
const imgModal = document.querySelector(".img_modal2");

// API.getGenderProducts('Детские').then(prod => {
//   const abc = kids(prod);
//   ul.insertAdjacentHTML("afterbegin", abc);
// });

API.getProducts().then(prod => {
  const abc = kids(prod);
  ul.insertAdjacentHTML("afterbegin", abc);
}); //потом закоментить!

ul.addEventListener("click", e => {
  e.preventDefault();
  if (e.target.nodeName === "IMG") {
    modal.style.display = "block";
    console.log();

    API.getProduct(`${e.target.id}`).then(prod => {
      const abc = kids(prod);
      imgModal.src = e.target.dataset.img_modal;
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
