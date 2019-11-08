let chart = [];
if (localStorage.getItem("good") !== null) {
  chart = JSON.parse(localStorage.getItem("good"));
}

console.log("chart1 :", chart);
export default function(e, picArr) {
  // console.log('picArr :', picArr);

  if (e.target.nodeName === "BUTTON") {
    const el = picArr.find(el => el.id === e.target.dataset.id);
    console.log("chart2 :", chart);

    console.log('el :', el);
    if (chart.find(el => el.id === e.target.dataset.id)) {
      return; //add function quantity
    } else {
      chart = [...chart, el];
      // console.log('chart', chart);
      localStorage.setItem("good", JSON.stringify(chart));
      console.log("chart3 :", chart);
    }
  }
}

const cartRef = document.querySelector(".modal-cart");
const buttonCart = document.querySelector(".button-cart");
const modalCartClose = document.querySelector(".modal-cart__close");
const cartUl = document.querySelector(".cart-list");

buttonCart.addEventListener("click", () => {
  cartRef.classList.add("show");
  renderingGallery(chart);
});
modalCartClose.addEventListener("click", () => {
  cartRef.classList.remove("show");
});

// if(chart.length > 0) {
//   const markup = chart.reduce((acc, el) =>{
//     return `<li class="cart-item">
//     <div class="modal-item">
//     <img class="cart-list__img" src="${el.image}">
//     <span class="cart-list__name">${el.name}</span>
//     <span class="cart-list__price">$${el.price}</span>
//     </div>
//     </li>`
//   }, '');

//   cartRef.querySelector('.cart-list').innerHTML = markup;
// }
//=================================

const renderingGallery = () => {
  if (chart.length > 0) {
    cartUl.innerHTML = "";
    let markup = "";
    chart.forEach(el => {
      markup += `
        <li class="cart-item">
          <div class="modal-item">
            <img class="cart-list__img" src="${el.image}">
             <span class="cart-list__name">${el.name}</span>
             <span class="cart-list__price">$${el.price}</span>
             <button class=".del-chart-item"x</button>
          </div>
        </li>
        `;
    });
    cartUl.innerHTML = markup;
  }
};
renderingGallery(chart);
