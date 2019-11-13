import "../js/is-autorization";
import $ from "jquery";
import list from "./list.hbs";
const featuresList = document.querySelector(".features-list");
import "../js/indexadmin";
import "../scss/main.scss";
import "./page.scss";
import API from "../page-admin-products/js/api";
import "../partials/footer";

// --------------------Slider-------------------------------------

let $slides, interval, $selectors, $btns, currentIndex, nextIndex;
let cycle = index => {
  let $currentSlide, $nextSlide, $currentSelector, $nextSelector;
  nextIndex = index !== undefined ? index : nextIndex;
  $currentSlide = $($slides.get(currentIndex));
  $currentSelector = $($selectors.get(currentIndex));
  $nextSlide = $($slides.get(nextIndex));
  $nextSelector = $($selectors.get(nextIndex));
  $currentSlide.removeClass("active").css("z-index", "0");
  $nextSlide.addClass("active").css("z-index", "1");
  $currentSelector.removeClass("current");
  $nextSelector.addClass("current");
  currentIndex =
    index !== undefined
      ? nextIndex
      : currentIndex < $slides.length - 1
      ? currentIndex + 1
      : 0;

  nextIndex = currentIndex + 1 < $slides.length ? currentIndex + 1 : 0;
};

$(() => {
  currentIndex = 0;
  nextIndex = 1;

  $slides = $(".slide");
  $selectors = $(".selector");
  $btns = $(".btn");

  $slides.first().addClass("active");
  $selectors.first().addClass("current");

  interval = window.setInterval(cycle, 4000);

  $selectors.on("click", e => {
    let target = $selectors.index(e.target);
    if (target !== currentIndex) {
      window.clearInterval(interval);
      cycle(target);
      interval = window.setInterval(cycle, 4000);
    }
  });

  $btns.on("click", e => {
    window.clearInterval(interval);
    if ($(e.target).hasClass("prev")) {
      let target = currentIndex > 0 ? currentIndex - 1 : $slides.length - 1;
      cycle(target);
    } else if ($(e.target).hasClass("next")) {
      cycle();
    }
    interval = window.setInterval(cycle, 4000);
  });
});

let newPicArr = [];
API.getPopular().then(picArr => {
  featuresList.insertAdjacentHTML("afterbegin", list(picArr));
  newPicArr = JSON.stringify(picArr);
});

const addToCart = document.querySelector(".calash");
const listListener = document.querySelector(".features-list");
listListener.addEventListener("click", e => addingToCart(e));

let chart = [];
if (localStorage.getItem("good") !== null) {
  chart = JSON.parse(localStorage.getItem("good"));
}

function addingToCart(e) {
  let picArr = JSON.parse(newPicArr);

  if (e.target.nodeName === "BUTTON") {
    const el = picArr.find(el => el._id === e.target.dataset.id);

    if (chart.find(el => el._id === e.target.dataset.id)) {
      return; //add function quantity
    } else {
      chart = [...chart, el];
      localStorage.setItem("good", JSON.stringify(chart));
    }
  }
}

const cartRef = document.querySelector(".modal-cart");
const buttonCart = document.querySelector(".button-cart");
const modalCartClose = document.querySelector(".modal-cart__close");
const cartUl = document.querySelector(".cart-list");
const nav = document.querySelector(".nav");
const body = document.querySelector("body");

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

body.addEventListener("click", ev => {
  renderingGallery(chart);
});

modalCartClose.addEventListener("click", () => {
  cartRef.classList.remove("show");
});

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

const renderingGallery = () => {
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
};
renderingGallery(chart);
