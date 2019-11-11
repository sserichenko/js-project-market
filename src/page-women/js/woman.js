import woman from "../templates/woman.hbs";
import API from "../../page-admin-products/js/api";
import '../../jsForChart/addToChart';


const ul = document.querySelector(".img_list2");
const modal = document.querySelector("#myModal");
const close = document.querySelector(".close2");
const product = document.querySelector(".product2");
const description = document.querySelector(".description2");
const price = document.querySelector(".price2");
const imgModal = document.querySelector(".img_modal2");

let newProd = []


API.getGenderProducts("Женские").then(prod => {
  const abc = woman(prod);
  newProd = JSON.stringify(prod);
  ul.insertAdjacentHTML("afterbegin", abc);
});

ul.addEventListener("click", e => {
  if (e.target.nodeName === "IMG") {
    modal.style.display = "block";

    API.getProduct(`${e.target.id}`).then(prod => {
      const abc = woman(prod);
      imgModal.src = e.target.dataset.image;
      imgModal.dataset.action = `${e.target.id}`;
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


const modal2 = document.querySelector('.modal2')
const btn_card2 = modal2.querySelector('.btn_card2')




function addingToCartFromModal(e) {
  const img_modal2 = document.querySelector('.img_modal2');

  let picArr = JSON.parse(newProd);
  let chart2 = JSON.parse(localStorage.getItem("good"));

  if (e.target.nodeName === "BUTTON") {

    const el = picArr.find(el => el._id == img_modal2.dataset.action);

    if (chart2.find(el => el._id == img_modal2.dataset.action)) {
      return; //add function quantity
    } else {
      chart2 = [...chart2, el];
      localStorage.setItem("good", JSON.stringify(chart2));
    }
  }
}


modal2.addEventListener('click', e => addingToCartFromModal(e))

