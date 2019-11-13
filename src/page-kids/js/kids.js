import kids from "../templates/kids.hbs";
import API from "../../page-admin-products/js/api";

const ul = document.querySelector(".img_list2");
const modal = document.querySelector("#myModal");
const close = document.querySelector(".close2");
const product = document.querySelector(".product2");
const description = document.querySelector(".description2");
const price = document.querySelector(".price2");
const imgModal = document.querySelector(".img_modal2");
const cartUl = document.querySelector(".cart-list");
const cartRef = document.querySelector(".modal-cart");
const nav = document.querySelector(".nav");
const modalCartClose = document.querySelector(".modal-cart__close");

let newProd = [];
let chart = [];
if (localStorage.getItem("good") !== null) {
  chart = JSON.parse(localStorage.getItem("good"));
}

console.log("chart", chart);

API.getGenderProducts("Детские").then(prod => {
  console.log("prod", prod);
  const abc = kids(prod);
  newProd = JSON.stringify(prod);
  ul.insertAdjacentHTML("afterbegin", abc);
});

ul.addEventListener("click", e => {
  e.preventDefault();
  if (e.target.nodeName === "IMG") {
    modal.style.display = "block";

    API.getProduct(`${e.target.id}`).then(prod => {
      const abc = kids(prod);
      imgModal.src = e.target.dataset.image;
      product.textContent = e.target.dataset.product;
      imgModal.dataset.action = `${e.target.id}`;
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

close.addEventListener("click", function() {
  modal.style.display = "none";
});
window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

const modal2 = document.querySelector(".modal2");
const btn_card2 = modal2.querySelector(".btn_card2");

function addingToCartFromModal(e) {
  console.log("add00");
  const img_modal2 = document.querySelector(".img_modal2");

  let picArr = JSON.parse(newProd);
  // let chart2 = JSON.parse(localStorage.getItem("good"));
  // let chart2 = chart
  // console.log('chart2', chart2)
  if (e.target.nodeName === "BUTTON") {
    const el = picArr.find(el => el._id == img_modal2.dataset.action);

    if (chart.find(el => el._id == img_modal2.dataset.action)) {
      return; //add function quantity
    } else {
      chart = [...chart, el];
      localStorage.setItem("good", JSON.stringify(chart));
      renderingGallery(chart);
    }
  }
}

modal2.addEventListener("click", e => addingToCartFromModal(e));

cartRef.addEventListener("click", e => {
  if (e.target.nodeName === "BUTTON" && e.target.dataset.action === "del") {
    const elIndex = chart.find((el, index) => {
      if (el._id === e.target.id) {
        return index;
      }
    });

    chart.splice(elIndex, 1);

    localStorage.setItem("good", JSON.stringify(chart));
    renderingGallery(chart);
  }
});

modalCartClose.addEventListener("click", () => {
  cartRef.classList.remove("show");
});

nav.addEventListener("click", ev => {
  if (
    ev.target.nodeName === "BUTTON" ||
    ev.target.dataset.action === "openChart" ||
    ev.target.dataset.action === "openChartSVG"
  ) {
    cartRef.classList.add("show");
    renderingGallery(chart);
  }
});

function renderingGallery() {
  console.log("render");
  let markup = "";
  if (chart.length > 0) {
    cartUl.innerHTML = "";
    chart.forEach(el => {
      markup += `
        <li class="cart-item">
          <div class="modal-item">
            <img class="cart-list__img" src="http://localhost:3000${el.image}">
             <span class="cart-list__name">${el.name}</span>
             <span class="cart-list__price">$${el.price}</span>
             <button id="${el._id}" data-action="del" class="del-chart-item">x</button>
          </div>
        </li>
        `;
    });
  }
  cartUl.innerHTML = markup;
}
renderingGallery(chart);
