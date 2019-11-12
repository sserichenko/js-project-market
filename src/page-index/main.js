import "../js/is-autorization";
import $ from "jquery";
import addingToCart from "../jsForChart/addToChart";
import list from "./list.hbs";
const featuresList = document.querySelector(".features-list");
import "../js/indexadmin";
import "../scss/main.scss";
import "./page.scss";
import API from "../page-admin-products/js/api";

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded", "page-index");
});
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

API.getPopular().then(picArr => {
  localStorage.setItem("picArr", JSON.stringify(picArr));
  featuresList.insertAdjacentHTML("afterbegin", list(picArr));
});

const addToCart = document.querySelector(".calash");
const listListener = document.querySelector(".features-list");
listListener.addEventListener("click", e => addingToCart(e));
