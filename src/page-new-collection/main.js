import "../scss/main.scss";
import addingToCart from "../jsForChart/addToChart";
import list from "./list.hbs";
const featuresList = document.querySelector(".features-list");
import "../page-admin-products/js/api";
import "../partials/footer";

const markDishes = list(picArr);
console.log("markDishes", list());

featuresList.insertAdjacentHTML("afterbegin", markDishes);

const addToCart = document.querySelector(".calash");
const listListener = document.querySelector(".features-list");
listListener.addEventListener("click", e => addingToCart(e, picArr));

console.dir(addToCart);
